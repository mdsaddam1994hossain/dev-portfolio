import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { CustomFlowbiteTheme, Modal } from "flowbite-react";
import firebase from "../../config/firebase";

const customTheme: CustomFlowbiteTheme["modal"] = {
  header: {
    close: {
      base: "hover:bg-white  text-white",
    },
  },
};

type Props = {
  openModal: boolean;
  setOpenModal: (v: boolean) => void;
};

const ContactModal: FC<Props> = ({ openModal, setOpenModal }) => {
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
    const { name, value } = event?.target;
    if (name === "fullName") {
      setFormData({
        fullName: value,
        emailAddress: value,
        message: value,
        phoneNumber: value,
      });
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
        // await firebase.firestore().collection("contact").add({
        //   createdAt: new Date(),
        //   name: formData?.fullName,
        //   email: formData?.emailAddress,
        //   phone: formData?.phoneNumber,
        //   messageBox: formData?.message,
        //   source: "Development profile",
        // });
       console.log(formData,"......")
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
        setOpenModal(false);
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
    <div className="mx-4">
      <Modal
        position="center"
        show={openModal === true}
        theme={customTheme}
        className={`pt-[7%] sm:pt-[10%]  !px-4`}
      >
        <Modal.Body className="!p-2 px-2">
          <button
            className="absolute bg-gray-200  hover:bg-black cursor-pointer w-8 h-8 -right-4 -top-4 rounded-full flex justify-center items-center"
            onClick={() => setOpenModal(false)}
            style={{ zIndex: 10000 }}
          >
            <img src="/close2.svg" className="w-3 h-3" />
          </button>
          <div className="relative h-[780px]  rounded-xl ">
            <form
              className="self-stretch bg-darkslategray-100  flex flex-col py-[50px] px-24 items-center justify-center gap-[92px] text-center text-45xl text-white font-poppins lg:pl-[180px] lg:pr-[180px] lg:box-border md:pl-9 md:pr-9 md:box-border sm:gap-[50px] sm:pl-4 sm:pr-4 sm:box-border"
              onSubmit={handleSubmit}
            >
              <div className="self-stretch flex flex-col items-start justify-start gap-[38px]">
                <label className="m-0 text-[20px]">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  onChange={handleChange}
                  className="ont-medium -mt-6 font-inter text-xl text-white bg-[transparent] self-stretch rounded-8xs flex flex-row py-5 px-[20px]  items-center justify-center border  border-solid border-white border-opacity-30"
                  placeholder="Full Name"
                />
                {errors.fullName && (
                  <span className="text-red-500 m-0 -mt-6 text-sm">
                    {errors.fullName}
                  </span>
                )}
                <label className="m-0 text-[20px]">Email Address</label>
                <input
                  type="email"
                  name="emailAddress"
                  onChange={handleChange}
                  className="ont-medium font-inter -mt-6 text-xl bg-[transparent] self-stretch rounded-8xs flex flex-row py-5 px-[20px] items-center justify-center border border-solid border-white border-opacity-30 text-white"
                  placeholder="Email Address"
                />
                <label className="m-0 text-[20px]">Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  onChange={handleChange}
                  className="ont-medium font-inter -mt-6 text-xl bg-[transparent] self-stretch rounded-8xs flex flex-row py-5 px-[20px] items-center justify-center border border-solid border-white border-opacity-30 text-white"
                  placeholder="Phone Number"
                />
                {errors.phoneNumber && (
                  <span className="text-red-500 m-0 -mt-6 text-sm">
                    {errors.phoneNumber}
                  </span>
                )}
                <label className="m-0 text-[20px]">Message</label>
                <textarea
                  name="message"
                  onChange={handleChange}
                  className="ont-medium font-inter -mt-6 h-32 text-xl bg-[transparent] self-stretch rounded-8xs flex flex-row py-5 px-[20px] items-center justify-center border border-solid border-white border-opacity-30 text-white"
                  placeholder="Message"
                />
                {errors.message && (
                  <span className="text-red-500 -mt-6 text-sm">
                    {errors.message}
                  </span>
                )}
              </div>
              <button
                type="submit"
                className="cursor-pointer [border:none] -mt-8 py-3.5 px-[100px] bg-white  self-stretch rounded-8xs h-[72px] flex flex-row box-border items-center justify-center"
              >
                <span className="flex-1 relative text-13xl leading-[170.02%] font-semibold font-inter text-gray-200 text-center">
                  {loading ? (
                    <div className="flex space-x-2 animate-spin justify-center">
                      <div className="animate-spin justify-center text-center rounded-full border-t-2  border-solid h-6 w-6"></div>
                    </div>
                  ) : (
                    "Submit"
                  )}
                </span>
              </button>
            </form>
            <div className="h-1"></div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ContactModal;
