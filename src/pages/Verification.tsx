import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import bg from "../assets/login/Mask group.png";
import logo from "../assets/login/Group 3.png";
import { axiosClaint, endPoints } from "../api/API__information_conect";
import { useSelector } from "react-redux";
import Loader from "../component/layout/Loader";
import { useNavigate } from "react-router-dom";
import { AddNotification } from "../utails/message";
const Verification: React.FC = () => {
  const [timer, setTimer] = useState(60); 
  const [code, setCode] = useState(["", "", "", ""]); 
  const [loading , setLoading] = useState<boolean>(false)
  const navigate = useNavigate()
  const verifyBodyReq = useSelector((state:any)=>state).verifySlice
  const verifyInfo = useSelector((state:any )=>state.setDataVerifyCode)

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (!/^\d$/.test(value)) return; 

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);


    if (value && index < 3) {
      const nextInput = document.getElementById(`input-${index + 1}`);
      if (nextInput) nextInput.focus();
    }


    if (index === 3 && newCode.every((digit) => digit !== "")) {
      onComplete(newCode.join(""));
    }
  };

  const onComplete =async(completeCode: string) => {
    setLoading(true)
    try {
        const res = await axiosClaint.post(endPoints.post.otp_verify , {
          normal:verifyBodyReq.normal ,
          phone_number:verifyBodyReq.phoneNumber ,
          email:verifyBodyReq.email ,
          otp_code:completeCode ,
        }  )
        if (res.headers.authorization) {
          localStorage.setItem("YJOZ_token" , res.headers.authorization)
          navigate("/");
        } else {
          AddNotification( "Authorization Error" , "Authorization token is missing from the response." , "danger" );
        }
    } catch (error) {
      console.log(error)
    } finally
    {
      setLoading(false)
    }
  };

  const circleRadius = 30; 
  const circumference = 2 * Math.PI * circleRadius;
  const offset = circumference - (timer / 60) * circumference; 

  return (
    <div className="min-h-screen bg-primery">
      <div className="shadow-lg rounded-lg grid grid-cols-1 md:grid-cols-2 w-full min-h-screen ">
        <div className="rounded-r-xl md:bg-gradient-to-r from-red to-yalwe p-3 md:p-6 lg:p-8 relative flex flex-col items-center justify-center">
          <img
            src={bg}
            alt="Circular Logo"
            className="mb-4 z-10 w-[200px] md:w-[30rem] lg:w-[35rem] xl:w-[42rem]"
          />
          <img
            src={logo}
            alt="yjoz logo"
            className="hidden md:block md:h-[100px] h-[140px] absolute left-[50px] top-[50px] z-20"
          />
          <p className="text-white text-lg md:mt-4 z-10 hidden md:block">
            © YJOZ General Trading LLC - 2024
          </p>
        </div>

        <div className="flex flex-col sm:justify-center items-center px-4  sm:p-8">

          {
            loading ? <Loader /> : 
          <div className="flex-center flex-col">
            <h2 className="text-3xl font-semibold mb-6">Verification Code</h2>
            <p className="text-[#A9A8A8] text-center max-w-[33rem] text-sm mb-6">
              You will receive a text message containing the verification code on the number
              <p className="text-red font-medium">{verifyInfo.contact ?? ""}</p>.
            </p>

            <div className="relative my-2 sm:my-6 w-24 h-24">
              <svg
                className="absolute inset-[-15px]"
                width="130%"
                height="130%"
                viewBox="0 0 80 80"
              >
                <circle
                  cx="40"
                  cy="40"
                  r={circleRadius}
                  stroke="red"
                  strokeWidth="2"
                  fill="transparent"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  style={{ transition: "stroke-dashoffset 1s linear" }}
                />
              </svg>
              <motion.div
                className="flex items-center justify-center rounded-full bg-gradient-to-r from-red to-yalwe text-white  border-[#E9233A80] border-4 w-full h-full"
              >
                {`00:${timer < 10 ? `0${timer}` : timer}`}
              </motion.div>
            </div>

            <div className="flex space-x-4 sm:space-x-10 my-6 sm:my-10">
              {Array(4)
                .fill("")
                .map((_, index) => (
                  <input
                    key={index}
                    id={`input-${index}`}
                    type="text"
                    maxLength={1}
                    value={code[index]}
                    onChange={(e) => handleInputChange(e, index)}
                    className="w-14 h-14 text-center text-xl border-2 border-primery rounded focus:outline-none focus:ring-2 focus:ring-yalwe bg-white"
                  />
                ))}
            </div>
            <div className="w-full px-4 md:px-10 lg:px-20">
              <button className="bg-yalwe w-full text-white font-semibold py-2 px-6 rounded-md">
                Verification
              </button>
            </div>
          </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Verification;
