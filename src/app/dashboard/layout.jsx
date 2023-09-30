import Footer from "@/components/Footer";
import React from "react";
import DashboardNav from "./_dashboard-layout-components/DashboardNav";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <DashboardNav />
      {children}
      <Footer />
    </div>
  );
};

export default DashboardLayout;
