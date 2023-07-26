import React, { FC, ReactNode, useEffect, useRef, useState } from "react";
import Header from "./header";
import Footer from "./Footer";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <div id="home">
      <Header />
      <main>{children}</main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
