import Footer from "@/components/Footer";
import React from "react";
import DashboardNav from "./_dashboard-layout-components/DashboardNav";
import NavigationBar from "@/components/NavigationBar";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <NavigationBar />
      <div className="grid dashboard-grid ">
        <DashboardNav />
        <div>
          <main>{children}</main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DashboardLayout;
