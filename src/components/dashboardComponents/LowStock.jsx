import React from "react"
const LowStock = () => {
  const lowStockItems = [
    { code: "00001", description: "lorem ipsum", sih: "14 Feb 2019" },
    { code: "00002", description: "lorem ipsum", sih: "14 Feb 2019" },
    { code: "00003", description: "lorem ipsum", sih: "14 Feb 2019" },
    { code: "00004", description: "lorem ipsum", sih: "14 Feb 2019" },
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
      <h3 style={{ fontSize: "16px", fontWeight: "600", color: "#202224", marginBottom: "20px", marginTop: 0 }}>
        Low Stock
      </h3>

      <div
        style={{
          border: "1px solid #e5e7eb",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#FCFDFD" }}>
              <th
                style={{
                  textAlign: "left",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#202224",
                  padding: "16px 20px",
                  borderBottom: "1px solid #e5e7eb",
                }}
              >
                Item Code
              </th>
              <th
                style={{
                  textAlign: "left",
                  fontSize: "14px",
                  fontWeight: "500",
                 color: "#202224",
                  padding: "16px 20px",
                  borderBottom: "1px solid #e5e7eb",
                }}
              >
                Description
              </th>
              <th
                style={{
                  textAlign: "left",
                  fontSize: "14px",
                  fontWeight: "500",
                color: "#202224",
                  padding: "16px 20px",
                  borderBottom: "1px solid #e5e7eb",
                }}
              >
                SIH
              </th>
            </tr>
          </thead>
          <tbody>
            {lowStockItems.map((item, index) => (
              <tr key={index} style={{ backgroundColor: "white" }}>
                <td
                  style={{
                    padding: "16px 20px",
                    fontSize: "12px",
                    color: "#64728C",
                    borderBottom: index !== lowStockItems.length - 1 ? "1px solid #f3f4f6" : "none",
                  }}
                >
                  {item.code}
                </td>
                <td
                  style={{
                    padding: "16px 20px",
                    fontSize: "12px",
                    color: "#64728C",
                    borderBottom: index !== lowStockItems.length - 1 ? "1px solid #f3f4f6" : "none",
                  }}
                >
                  {item.description}
                </td>
                <td
                  style={{
                    padding: "16px 20px",
                    fontSize: "12px",
                    color: "#64728C",
                    borderBottom: index !== lowStockItems.length - 1 ? "1px solid #f3f4f6" : "none",
                  }}
                >
                  {item.sih}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default LowStock