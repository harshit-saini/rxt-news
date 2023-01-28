import React, { Children, Component } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Highlights from "./Highlights";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <React.Fragment>
      <Navbar />
      <Highlights />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
