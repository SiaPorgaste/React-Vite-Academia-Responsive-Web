import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../heading/Header";
import Loader from "../loader/Loader";

const Layout = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <Outlet />
      <Footer />
    </Suspense>
  );
};

export default Layout;
