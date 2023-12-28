import React, { useEffect } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import AOS from "aos";
import "aos/dist/aos.css";
import "./global.css";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: "ease-in-out",
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        {/* <link
          rel="icon"
          href="/favicon/favicon.png"
          style={{ height: "15px", width: "8px" }}
        /> */}
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  );
}

export default MyApp;
