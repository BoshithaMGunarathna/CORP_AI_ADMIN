import React from "react"
import { useState, useEffect } from "react"
import StatsCards from "../../components/dashboardComponents/StatsCards"
import SalesChart from "../../components/dashboardComponents/SalesChart"
import Calendar from "../../components/dashboardComponents/Calendar"
import UpcomingJobs from "../../components/dashboardComponents/UpcomingJobs"
import ServicesOverview from "../../components/dashboardComponents/ServicesOverview"
import EmployeePerformance from "../../components/dashboardComponents/EmployeePerformance"
import RecentActivity from "../../components/dashboardComponents/RecentActivity"
import LowStock from "../../components/dashboardComponents/LowStock"
import CountCard from "../../components/dashboardComponents/CountCard"
import CustomerCredit from "../../components/dashboardComponents/CustomerCredit"
import axiosClient from "../../../axios-client";

const Dashboard2 = () => {
  const [dashboardData, setDashboardData] = useState([]);

  const handleStock = () => {
    axiosClient
      .get(`/dashboard`)
      .then((res) => {
        setDashboardData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    handleStock();
  }, []);

  return (
    <div className="flex justify-between pt-8 font-nunito">
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ flex: 1, padding: "24px", overflow: "auto" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "600", color: "#1f2937" }}>Dashboard</h2>
          
          {/* Main Grid Container */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "24px" }}>
            
            {/* Left Column - Main Content */}
            <div style={{ gridColumn: "span 9", display: "flex", flexDirection: "column", gap: "24px" }}>
              <StatsCards />
              <SalesChart />
              {/* Middle Charts */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }}>
                <ServicesOverview />
                <EmployeePerformance />
              </div>
            </div>
            
            {/* Right Column - Sidebar */}
            <div style={{
              gridColumn: "span 3", 
              backgroundColor: "white",
              padding: "16px",
              borderRadius: "8px",
              boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
              display: "flex", 
              flexDirection: "column", 
              gap: "24px",
              alignSelf: "flex-start" // This prevents it from stretching vertically
            }}>
              <Calendar />
              <UpcomingJobs />
            </div>
            
            {/* Bottom Row - Full Width Components */}
            <div style={{ 
              gridColumn: "span 12",
              display: "grid", 
              gridTemplateColumns: "repeat(2, 1fr)", 
              gap: "24px"
            }}>
              <RecentActivity />
              <LowStock />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard2;