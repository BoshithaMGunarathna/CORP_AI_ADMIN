import React from "react";
import CustomDatatable from "../../components/dashboardComponents/CustomDatatable"

export default function CustomerCredit({ data }) {

  const columns = [
    { Header: "Date", accessor: "Date" },
    { Header: "Customer", accessor: "Customer" },
    { Header: "Credit", accessor: "Credit" },
  ];


  const filterRows =
    data?.map((item) => ({
      Date: new Date(item.Date_Time).toISOString().split("T")[0], 
      Customer: `${item.firstName} ${item.lastName}`, 
      Credit: item.Credit_Balance, 
    })) || [];

  return (
    <div className="dashboard-content">
      <div className="title">Customer Credits</div>

      <CustomDatatable data={filterRows} columns={columns} />
    </div>
  );
}
