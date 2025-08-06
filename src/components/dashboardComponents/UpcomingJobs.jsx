import React from "react"

import img from "../../assets/images/ManImage.png"
const UpcomingJobs = () => {
  const upcomingJobs = [
    {
      name: "Ruwan Prasad",
      time: "Today 07:30 AM",
      location: "Van - Mitsubishi (WT 1024)",
      service: "Full Service",
      avatar: "R",
    },
    {
      name: "Kumara Peris",
      time: "16 October at 5:00 PM",
      location: "Van - Mitsubishi (WT 1024)",
      service: "Oil Change",
      avatar: "K",
    },
    {
      name: "Gihan Kodithuwakku",
      time: "20 October at 1:00 PM",
      location: "Van - Mitsubishi (WT 1024)",
      service: "Full Service",
      avatar: "G",
    },
  ]

  return (
    <div
      // style={{
      //   backgroundColor: "white",
      //   padding: "16px",
      //   borderRadius: "8px",
      //   boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
      // }}
    >
      <h3 style={{ fontWeight: "600", color: "#1f2937", marginBottom: "16px", fontSize: "18px" }}>Upcoming Jobs</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {upcomingJobs.map((job, index) => (
          <div
            key={index}
            style={{
              borderBottom: index !== upcomingJobs.length - 1 ? "1px solid #f3f4f6" : "none",
              paddingBottom: "16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "start", justifyContent: "space-between" }}>
              <div style={{ flex: 1 }}>
                <h4 style={{ fontWeight: "500", color: "#202224", marginBottom: "4px", fontSize: "14px" }}>{job.name}</h4>
                <p style={{ fontSize: "12px", color: "#6b7280", marginBottom: "2px" }}>{job.time}</p>
                <p style={{ fontSize: "12px", color: "#6b7280", marginBottom: "2px" }}>{job.location}</p>
                <p style={{ fontSize: "12px", color: "#6b7280" }}>{job.service}</p>

                <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      // backgroundColor: "#DFE9FF5E",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontSize: "12px",
                      overflow: "hidden" 
                    }}
                  >
                    <img
                      src={img}
                      alt="avatar"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                      }}
                    />
                  </div>
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      border: "1px solid #4880FF",
                      backgroundColor: "#DFE9FF5E",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#4880FF",
                      fontSize: "10px",

                    }}
                  >
                    +2
                  </div>
                </div>
              </div>

            </div>
          </div>
        ))}
      
        <div style={{ borderTop: "1px solid #E0E0E0", marginTop: "16px", paddingTop: "8px" }}></div>
        <button
          style={{
            color: "#202224",
            fontSize: "14px",
            fontWeight: "500",
            background: "none",
            border: "none",
            cursor: "pointer",
            textAlign: "center",
            textDecoration: "underline"

          }}
        >
          See More
        </button>
      </div>
    </div>
  )
}

export default UpcomingJobs