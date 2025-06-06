import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./MainLayout.module.css";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
