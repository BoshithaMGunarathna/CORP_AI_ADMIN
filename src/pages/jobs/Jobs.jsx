import React, { useState, useEffect } from "react";
import { IconButton, Tooltip } from "@material-tailwind/react";
import {
  EditNewIcon,
  PlusIcon,
  MinusIcon,
  ArrowDownIcon,
  NextIcon,
} from "../../utils/icons";
import { TABLE_HEAD_SUPPLIER } from "../../utils/tableArray";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import DataTable from "react-data-table-component";
import { TABLE_HEADER_STYLES } from "../../utils/utils";
import axiosClient from "../../../axios-client";
import SearchInput from "../../components/global/SearchInput";
import AddItem from "../../components/global/AddItem";
import MobilePagination from "../../components/global/MobilePagination";
import MobileItemRow from "../../components/global/MobileItemRow";
import SearchSelect from "../../components/global/SearchSelect";
import { motion, AnimatePresence } from "framer-motion";
import AddPage from "../../components/global/AddPage";

export const Jobs = () => {
  const TABLE_SUPPLIER = [
    {
      name: "Registration No",
      selector: (row) => row.Regi_No,
      wrap: false,
      minWidth: "200px",
      cellStyle: {
        whiteSpace: "normal",
        wordBreak: "break-word",
      },
      sortable: true,
    },
    {
      name: "Customer",
      selector: (row) => row.Customer,
      wrap: false,
      maxWidth: "auto",
    },
    {
      name: "Date",
      selector: (row) => row.Date,
      wrap: false,
      minWidth: "200px",
    },

    {
      name: "Contact No",
      selector: (row) => row.Contact_No,
      wrap: false,
      maxWidth: "auto",
    },
  ];

  const sampleSuppliers = [
    {
      idSupplier: 1,
      Regi_No: "ACR-23443",
      Customer: "Global Medics",
      Date: "2005-02-21",
      Contact_No: "0771234567",
    },
    {
      idSupplier: 2,
      Regi_No: "ACR-23443",
      Customer: "Global Medics",
      Date: "2005-02-21",
      Contact_No: "0771234567",
    },
    {
      idSupplier: 3,
      Regi_No: "ACR-23443",
      Customer: "Global Medics",
      Date: "2005-02-21",
      Contact_No: "0771234567",
    },
  ];

  const status = [
    {
      value: 1,
      label: "Active",
    },
    {
      value: 2,
      label: "Inactive",
    },
  ];

  return (
    <>
      <div className="flex justify-between pt-8 font-nunito">
        <div className="flex">
          <span className="text-[24px] text-[#000000] font-semibold">Jobs</span>
        </div>
        <div>
          <AddPage href="add-job" name="+ Add New Job" />
        </div>
      </div>
      {/* Desktop version */}
      <section className="mt-4 hidden md:block">
        <div className="w-full rounded-lg bg-white px-[25px] pb-[40px] pt-[15px]">
          <div className="md:justify-left mt-4 flex flex-col md:flex-row">
            <SearchInput
              name="Search"
              type="text"
              //  searchQuery={searchQuery}
              //  handleSearchInputChange={handleSearchInputChange}
            />
            <SearchInput
              name="Start Date"
              type="date"
              //  searchQuery={searchQuery}
              //  handleSearchInputChange={handleSearchInputChange}
            />
            <SearchInput
              name="End Date"
              type="date"
              //  searchQuery={searchQuery}
              //  handleSearchInputChange={handleSearchInputChange}
            />
            <SearchSelect name="Search Suppliers" options={status} />
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
