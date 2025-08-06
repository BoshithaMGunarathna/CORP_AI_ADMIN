import { IconButton, Tooltip } from "@material-tailwind/react";
import {
  EditNewIcon,
  PlusIcon,
  MinusIcon,
  ArrowDownIcon,
  NextIcon,
} from "../../utils/icons";
import AddItem from "../../components/global/AddItem";
import SearchInput from "../../components/global/SearchInput";
import DataTable from "react-data-table-component";
import { TABLE_HEADER_STYLES } from "../../utils/utils";
import SearchSelect from "../../components/global/SearchSelect";

export const CreditSupplier = () => {
  const sampleSuppliers = [
    {
      idSupplier: 1,
      Code: "SUP001",
      Name: "Global Medics",
      Date: "2025-09-21",
      transaction_type: "Purchase",
      transaction_id: "TXN1001",
      transaction_amount: 1500.0,
      credit: 1000.0,
      debit: 500.0,
    },
    {
      idSupplier: 2,
      Code: "SUP002",
      Name: "Health Plus Pharma",
      Date: "2025-09-22",
      transaction_type: "Return",
      transaction_id: "TXN1002",
      transaction_amount: 800.0,
      credit: 800.0,
      debit: 0.0,
    },
    {
      idSupplier: 3,
      Code: "SUP003",
      Name: "MedCare Supplies",
      Date: "2025-09-23",
      transaction_type: "Purchase",
      transaction_id: "TXN1003",
      transaction_amount: 1200.0,
      credit: 700.0,
      debit: 500.0,
    },
  ];

  // Creating the table
  const TABLE_SUPPLIER = [
    {
      name: "ID",
      selector: (row) => row.Code,
      wrap: true,
      maxWidth: "auto",
      cellStyle: {
        whiteSpace: "normal",
        wordBreak: "break-word",
      },
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.Name,
      maxWidth: "auto",
      wrap: true,
    },
    {
      name: "Date",
      selector: (row) => row.Date,
      wrap: true,
      maxWidth: "auto",
    },

    {
      name: "Transaction Type",
      selector: (row) => row.transaction_type,
      wrap: true,
      maxWidth: "auto",
    },
    {
      name: "Transaction Id",
      selector: (row) => row.transaction_id,
      wrap: true,
      maxWidth: "auto",
      right: true,
    },
    {
      name: "Transaction Amount",
      selector: (row) => row.transaction_amount,
      wrap: true,
      maxWidth: "auto",
      right: true,
      compact: true,
    },
    {
      name: "Credit",
      selector: (row) => row.credit,
      wrap: true,
      maxWidth: "auto",
      right: true,
      compact: true,
    },
    {
      name: "Debit",
      selector: (row) => row.debit,
      wrap: true,
      maxWidth: "auto",
      right: true,
    },
    
  ];

  const suppliers = [
    {
      value: 1,
      label: "Supplier 1",
    },
    {
      value: 2,
      label: "Supplier 2",
    },
  ];
  return (
    <>
      <div className="flex justify-between pt-8 font-nunito">
        <div className="flex">
          {/* <a
            href="#"
            className=" flex items-center text-[16px] text-[#737373] font-semibold"
          >
            Job <NextIcon />{" "}
          </a>{" "} */}
          <span className="text-[24px] text-[#000000] font-semibold">
            Credit Supplier
          </span>
        </div>
      </div>
      <section className="mt-4 hidden md:block">
        <div className="w-full rounded-lg bg-white px-[25px] pb-[40px] pt-[15px]">
          <div className="md:justify-left mt-4 flex flex-col md:flex-row">
            <SearchSelect name="Select Suppliers" options={suppliers} />
            <SearchInput
              name="Start Date"
              type="date"
              // searchQuery={searchQuery}
              // handleSearchInputChange={handleSearchInputChange}
            />
            <SearchInput
              name="End Date"
              type="date"
              // searchQuery={searchQuery}
              // handleSearchInputChange={handleSearchInputChange}
            />
          </div>
          <div className="mt-10">
            <DataTable
              columns={TABLE_SUPPLIER}
              data={sampleSuppliers}
              customStyles={TABLE_HEADER_STYLES}
              className="mt-4"
              pagination
              paginationPerPage={10}
              paginationRowsPerPageOptions={[10, 50, 100]}
              noDataComponent={
                <div className="text-center">No data available</div>
              }
            />
          </div>
        </div>
      </section>
    </>
  );
};
