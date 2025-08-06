import { IconButton, Tooltip } from "@material-tailwind/react";
import {
  EditNewIcon,
  PlusIcon,
  MinusIcon,
  ArrowDownIcon,
  NextIcon,
} from "../../utils/icons";
import AddItem from '../../components/global/AddItem'
import SearchInput from '../../components/global/SearchInput'
import DataTable from "react-data-table-component";
import { TABLE_HEADER_STYLES } from "../../utils/utils";
import { AddSupplierReturn } from "./AddSupplierReturn";
import { useState } from "react";

export const SupplierReturns = () => {
   const [addModal, setAddModal] = useState(false);
    const handleOpenModal = () => setAddModal(true);
      const sampleSuppliers = [
    {
      idSupplier: 1,
      Code: "SUP001",
      Name: "Global Medics",
      Date: "2025-09-21",
      Reason: "reason 1",
      total: "1200.00",
    },
    {
      idSupplier: 2,
      Code: "SUP002",
      Name: "Health Plus Pharma",
      Date: "2025-09-21",
      Reason: "reason 2",
      total: "1200.00",
    },
    {
      idSupplier: 3,
      Code: "SUP003",
      Name: "MedCare Supplies",
      Date: "2025-09-21",
      Reason: "reason 3",
      total: "1200.00",
    },
  ];


    // Creating the table
    const TABLE_SUPPLIER = [
      {
        name: "ID",
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
        name: "Date",
        selector: (row) => row.Date,
        wrap: false,
        minWidth: "200px",
      },
  
      {
        name: "Reason",
        selector: (row) => row.Reason,
        wrap: false,
        maxWidth: "auto",
      },
       {
        name: "Total (LKR)",
        selector: (row) => row.total,
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
            Supplier Returns
          </span>
        </div>
        <div>
          <AddItem 
          handleOpenModal={handleOpenModal}
           name="+ Add New Supplier Return" />
        </div>
      </div>
      <section className="mt-4 hidden md:block">
              <div className="w-full rounded-lg bg-white px-[25px] pb-[40px] pt-[15px]">
                <div className="md:justify-left mt-4 flex flex-col md:flex-row">
                  <SearchInput
                    name="Search Suppliers"
                    type="text"
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
            <AddSupplierReturn
                    isOpen={addModal}
                    onClose={() => setAddModal(false)}
                  />
    </>
  )
}
