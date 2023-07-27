import type { NextPage } from "next";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import firebase from "../config/firebase";
const Contact: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    if (name === "fullName") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        fullName: value.trim() === "" ? "Please enter your full name" : "",
      }));
    } else if (name === "phoneNumber") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: value.trim() === "" ? "Please enter a phone number" : "",
      }));
    } else if (name === "message") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: value.trim() === "" ? "Please enter a message" : "",
      }));
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newErrors = {
      fullName:
        formData.fullName.trim() === "" ? "Please enter your full name" : "",
      phoneNumber:
        formData.phoneNumber.trim() === "" ? "Please enter a phone number" : "",
      message: formData.message.trim() === "" ? "Please enter a message" : "",
    };
    setErrors(newErrors);

    // Check if there are no errors
    if (Object.values(newErrors).every((error) => error === "")) {
      // If there are no errors, you can proceed with form submission or API call here.
      setLoading(true);
      try {
        await firebase.firestore().collection("contact").add({
          createdAt: new Date(),
          name: formData?.fullName,
          email: formData?.emailAddress,
          phone: formData?.phoneNumber,
          messageBox: formData?.message,
          source: "development profile",
        });
        setLoading(false);
        toast("Success! We'll get back to you shortl", {
          position: "bottom-right",
          type: "success",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setFormData({
          fullName: "",
          emailAddress: "",
          phoneNumber: "",
          message: "",
        });
      } catch (error: any) {
        setLoading(false);
        toast(error.message, {
          position: "bottom-right",
          type: "error",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };
  return (
    <div
      id="contact"
      className="self-stretch bg-gray-300 flex flex-col pt-[80px] px-52 pb-[100px] items-center justify-center gap-[92px] text-center text-45xl text-white font-poppins lg:pl-[180px] lg:pr-[180px] lg:box-border md:pl-9 md:pr-9 md:box-border sm:pl-4 sm:pr-4 sm:box-border"
    >
      <ToastContainer className={"text-lg "} />
      <div className="self-stretch -mt-[84px] flex flex-col items-center justify-start gap-[12px]">
        <div className="self-stretch relative tracking-[-0.5px] font-semibold sm:text-37xl">
          Contact Me
        </div>
        <div className="self-stretch relative text-9xl leading-[40px] text-gray-600 sm:text-xl">
          <p className="m-0">{`If you are looking to hire a developer, `}</p>
          <p className="m-0">I’m currently available for freelance work</p>
        </div>
      </div>

      <form
        className="self-stretch -mt-8 rounded-3xs bg-white flex flex-col py-[100px] px-28 items-start justify-start gap-[49px] text-left text-xl font-inter lg:pl-20 lg:pr-20 lg:box-border md:py-[50px] md:px-9 md:box-border sm:py-6 sm:px-4 sm:box-border"
        onSubmit={handleSubmit}
      >
        <div className="self-stretch flex flex-col items-start justify-start gap-[38px]">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="ont-medium font-inter text-xl bg-[transparent] self-stretch rounded-8xs flex flex-row py-5 pr-[100px] pl-[25px] items-center justify-center border  border-solid border-gray-300"
            placeholder="Full Name"
          />
          {errors.fullName && (
            <span className="text-red-500 m-0 -mt-6 text-sm">
              {errors.fullName}
            </span>
          )}
          <input
            type="email"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleChange}
            className="ont-medium font-inter text-xl bg-[transparent] self-stretch rounded-8xs flex flex-row py-5 pr-[100px] pl-[25px] items-center justify-center border border-solid border-gray-300"
            placeholder="Email Address"
          />
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="ont-medium font-inter text-xl bg-[transparent] self-stretch rounded-8xs flex flex-row py-5 pr-[100px] pl-[25px] items-center justify-center border border-solid border-gray-300"
            placeholder="Phone Number"
          />
          {errors.phoneNumber && (
            <span className="text-red-500 m-0 -mt-6 text-sm">
              {errors.phoneNumber}
            </span>
          )}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="ont-medium font-inter h-32 text-xl bg-[transparent] self-stretch rounded-8xs flex flex-row py-5 pr-[100px] pl-[25px] items-center justify-center border border-solid border-gray-300"
            placeholder="Message"
          />
          {errors.message && (
            <span className="text-red-500 -mt-6 text-sm">{errors.message}</span>
          )}
        </div>
        <button
          type="submit"
          className="cursor-pointer [border:none] py-3.5 px-[100px] bg-gray-300 hover:bg-gray-200 self-stretch rounded-8xs h-[72px] flex flex-row box-border items-center justify-center"
        >
          <span className="flex-1 relative text-13xl leading-[180.02%] font-semibold font-inter text-white text-center">
            {loading ? (
              <div className="flex space-x-2 animate-spin justify-center">
                <div className="animate-spin justify-center text-center rounded-full border-t-2 border-white border-solid h-6 w-6"></div>
              </div>
            ) : (
              "Submit"
            )}
          </span>
        </button>
      </form>
    </div>
  );
};

export default Contact;
