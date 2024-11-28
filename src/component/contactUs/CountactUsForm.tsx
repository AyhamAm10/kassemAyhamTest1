import { useFormik } from "formik";
import * as Yup from "yup";

const CountactUsForm = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      company: "",
      subject: "",
      message: "",
    },

    validationSchema: Yup.object({
      fullName: Yup.string().required("Full Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      company: Yup.string().required("Company is required"),
      subject: Yup.string().required("Subject is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values) => {
      console.log("Form Data", values);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="bg-white mx-auto w-full px-4 sm:px-5 py-12 md:py-20 rounded-md shadow-lg mb-20 "
    >
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8 md:gap-y-10">
        {/* Full Name */}
        <div className="flex flex-col">
          <label htmlFor="fullName" className=" mb-2">
            Full Name *
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="hassan aljeshi"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullName}
            className={`p-3 border border-[#D3D3D3] sm:w-[400px] ${
              formik.touched.fullName && formik.errors.fullName
                ? "border-red-500"
                : "border-gray-300"
            } rounded-lg py-3 `}
          />
          {formik.touched.fullName && formik.errors.fullName && (
            <span className="text-red-500 text-sm mt-1">
              {formik.errors.fullName}
            </span>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className=" mb-2">
            Your Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="example@yourmail.com"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={`p-3 border border-[#D3D3D3] sm:w-[400px] ${
              formik.touched.email && formik.errors.email
                ? "border-red-500"
                : "border-gray-300"
            } rounded-lg`}
          />
          {formik.touched.email && formik.errors.email && (
            <span className="text-red-500 text-sm mt-1">
              {formik.errors.email}
            </span>
          )}
        </div>

        {/* Company */}
        <div className="flex flex-col">
          <label htmlFor="company" className=" mb-2">
            Company *
          </label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="yourcompany name here"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.company}
            className={`p-3 border border-[#D3D3D3] sm:w-[400px] ${
              formik.touched.company && formik.errors.company
                ? "border-red-500"
                : "border-gray-300"
            } rounded-lg`}
          />
          {formik.touched.company && formik.errors.company && (
            <span className="text-red-500 text-sm mt-1">
              {formik.errors.company}
            </span>
          )}
        </div>

        {/* Subject */}
        <div className="flex flex-col">
          <label htmlFor="subject" className=" mb-2">
            Subject *
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="how can we help"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.subject}
            className={`p-3 border border-[#D3D3D3] sm:w-[400px] ${
              formik.touched.subject && formik.errors.subject
                ? "border-red-500"
                : "border-gray-300"
            } rounded-lg`}
          />
          {formik.touched.subject && formik.errors.subject && (
            <span className="text-red-500 text-sm mt-1">
              {formik.errors.subject}
            </span>
          )}
        </div>

        {/* Message */}
        <div className="flex flex-col mt-4 md:col-span-2">
          <label htmlFor="message" className=" mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={8}
            placeholder="hello there,i would like to talk about how to..."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            className={`p-3 border border-[#D3D3D3] w-full ${
              formik.touched.message && formik.errors.message
                ? "border-red-500"
                : "border-gray-300"
            } rounded-lg resize-none`}
          />
          {formik.touched.message && formik.errors.message && (
            <span className="text-red-500 text-sm mt-1">
              {formik.errors.message}
            </span>
          )}
        </div>

      </div>

      {/* Submit Button */}
      <div className="flex justify-center mt-12">
        <button
          type="submit"
          className="bg-[#333333] text-white py-4 px-9 rounded-md"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default CountactUsForm;
