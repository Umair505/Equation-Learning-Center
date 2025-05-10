import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <nav className="mb-2 max-w-screen-3xl">
        <Navbar />
      </nav>
      <div className="min-h-[calc(100vh-116px)]">
        <div >
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
