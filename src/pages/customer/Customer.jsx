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
import { AddCustomer } from "./AddCustomer";

export const Customer = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const handleOpenModal = () => setShowAddModal(true);

  const [currentPage, setCurrentPage] = useState(1);

  const [expandedSupplierIndex, setExpandedSupplierIndex] = useState(null);

  const navigate = useNavigate();

  // Handler for search input changes
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Creating the table
  const TABLE_DATA = [
    {
      name: "Code",
      selector: (row) => row.Code,
      wrap: false,
      minWidth: "200px",
      cellStyle: {
        whiteSpace: "normal",
        wordBreak: "break-word",
      },
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.Name,
      wrap: false,
      maxWidth: "auto",
    },
    {
      name: "Email",
      selector: (row) => row.Email,
      wrap: false,
      minWidth: "200px",
    },

    {
      name: "Contact No",
      selector: (row) => row.Contact_No,
      wrap: false,
      maxWidth: "auto",
      right: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <>
          <Tooltip content="Edit Supplier">
            <IconButton
              onClick={() => handleEditClick(row)}
              variant="text"
              className="mx-2 bg-white"
            >
              <EditNewIcon />
            </IconButton>
          </Tooltip>
        </>
      ),
    },
  ];

  // Mobile version row expand
  const handleExpandClick = (index) => {
    if (expandedSupplierIndex === index) {
      setExpandedSupplierIndex(null);
    } else {
      setExpandedSupplierIndex(index);
    }
  };

  const sampleCustomers = [
    {
      idSupplier: 1,
      Code: "CUS001",
      Name: "Global Medics",
      Email: "contact@globalmedics.com",
      Contact_No: "0771234567",
      Status: 1,
    },
    {
      idSupplier: 2,
      Code: "CUS002",
      Name: "Health Plus Pharma",
      Email: "support@healthplus.com",
      Contact_No: "0712345678",
      Status: 0,
    },
    {
      idSupplier: 3,
      Code: "CUS003",
      Name: "MedCare Supplies",
      Email: "info@medcare.com",
      Contact_No: "0756781234",
      Status: 1,
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
            Customers
          </span>
        </div>
        <div>
          <AddItem handleOpenModal={handleOpenModal} name="+ Add New Customer" />
        </div>
      </div>
      {/* Desktop version */}
      <section className="mt-4 hidden md:block">
        <div className="w-full rounded-lg bg-white px-[25px] pb-[40px] pt-[15px]">
          <div className="md:justify-left mt-4 flex flex-col md:flex-row">
            <SearchInput
              name="Search Customers"
              type="text"
              searchQuery={searchQuery}
              handleSearchInputChange={handleSearchInputChange}
            />
          </div>
          <div className="mt-10">
            <DataTable
              columns={TABLE_DATA}
              data={sampleCustomers}
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

      {/* Mobile version */}
      <section className="mt-5 w-full rounded-[10px] bg-white px-[3%] py-3 md:hidden">
        <div className="flex justify-end">
          <AddItem href="/admin/suppliers/add" />
        </div>
        <div className="mt-3 flex flex-col">
          <SearchInput
            name="Search Suppliers"
            searchQuery={searchQuery}
            handleSearchInputChange={handleSearchInputChange}
          />
        </div>
        <div className="w-full pt-5">
          <div className="font-poppins flex w-full items-center gap-2 bg-[#769EFF] bg-opacity-30 px-2 py-2 text-[12px] font-medium leading-[18px] text-[#10275E]">
            <ArrowDownIcon />
            Customer Name
          </div>
          {sampleCustomers
            .slice((currentPage - 1) * 10, currentPage * 10)
            .map((supplier, index) => (
              <div key={supplier.id}>
                <div
                  className="flex w-full items-center border-b border-[#64728C] border-opacity-10 px-2 py-2"
                  onClick={() => handleExpandClick(index)}
                >
                  <span className="mr-3 flex aspect-square w-[14px] items-center justify-center rounded-full border border-[#64728C]">
                    {expandedSupplierIndex === index ? (
                      <MinusIcon width={"8px"} />
                    ) : (
                      <PlusIcon width={"8px"} color={"#64728C"} />
                    )}
                  </span>
                  <span className="font-poppins text-[12px] font-medium leading-[18px] text-[#64728C]">
                    {supplier.Name}
                  </span>
                </div>
                {expandedSupplierIndex === index && (
                  <div className="w-full bg-[#D9D9D9] bg-opacity-20 pl-[35px]">
                    <div className="font-poppins w-full border-b border-[#64728C] border-opacity-10 py-2 text-[12px] font-medium leading-[18px] text-[#64728C]">
                      {supplier.name}
                    </div>
                    <MobileItemRow
                      label={TABLE_HEAD_SUPPLIER[1]}
                      value={supplier.Name}
                    />
                    <MobileItemRow
                      label={TABLE_HEAD_SUPPLIER[2]}
                      value={supplier.Code}
                    />
                    <MobileItemRow
                      label={TABLE_HEAD_SUPPLIER[3]}
                      value={supplier.Email}
                    />
                  </div>
                )}
              </div>
            ))}
        </div>

        {/* Pagination for Mobile version */}
        <MobilePagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          items={sampleCustomers}
        />
      </section>

      <AddCustomer
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
      />
    </>
  );
};
