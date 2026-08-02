import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-10">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
