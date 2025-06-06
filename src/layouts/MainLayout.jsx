import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Header />
      <main className="pt-20">
        {" "}
        {/* Додаємо відступ зверху, оскільки хедер фіксований */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
