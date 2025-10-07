import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const RootLayout = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      <Outlet />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default RootLayout;
