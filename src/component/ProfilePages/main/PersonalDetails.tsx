import { useDispatch } from "react-redux";
import { Formik, Field, Form } from "formik";
import PhoneInput, { CountryData } from 'react-phone-input-2'; 
import 'react-phone-input-2/lib/style.css';
import { updateField } from "../../../redux/slice/PersonalDetailsForm";
import { UserProfile } from "../../../type/reduxType";
import { axiosClaint, endPoints, LongStaleTime } from "../../../api/API__information_conect";
import { useState } from "react";
import Loader from "../../layout/Loader";
import { QueryKey, useQuery } from "@tanstack/react-query";
import i18next from "i18next";
import { setUserProfile } from "../../../redux/slice/userProfileSlice";
import { AxiosResponse } from "axios";
// import { setUserProfile } from "../../../redux/slice/userProfileSlice";

type props = {
  userData : UserProfile | null
}
const PersonalDetails:React.FC<props> = ({userData}) => {
  const dispatch = useDispatch();
  console.log(userData)
  const [loading , setLoading] = useState<boolean>(false)
  const currentLanguage = i18next.language;

  const handleGetSetting = async ()=>{
    const res =await axiosClaint.get(endPoints.get.settings)
    return res.data
  }

  const { data } = useQuery<
    unknown,
    Error,
    any ,
    QueryKey
  >({
    queryKey: ["get setting api"],
    queryFn: handleGetSetting,
    staleTime: LongStaleTime,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false,
  });

  return (
    <div className="py-4 sm:py-6 md:py-8">
      {
        loading ?
        <div className="flex-center">
          <Loader />
        </div>
        :
        <Formik
           initialValues={{
            first_name: userData?.first_name,
            last_name: userData?.last_name,
            email: userData?.email,
            phone_number: userData?.phone_number,
            country_code: userData?.country_code,
            selected_country: userData?.selected_country.country_en,
            about_me: userData?.about_me,
            working_hours:userData?.working_hours
          }}
          onSubmit={async(values) => {
            setLoading(true)
            try {
              const res = await axiosClaint.post(endPoints.post.editProfile,{id:userData?.id , ...values} )
              if(res)
                console.log(res)
              dispatch(setUserProfile(res.data.data));
            } catch (error) {
              console.log(error)
            } finally{
              setLoading(false)
            }
           
          }}
      >
        {({ setFieldValue }) => (
          <Form className="grid px-3 grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6 ">
            <div className="flex items-center justify-between sm:col-span-2">
              <h1 className="text-dark text-lg sm:text-xl md:text-2xl lg:text-[2rem] font-semibold">
                Personal Details
              </h1>
              <button
                type="submit"
                className="rounded-md hidden sm:block text-white px-14 py-3 bg-gradient-to-r from-[#E9233A] to-[#CC3030] font-bold text-sm"
              >
                Save
              </button>
            </div>

            <div className="w-full">
              <label className="text-dark text-sm sm:text-[1rem] font-medium">
                First Name
              </label>
              <Field
                name="first_name"
                className="w-full text-dark  p-3 shadow-sm rounded-sm bg-white mt-2"
                placeholder="Your First Name"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setFieldValue('first_name', e.target.value);
                  dispatch(updateField({ field: 'first_name', value: e.target.value }));
                }}
              />
            </div>

            <div className="w-full">
              <label className="text-dark text-sm sm:text-[1rem] font-medium">
                Last Name
              </label>
              <Field
                name="last_name"
                className="w-full text-dark  p-3 shadow-sm rounded-sm bg-white mt-2"
                placeholder="Your Last Name"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setFieldValue('last_name', e.target.value);
                  dispatch(updateField({ field: 'last_name', value: e.target.value }));
                }}
              />
            </div>

            <div className="w-full">
              <label className="text-dark text-sm sm:text-[1rem] font-medium">
                Email
              </label>
              <Field
                name="email"
                type="email"
                className="w-full text-dark  p-3 shadow-sm rounded-sm bg-white mt-2"
                placeholder="test@test.com"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setFieldValue('email', e.target.value);
                  dispatch(updateField({ field: 'email', value: e.target.value }));
                }}
              />
            </div>

            <div className="w-full mt-2">
              <label className="text-dark text-sm sm:text-[1rem] font-medium">
                Phone Number
              </label>
              <PhoneInput
                country={'us'}
                value={`${userData?.country_code}${userData?.phone_number}`}
                onChange={(value: string, country: CountryData) => {
                  const countryCode = country.dialCode;
                  const phoneWithoutCode = value.replace(`+${countryCode}`, '');

                  setFieldValue('country_code', countryCode);
                  setFieldValue('phone_number', phoneWithoutCode);
                  dispatch(updateField({ field: 'country_code', value: countryCode }));
                  dispatch(updateField({ field: 'phone_number', value: phoneWithoutCode }));
                }}
                inputStyle={{
                  width: '100%',
                  padding: '22px',
                  paddingLeft: '50px',
                  backgroundColor: 'white',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                }}
                placeholder="988754652"
              />
            </div>

            <div className="w-full">
              <label className="text-dark text-sm sm:text-[1rem] font-medium">
                Country
              </label>
              <Field
                as="select"
                name="selected_country"
                className=" w-full text-dark  p-3 shadow-sm rounded-sm bg-white mt-2"
                placeholder="United Arab Emirates"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setFieldValue('selected_country', e.target.value);
                  dispatch(updateField({ field: 'selected_country', value: e.target.value }));
                }}
              >
                <option value="" disabled selected>Select your country</option>
                {data?.data.supported_countries.map((item : any)=>(
                  <option key={item.id} value={item.id} >{item[`country_${currentLanguage}`]} pp</option>          

                ))
                }
              </Field>
            </div>

            <div className="w-full sm:col-span-2">
              <label className="text-dark text-sm sm:text-[1rem] font-medium">
                About
              </label>
              <Field
                name="about_me"
                as="textarea"
                className="w-full text-dark  p-3 shadow-sm resize-none rounded-sm h-24 sm:h-40 bg-white mt-2"
                placeholder="Lorem ipsum dolor sit amet consectetu"
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                  setFieldValue('about_me', e.target.value);
                  dispatch(updateField({ field: 'about_me', value: e.target.value }));
                }}
              />
            </div>

            <button
              type="submit"
              className="rounded-md sm:hidden text-white px-14 py-3 bg-gradient-to-r from-[#E9233A] to-[#CC3030] font-bold text-sm"
            >
              Save
            </button>
          </Form>
        )}
        </Formik>
      }
    </div>
  );
};

export default PersonalDetails;
