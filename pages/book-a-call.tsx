import Head from "next/head";
import React from "react";
import Calendly from "../components/Calendly";

const BookACall = () => {
  return (
    <div>
      <Head>
        <title>
          Schedule a Meeting with Saddam Hossain | Fullstack Developer Portfolio
        </title>
        <meta
          name="description"
          content="Ready to discuss your projects? Schedule a meeting with Saddam Hossain, a skilled Fullstack Developer. Let's collaborate and bring your ideas to life."
        />
      </Head>
      <Calendly />
    </div>
  );
};

export default BookACall;
