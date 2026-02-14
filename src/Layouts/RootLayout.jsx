import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "./../Components/Shared/ScrollToTop";

const RootLayout = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Added a custom scroll to top component */}
      <ScrollToTop />

      {/* Outlet */}
      <Outlet />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default RootLayout;
