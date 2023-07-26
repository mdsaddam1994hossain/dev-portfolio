import Link from "next/link";
import React from "react";

const Meeting = () => {
  return (
    <div className="self-stretch flex items-center justify-center my-20 mx-[163px] sm:mx-4">
      <div className="p-8 bg-white shadow-lg rounded-lg max-w-6xl">
        {" "}
        <h1 className="text-3xl font-semibold text-center text-gray-200">
          Schedule a Meeting - Talk with Rakin Afser
        </h1>
        <p className="mt-4 text-lg text-center text-gray-200">
          Unlock the Power of Our Expertise!{" "}
          <span className="text-primary-blue font-semibold">
            Schedule Your Free Consultation Today
          </span>
          : Are you ready to take your business to the next level? Our team of
          seasoned professionals is here to guide you. Book your complimentary
          consultation now to explore how our services can help you achieve your
          goals.
        </p>
        <div className="flex justify-center">
          <Link href="/book-a-call">
            <button className="mt-6 text-lg px-6 py-3 text-white-white bg-gray-200  text-white cursor-pointer font-semibold rounded-full focus:outline-none focus:ring focus:ring-blue-300">
              Free Consultation
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Meeting;