import React from "react"
/* eslint-disable no-unused-vars */
"use client"

import { useState } from "react"
import {CalUpIcon, CalDownIcon} from "../../utils/icons"

const Calendar = () => {
  const [selectedMonth, setSelectedMonth] = useState("July, 2021")
  const selectedDates = [19, 24]; // The dates that should be highlighted

  return (
    <div
      style={{
     
        paddingBottom: "16px",
   
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
        <h3 style={{ fontWeight: "600", color: "#1B1D21", fontSize: "24px" }}>{selectedMonth}</h3>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <CalUpIcon style={{ width: "16px", height: "16px", color: "#6b7280", cursor: "pointer" }} />
          <CalDownIcon style={{ width: "16px", height: "16px", color: "#6b7280", cursor: "pointer" }} />
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: "4px",
          textAlign: "center",
          fontSize: "12px",
        }}
      >
        {["26", "27", "28", "29", "30", "31", "1"].map((day, index) => (
          <div
            key={index}
            style={{
              padding: "8px",
              color: index === 6 ? "#2563eb" : "#9ca3af",
              fontWeight: index === 6 ? "600" : "normal",
            }}
          >
            {day}
          </div>
        ))}
        {Array.from({ length: 35 }, (_, i) => i + 2).map((day, index) => {
          const displayDay = day > 31 ? day - 31 : day;
          const isSelected = selectedDates.includes(displayDay);
          
          return (
            <div
              key={index}
              style={{
                padding: "8px",
                cursor: "pointer",
                borderRadius: "50%", // Makes the background circular
                backgroundColor: isSelected ? "#4880FF33" : "transparent",
                color: isSelected ? "#2563eb" : "#1f2937",
                width: "24px",
                height: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto",
              }}
              onMouseEnter={(e) => {
                if (!isSelected) {
                  e.target.style.backgroundColor = "#eff6ff"
                }
              }}
              onMouseLeave={(e) => {
                if (!isSelected) {
                  e.target.style.backgroundColor = "transparent"
                }
              }}
            >
              {displayDay}
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Calendar