import { arrowDownIcon } from "../../utils/icons";

const RecentActivity = () => {
  const recentActivity = [
    {
      user: "michael@company.com",
      action: "processed custo...",
      time: "11:20 AM",
      avatar: "M",
      avatarColor: "#8b5cf6",
      avatarBg: "#ede9fe",
      isFirst: true,
    },
    {
      user: "michael@company.com",
      action: "processed custo...",
      time: "11:20 AM",
      avatar: "A",
      avatarColor: "#ef4444",
      avatarBg: "#fecaca",
      isFirst: false,
    },
    {
      user: "michael@company.com",
      action: "processed custo...",
      time: "11:20 AM",
      avatar: "✓",
      avatarColor: "#10b981",
      avatarBg: "#d1fae5",
      isFirst: false,
    },
  ]

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "24px",
        borderRadius: "8px",
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
        <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#1f2937", margin: 0 }}>Recent Activity</h3>
        <div style={{ display: "flex", gap: "12px" }}>
          <div style={{ position: "relative" }}>
            <select
              style={{
                fontSize: "14px",
                border: "1px solid #d1d5db",
                borderRadius: "6px",
                padding: "6px 28px 6px 12px",
                backgroundColor: "white",
                color: "#374151",
                appearance: "none",
                cursor: "pointer",
                outline: "none",
              }}
            >
              <option>All users</option>
            </select>
            <div style={{
              position: "absolute",
              right: "8px",
              top: "50%",
              transform: "translateY(-50%)",
              pointerEvents: "none",
            }}>
              {arrowDownIcon()}
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <select
              style={{
                fontSize: "14px",
                border: "1px solid #d1d5db",
                borderRadius: "6px",
                padding: "6px 28px 6px 12px",
                backgroundColor: "white",
                color: "#374151",
                appearance: "none",
                cursor: "pointer",
                outline: "none",
              }}
            >
              <option>Today</option>
            </select>
            <div style={{
              position: "absolute",
              right: "8px",
              top: "50%",
              transform: "translateY(-50%)",
              pointerEvents: "none",
            }}>
              {arrowDownIcon()}
            </div>
          </div>
        </div>
      </div>

      {/* Today Section Label */}
      <div style={{ fontSize: "14px", fontWeight: "500", color: "#2563eb", marginBottom: "16px" }}>Today</div>

      {/* Activity Timeline */}
      <div style={{ position: "relative" }}>
        {/* Vertical Timeline Line */}
        <div
          style={{
            position: "absolute",
            left: "10px",
            top: "20px",
            bottom: "20px",
            width: "2px",
            backgroundColor: "#2563eb",
          }}
        />

        {/* Activity Items */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {recentActivity.map((activity, index) => (
            <div key={index} style={{ display: "flex", alignItems: "center", position: "relative" }}>
              {/* Timeline Circle */}
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  backgroundColor: activity.isFirst ? "#2563eb" : "white",
                  border: activity.isFirst ? "none" : "2px solid #2563eb",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "16px",
                  zIndex: 2,
                  position: "relative",
                }}
              >
                {activity.isFirst && (
                  <div
                    style={{
                      width: "6px",
                      height: "6px",
                      backgroundColor: "white",
                      borderRadius: "50%",
                    }}
                  />
                )}
              </div>

              {/* Avatar */}
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  backgroundColor: activity.avatarBg,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: activity.avatarColor,
                  fontSize: "14px",
                  fontWeight: "500",
                  marginRight: "12px",
                }}
              >
                {activity.avatar}
              </div>

              {/* Content */}
              <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <span style={{ color: "#2563eb", fontSize: "14px", fontWeight: "400" }}>{activity.user}</span>
                  <span style={{ color: "#374151", fontSize: "14px", marginLeft: "4px" }}> {activity.action}</span>
                </div>
                <span style={{ fontSize: "14px", color: "#9ca3af", fontWeight: "400" }}>{activity.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View All Link */}
      <div style={{ textAlign: "right", marginTop: "16px" }}>
        <button
          style={{
            color: "#2563eb",
            fontSize: "14px",
            fontWeight: "400",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          View all
        </button>
      </div>
    </div>
  )
}

export default RecentActivity