import React from "react";
import { useState } from "react";

const SalesChart = () => {
  const [activeTab, setActiveTab] = useState("Month");

  const salesData = [
    { month: "January", current: 35, previous: 40, line: 65 },
    { month: "February", current: 45, previous: 52, line: 70 },
    { month: "March", current: 55, previous: 62, line: 75 },
    { month: "April", current: 40, previous: 48, line: 85 },
    { month: "May", current: 65, previous: 70, line: 95 },
    { month: "June", current: 80, previous: 85, line: 110 },
  ];

  // Line chart data points for the overlay
  const linePoints = salesData.map((data, index) => ({
    x: index,
    y: data.line
  }));

  // Find the maximum value to scale the chart
  const maxValue = Math.max(...salesData.map(item => Math.max(item.current, item.previous, item.line)));
  const yAxisValues = [0, Math.round(maxValue * 0.25), Math.round(maxValue * 0.5), Math.round(maxValue * 0.75), maxValue];

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "24px",
        borderRadius: "8px",
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
        marginBottom: "24px",
        width: "100%",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px" }}>
        <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#1f2937" }}>Sales Chart</h3>
        <div style={{ display: "flex", gap: "8px", backgroundColor: "#f3f4f6", borderRadius: "8px", padding: "4px" }}>
          {["Day", "Week", "Month"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: "6px 12px",
                borderRadius: "6px",
                fontSize: "14px",
                fontWeight: "500",
                border: "none",
                cursor: "pointer",
                backgroundColor: activeTab === tab ? "white" : "transparent",
                color: activeTab === tab ? "#2563eb" : "#6b7280",
                boxShadow: activeTab === tab ? "0 1px 3px 0 rgba(0, 0, 0, 0.1)" : "none",
                transition: "all 0.2s ease",
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", height: "256px" }}>
        {/* Y-axis */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          marginRight: "16px",
          paddingBottom: "24px", // Match bar height
        }}>
          {yAxisValues.slice().reverse().map((value, index) => (
            <div key={index} style={{
              fontSize: "12px",
              color: "#6b7280",
              textAlign: "right",
              paddingRight: "8px",
            }}>
              {value}
            </div>
          ))}
        </div>

        {/* Chart bars and line */}
        <div style={{ 
          flex: 1, 
          display: "flex", 
          alignItems: "flex-end", 
          gap: "16px",
          position: "relative",
          paddingBottom: "24px", // Space for x-axis labels
        }}>
          {/* Horizontal grid lines */}
          {yAxisValues.map((value, index) => (
            <div key={`line-${index}`} style={{
              position: "absolute",
              left: 0,
              right: 0,
              height: "1px",
              backgroundColor: index === 0 ? "#e5e7eb" : "transparent",
              borderTop: index === 0 ? "none" : "1px dashed #d1d5db",
              bottom: `${(value / maxValue) * (256 - 24)}px`,
              zIndex: 1,
            }} />
          ))}

          {/* Line chart overlay */}
          <svg style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "calc(100% - 24px)",
            zIndex: 4,
            pointerEvents: "none",
          }}>
            <polyline
              points={linePoints.map((point, index) => {
                const x = ((index + 0.5) / salesData.length) * 100;
                const y = 100 - (point.y / maxValue) * 100;
                return `${x}%,${y}%`;
              }).join(" ")}
              fill="none"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            {/* Line chart points */}
            {linePoints.map((point, index) => {
              const x = ((index + 0.5) / salesData.length) * 100;
              const y = 100 - (point.y / maxValue) * 100;
              return (
                <circle
                  key={index}
                  cx={`${x}%`}
                  cy={`${y}%`}
                  r="4"
                  fill="#3b82f6"
                  stroke="white"
                  strokeWidth="2"
                />
              );
            })}
          </svg>

          {salesData.map((data, index) => {
            const currentHeight = (data.current / maxValue) * 100;
            const previousHeight = (data.previous / maxValue) * 100;
            
            return (
              <div key={index} style={{ 
                flex: 1, 
                display: "flex", 
                flexDirection: "column", 
                alignItems: "center",
                height: "100%",
                zIndex: 2,
              }}>
                <div style={{ 
                  width: "100%", 
                  height: "100%", 
                  display: "flex", 
                  flexDirection: "column", 
                  justifyContent: "flex-end",
                  position: "relative",
                }}>
                  {/* Two bars side by side */}
                  <div style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "flex-end",
                    gap: "2px",
                    position: "relative",
                  }}>
                    {/* Current period bar */}
                    <div style={{
                      width: "50%",
                      backgroundColor: "#3b82f6",
                      borderRadius: "4px 4px 0 0",
                      height: `${currentHeight}%`,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "flex-end",
                    }}>
                      <span style={{ 
                        color: "white",
                        fontSize: "10px",
                        fontWeight: "600",
                        marginBottom: "2px",
                        textShadow: "0 1px 2px rgba(0,0,0,0.3)",
                      }}>
                        {data.current}
                      </span>
                    </div>
                    
                    {/* Previous period bar */}
                    <div style={{
                      width: "50%",
                      backgroundColor: "#cbd5e1",
                      borderRadius: "4px 4px 0 0",
                      height: `${previousHeight}%`,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "flex-end",
                    }}>
                      <span style={{ 
                        color: "#475569",
                        fontSize: "10px",
                        fontWeight: "600",
                        marginBottom: "2px",
                      }}>
                        {data.previous}
                      </span>
                    </div>
                  </div>
                </div>
                <div style={{ 
                  fontSize: "12px", 
                  color: "#6b7280", 
                  marginTop: "8px",
                  position: "absolute",
                  bottom: 0,
                }}>
                  {data.month.slice(0, 3)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SalesChart