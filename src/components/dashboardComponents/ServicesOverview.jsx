import React from "react"

const ServicesOverview = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "24px",
        borderRadius: "8px",
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
      }}
    >
      <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#1f2937", marginBottom: "16px" }}>Services Overview</h3>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
        <div style={{ position: "relative", width: "128px", height: "156px" }}>
          <svg style={{ width: "128px", height: "156px", transform: "rotate(-90deg)" }}>
            <circle cx="64" cy="64" r="56" stroke="#e5e7eb" strokeWidth="16" fill="none" />
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="#3b82f6"
              strokeWidth="16"
              fill="none"
              strokeDasharray="220"
              strokeDashoffset="66"
            />
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="#1e40af"
              strokeWidth="16"
              fill="none"
              strokeDasharray="110"
              strokeDashoffset="0"
            />
          </svg>
        </div>

        
        <div style={{ marginLeft: "24px", display: "flex", flexDirection: "column", gap: "8px" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                width: "12px",
                height: "12px",
                backgroundColor: "#3b82f6",
                borderRadius: "50%",
                marginRight: "8px",
              }}
            ></div>
            <span style={{ fontSize: "14px", color: "#6b7280" }}>Oil Change</span>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                width: "12px",
                height: "12px",
                backgroundColor: "#1e40af",
                borderRadius: "50%",
                marginRight: "8px",
              }}
            ></div>
            <span style={{ fontSize: "14px", color: "#6b7280" }}>Full Service</span>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                width: "12px",
                height: "12px",
                backgroundColor: "#1e40af",
                borderRadius: "50%",
                marginRight: "8px",
              }}
            ></div>
            <span style={{ fontSize: "14px", color: "#6b7280" }}>Tire Replacement</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesOverview