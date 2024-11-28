import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import bg from "../assets/login/Mask group.png";
import logo from "../assets/login/Group 3.png";
import persone from "../assets/login/material-symbols_person.svg";
import google from "../assets/login/flat-color-icons_google.png";
import emoji from "../assets/login/fluent-emoji-flat_waving-hand-light (1).png";
import { Link, useNavigate } from "react-router-dom";
import logo2 from "../assets/app-ico-footer 1.png";
import { AxiosResponse } from "axios";
import { axiosClaint, endPoints } from "../api/API__information_conect";
import { bodyReqVerify } from "../redux/slice/verifyCode";
import { useDispatch } from "react-redux";
import Loader from "../component/layout/Loader"
import { useTranslation } from 'react-i18next';
import arrow from "../assets/login/Arrows.png"
import { setVerifyInfo } from "../redux/slice/setDataVerifyCode";
import { AddNotification } from "../utails/message";
const Login: React.FC = () => {
  const [state, setState] = useState({
    email: "",
    phoneNumber: "",
  });
  const [loading , setLoading] = useState<boolean>(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { t  } = useTranslation();
  const formik = useFormik({
    initialValues: {
      input: "",
    },
    validationSchema: Yup.object({
      input: Yup.string()
        .required("Required")
        .test("is-valid", "Invalid email or phone", function (value) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          const phoneRegex = /^\d+$/;
          return emailRegex.test(value) || phoneRegex.test(value);
        }),
    }),
    onSubmit: (values) => {
      try {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d+$/;
  
        if (phoneRegex.test(values.input)) {
          setState((prevState) => ({
            ...prevState,
            phoneNumber: values.input,
          }));
          dispatch(setVerifyInfo({contact :values.input }))
        } else if (emailRegex.test(values.input)) {
          setState((prevState) => ({
            ...prevState,
            email: values.input,
          }));
          dispatch(setVerifyInfo({contact :values.input }))
        }
      } catch (error:Error | any) {
        console.log(error)
        AddNotification("error" , error.message , "danger")
      }
    },
  });

  useEffect(() => {
    if (state.email || state.phoneNumber) {
      const submitData = async() => {
        setLoading(true)
        try {
          const res:AxiosResponse<any, any> = await axiosClaint.post(endPoints.post.login ,state )
          if(res){
            dispatch(bodyReqVerify(state))
            navigate("/verification")
          }
      } catch (error) {
           console.log(error)
      }  finally
      {
        setLoading(false)
      }  
      };
      submitData();
    }
  }, [state, dispatch, navigate]);

  return (
    <div className="min-h-screen bg-primery">
      <div className="shadow-lg rounded-lg grid grid-cols-1 md:grid-cols-2 w-full min-h-screen">
        <div className="rounded-r-xl md:bg-gradient-to-r from-red to-yalwe px-4 py-6 md:p-6  lg:p-8 relative flex flex-col items-center justify-center">
          <div className="relative">
          <img
            src={bg}
            alt="Circular Logo"
            className="sm:mb-4 z-10 w-[200px] md:w-[30rem] lg:w-[35rem] xl:w-[42rem]"
          />
          <img src={arrow} alt="arrow" className="w-[200px] md:w-[28rem] lg:w-[33rem] xl:w-[40rem] absolute z-20 sm:mb-4 top-0 animate-login duration-200 " />
          </div>
          <img
            src={logo}
            alt="yjoz logo"
            className="hidden md:block md:h-[100px] h-[140px] absolute left-[50px] top-[50px] z-20"
          />
          <p className="text-white text-lg mt-4 z-10 hidden md:block">
            © YJOZ General Trading LLC - 2024
          </p>
        </div>

        <div className="sm:px-3 md:px-5 lg:px-8 flex items-center sm:justify-center flex-col">
          <div className="w-full sm:w-auto px-4">
            <div className="w-full flex-center gap-4 sm:mb-8">
              <h2 className="h-fit text-2xl lg:text-4xl xl:text-5xl font-medium text-center text-dark">
              {t('WelcomeBack')}
              </h2>
              <img src={emoji} alt="hand emoji" className="h-fit" />
            </div>
            <p className="mb-8 text-center text-[#A9A8A8] text-sm md:text-xl xl:text-2xl">
              {t("enterEmailOrPhone")}
            </p>

            {
              !loading ?
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-8 relative">
                <img
                  src={persone}
                  alt=""
                  className="absolute top-1/2 translate-y-[-60%] left-3"
                />
                <input
                  id="input"
                  name="input"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.input}
                  placeholder={t("EmailPhone")}
                  className={`w-full text-sm sm:text-lg px-10 py-4 border placeholder:text-[#A9A8A8] ${
                    formik.touched.input && formik.errors.input
                      ? "border-red"
                      : "border-primery"
                  } rounded-lg bg-white`}
                />
                {formik.touched.input && formik.errors.input ? (
                  <p className="text-red text-sm">{formik.errors.input}</p>
                ) : null}
              </div>

              <button
                type="submit"
                className="w-full bg-yalwe text-white p-3 rounded-lg"
              >
                {t("login")}
              </button>

              <div className="mt-8 flex items-center justify-between">
                <hr className="w-full border-t border-[#A9A8A8]" />
                <span className="px-3 text-[#A9A8A8] text-xs w-full">
                  {t("continueWIth")}
                </span>
                <hr className="w-full border-t border-[#A9A8A8]" />
              </div>

              <div className="flex-center w-full">
                <button type="button" className="mt-8 w-fit">
                  <img src={google} alt="Google" className="w-5 h-5 mr-2" />
                </button>
              </div>

              <p className="mt-4 text-center text-[#A9A8A8]">
                {t("DontHaveAccount")}
                <Link to={"/register"}>
                  <span className="text-yalwe">{t("Sign Up")}</span>
                </Link>
              </p>
            </form> : 
            <div className="flex-center w-full">

              <Loader />
            </div>
            }
            <div className="flex-center">
              <img
                src={logo2}
                alt="yjoz logo"
                className="md:hidden my-5 md:h-[100px] h-[140px] z-20"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
