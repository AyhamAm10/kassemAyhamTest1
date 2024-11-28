// import { useDispatch } from "react-redux";
// import { UserProfile } from "../../../type/reduxType";
// import { setUserProfile } from "../../../redux/slice/userProfileSlice";
// import { axiosClaint, endPoints } from "../../../api/API__information_conect";
// import { useState } from "react";

// type props = {
//   userData : UserProfile
// }
// const BusinessSettings:React.FC<props> = ({userData}) => {

//   const [localUserData, _setLocalUserData] = useState<UserProfile>(userData);
//   const dispatch = useDispatch()

//  const handleChange = (e: any) => {
//   const { name, value } = e.target;
//   dispatch(setUserProfile({ ...userData, [name]: value }));
// };

//   const handleSubmit =async (e:any)=>{
//     e.preventDefault()
//     try {
//       const res = await axiosClaint.post(endPoints.post.editProfile,{ ...userData , id:userData?.id  })
//       console.log(res)
//     } catch (error) {
//       console.log(error)
//     }

//   }
//   return (
//     <div className="py-4 sm:py-6 md:py-8 ">
//       <form onSubmit={handleSubmit} className="grid grid-cols-1 px-3 sm:grid-cols-2 gap-3 md:gap-6">
//       <div className="flex items-center justify-between sm:col-span-2 ">
//         <h1 className="text-dark text-lg sm:text-xl md:text-2xl lg:text-[2rem] font-semibold">
//           Business Settings
//         </h1>
//         <button type="submit" className="rounded-md hidden sm:block text-white px-14 py-3 bg-gradient-to-r from-[#E9233A] to-[#CC3030] font-bold text-sm">
//           Save
//         </button>
//       </div>
//         <div className="w-full my-4 sm:my-auto ">
//           <label className="text-dark text-sm sm:text-[1rem] font-medium ">
//             Business Name
//           </label>
//           <input
//             type="text"
//             className="w-full text-dark opacity-40 p-3 shadow-sm rounded-sm bg-white mt-2"
//             placeholder="Your Business Name"
//             name="business_name"
//             onChange={handleChange}
//             value={localUserData?.business_name || '' }
//           />
//           {/* <p className="text-dark opacity-40 mt-4 sm:mt-10">Please note that if you added business name it will be shown as your main name</p> */}
//         </div>
//         <div className="w-full my-4 sm:my-auto">
//           <label className="text-dark text-sm sm:text-[1rem] font-medium ">
//           Store Name
//           </label>
//           <input
//             type="text"
//             className="w-full text-dark opacity-40 p-3 shadow-sm rounded-sm bg-white mt-2"
//             placeholder="Yout Store Name"
//           />
//         </div>
//         <button type="submit" className=" my-4 sm:my-auto rounded-md  sm:hidden text-white px-14 py-3 bg-gradient-to-r from-[#E9233A] to-[#CC3030] font-bold text-sm">
//           Save
//         </button>
//         <p className="text-dark opacity-40 mt-4 sm:mt-10">Please note that if you added business name it will be shown as your main name</p>
//       </form>
//     </div>
//   );
// };

// export default BusinessSettings;
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import { UserProfile } from "../../../type/reduxType";
import { setUserProfile } from "../../../redux/slice/userProfileSlice";
import { axiosClaint, endPoints } from "../../../api/API__information_conect";
import Loader from "../../layout/Loader";

type Props = {
  userData: UserProfile;
};

const BusinessSettings: React.FC<Props> = ({ userData }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleSubmit = async (values: UserProfile) => {
    setIsLoading(true);
    try {
      const res = await axiosClaint.post(endPoints.post.editProfile, {
        ...values,
        id: values?.id,
      });
      dispatch(setUserProfile(res.data.data));
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="py-4 sm:py-6 md:py-8">
      <Formik
        initialValues={userData}
        enableReinitialize
        onSubmit={handleSubmit}
      >
        {({ handleChange, values }) => (
          <Form className="grid grid-cols-1 px-3 sm:grid-cols-2 gap-3 md:gap-6">
            {isLoading ? (
              <div className="w-full flex-center col-span-1 sm:col-span-2">
                <Loader />
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between sm:col-span-2">
                  <h1 className="text-dark text-lg sm:text-xl md:text-2xl lg:text-[2rem] font-semibold">
                    Business Settings
                  </h1>
                  <button
                    type="submit"
                    className="rounded-md hidden sm:block text-white px-14 py-3 bg-gradient-to-r from-[#E9233A] to-[#CC3030] font-bold text-sm"
                  >
                    Save
                  </button>
                </div>
                <div className="w-full my-4 sm:my-auto">
                  <label className="text-dark text-sm sm:text-[1rem] font-medium">
                    Business Name
                  </label>
                  <Field
                    type="text"
                    name="business_name"
                    placeholder="Your Business Name"
                    className="w-full text-dark opacity-40 p-3 shadow-sm rounded-sm bg-white mt-2"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      handleChange(e);
                      dispatch(
                        setUserProfile({
                          ...values,
                          [e.target.name]: e.target.value,
                        })
                      );
                    }}
                  />
                </div>
                <div className="w-full my-4 sm:my-auto">
                  <label className="text-dark text-sm sm:text-[1rem] font-medium">
                    Store Name
                  </label>
                  <Field
                    type="text"
                    name="store_name"
                    placeholder="Your Store Name"
                    className="w-full text-dark opacity-40 p-3 shadow-sm rounded-sm bg-white mt-2"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      handleChange(e);
                      dispatch(
                        setUserProfile({
                          ...values,
                          [e.target.name]: e.target.value,
                        })
                      );
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="my-4 sm:my-auto rounded-md sm:hidden text-white px-14 py-3 bg-gradient-to-r from-[#E9233A] to-[#CC3030] font-bold text-sm"
                >
                  Save
                </button>
                <p className="text-dark opacity-40 mt-4 sm:mt-10">
                  Please note that if you added business name it will be shown
                  as your main name
                </p>
              </>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BusinessSettings;
