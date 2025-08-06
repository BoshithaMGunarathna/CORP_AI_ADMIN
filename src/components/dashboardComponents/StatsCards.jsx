import React from "react"
import {JobIcon, UsersIcon, TruckIcon, BookmarkIcon} from "../../utils/icons"

const StatsCards = () => {
  const statsData = [
    { icon: JobIcon, value: "20", label: "Today Jobs" },
    { icon: UsersIcon, value: "1004", label: "Total Customers" },
    { icon: TruckIcon, value: "40", label: "Total Suppliers" },
    { icon: BookmarkIcon, value: "20", label: "Upcoming Jobs" },
  ]

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "16px",
        marginBottom: "24px",
      }}
    >
      {statsData.map((stat, index) => (
        <div
          key={index}
          style={{
            backgroundColor: "white",
            padding: "24px",
            borderRadius: "8px",
            boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              // style={{
              //   padding: "12px",
              //   borderRadius: "8px",
              //   backgroundColor: "#dbeafe",
              // }}
            >
              <stat.icon style={{ width: "24px", height: "24px", color: "#2563eb" }} />
            </div>
            <div style={{ marginLeft: "16px" }}>
              <div style={{ fontSize: "24px", fontWeight: "bold", color: "#1f2937" }}>{stat.value}</div>
              <div style={{ fontSize: "14px", color: "#6b7280" }}>{stat.label}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default StatsCards