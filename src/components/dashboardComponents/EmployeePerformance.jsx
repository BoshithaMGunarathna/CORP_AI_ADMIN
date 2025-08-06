import React from "react"
const EmployeePerformance = () => {
  // Data for grouped bar chart - 3 values per group
  const performanceData = [
    { group: "000", values: [8, 22, 18] },
    { group: "000", values: [12, 18, 32] },
    { group: "000", values: [25, 22, 42] },
    { group: "000", values: [15, 18, 28] },
    { group: "000", values: [30, 28, 45] },
    { group: "000", values: [42, 38, 58] },
  ]

  const maxValue = 120
  const chartHeight = 160
  const barColors = ["#93c5fd", "#60a5fa", "#2563eb"] // Light blue, medium blue, dark blue
  const yAxisValues = [120, 100, 80, 60, 40, 20, 0]

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "24px",
        borderRadius: "8px",
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
      }}
    >
      <h3 style={{ fontSize: "18px", fontWeight: "600", color: "black", marginBottom: "20px", marginTop: 0 }}>
        Employee Performance
      </h3>

      {/* Chart Container */}
      <div style={{ position: "relative", height: `${chartHeight + 40}px` }}>
        {/* Y-axis labels */}
        <div
          style={{
            position: "absolute",
            left: "-10px",
            top: "0",
            height: `${chartHeight}px`,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            fontSize: "12px",
            color: "#313131",
            textAlign: "right",
            width: "30px",
            zIndex: 2,
          }}
        >
          {yAxisValues.map((value, index) => (
            <span key={index}>{value}</span>
          ))}
        </div>

        {/* Horizontal dashed grid lines */}
        <div
          style={{
            position: "absolute",
            left: "40px",
            top: "0",
            right: "0",
            height: `${chartHeight}px`,
            zIndex: 1,
          }}
        >
          {yAxisValues.map((value, index) => (
            <div
              key={index}
              style={{
                position: "absolute",
                top: `${(index / (yAxisValues.length - 1)) * chartHeight}px`,
                left: "0",
                right: "0",
                height: "1px",
                borderTop: "1px dashed #e5e7eb",
                opacity: 0.7,
              }}
            />
          ))}
        </div>

        {/* Chart bars */}
        <div
          style={{
            marginLeft: "40px",
            height: `${chartHeight}px`,
            display: "flex",
            alignItems: "end",
            gap: "20px",
            paddingBottom: "0px",
            position: "relative",
            zIndex: 3,
          }}
        >
          {performanceData.map((group, groupIndex) => (
            <div
              key={groupIndex}
              style={{
                flex: 1,
                display: "flex",
                alignItems: "end",
                gap: "3px",
                height: "100%",
              }}
            >
              {group.values.map((value, barIndex) => {
                const barHeight = (value / maxValue) * chartHeight
                return (
                  <div
                    key={barIndex}
                    style={{
                      flex: 1,
                      height: `${barHeight}px`,
                      backgroundColor: barColors[barIndex],
                      borderRadius: "2px 2px 0 0",
                      minHeight: "2px",
                    }}
                  ></div>
                )
              })}
            </div>
          ))}
        </div>

        {/* X-axis labels */}
        <div
          style={{
            marginLeft: "40px",
            display: "flex",
            gap: "20px",
            marginTop: "8px",
             color: "#313131",
          }}
        >
          {performanceData.map((group, index) => (
            <div key={index} style={{ flex: 1, textAlign: "center" }}>
              <span style={{ fontSize: "12px", color: "#6b7280" }}>{group.group}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmployeePerformance