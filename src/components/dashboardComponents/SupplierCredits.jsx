import React from "react";
import CustomDatatable from "../../components/dashboardComponents/CustomDatatable";

export default function CustomerCredit({ data }) {
  // Define columns for the datatable
  const columns = [
    { Header: "Date", accessor: "Date" },
    { Header: "Supplier", accessor: "Supplier" },
    { Header: "Credit", accessor: "Credit" },
  ];

  // Map incoming data to the required format for the datatable
  const filterRows =
    data?.map((item) => ({
      Date: new Date(item.Date_Time).toISOString().split("T")[0], // Format date to YYYY-MM-DD
      Supplier: item.supplier, // Combine first and last name
      Credit: item.Credit_Balance, // Use credit balance from data
    })) || [];

  return (
    <div className="dashboard-content">
      <div className="title">Customer Credits</div>

      <CustomDatatable data={filterRows} columns={columns} />
    </div>
  );
}
