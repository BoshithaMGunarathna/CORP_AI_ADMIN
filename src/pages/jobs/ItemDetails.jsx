import React from "react";
import { TABLE_HEADER_STYLES } from "../../utils/utils";
import SearchInput from "../../components/global/SearchInput";
import DataTable from "react-data-table-component";
import { IconButton, Tooltip } from "@material-tailwind/react";
import { AddIcon, RemoveIcon } from "../../utils/icons";
import NextButton from "../../components/global/NextButton";
import BackButton from "../../components/global/BackButton";

export const ItemDetails = () => {
  const sampleData = [
    {
      idService: 1,
      Code: "Item Code 01",
      Description: "Description 01",
      Rate: 1200.0,
    },
    {
      idService: 1,
      Code: "Item Code 01",
      Description: "Description 01",
      Rate: 1200.0,
    },
    {
      idService: 1,
      Code: "Item Code 01",
      Description: "Description 01",
      Rate: 1200.0,
    },
    {
      idService: 1,
      Code: "Item Code 01",
      Description: "Description 01",
      Rate: 1200.0,
    },
  ];

  const TABLE_DATA = [
    {
      name: "Item Code",
      selector: (row) => row.Code,
      wrap: false,
      cellStyle: {
        whiteSpace: "normal",
        wordBreak: "break-word",
      },
    },
    {
      name: "Description",
      selector: (row) => row.Description,
      wrap: false,
      maxWidth: "auto",
      cellStyle: {
        whiteSpace: "normal",
        wordBreak: "break-word",
      },
      compact: true,
    },
    {
      name: "Rate",
      selector: (row) => row.Rate,
      wrap: false,
      maxWidth: "auto",
      cellStyle: {
        whiteSpace: "normal",
        wordBreak: "break-word",
      },
      compact: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <>
          <Tooltip content="Remove Service">
            <IconButton
              onClick={() => handleEditClick(row)}
              variant="text"
              className="mx-2 bg-white "
            >
              <AddIcon />
            </IconButton>
          </Tooltip>
        </>
      ),
    },
  ];

  const TABLE_DATA2 = [
    {
      name: "Item Code",
      selector: (row) => row.Code,
      wrap: false,
      cellStyle: {
        whiteSpace: "normal",
        wordBreak: "break-word",
      },
    },
    {
      name: "Description",
      selector: (row) => row.Description,
      wrap: false,
      maxWidth: "auto",
      cellStyle: {
        whiteSpace: "normal",
        wordBreak: "break-word",
      },
      compact: true,
    },
    {
      name: "Rate",
      selector: (row) => row.Rate,
      wrap: false,
      maxWidth: "auto",
      cellStyle: {
        whiteSpace: "normal",
        wordBreak: "break-word",
      },
      compact: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <>
          <Tooltip content="Remove Service">
            <IconButton
              onClick={() => handleEditClick(row)}
              variant="text"
              className="mx-2 bg-white "
            >
              <RemoveIcon />
            </IconButton>
          </Tooltip>
        </>
      ),
    },
  ];
  return (
    <>
      <div className="text-center font-semibold text-[18px] font-nunito pt-4">
        Item Details
      </div>
      <div className="md:flex block md:gap-10 mt-10">
        <div className="md:w-[50%] w-full border-[1px] px-[20px] border-[#CBCBCB]">
          <div className="mt-5">
            <SearchInput
              name=""
              type="text"
              searchQuery={""}
              handleSearchInputChange={""}
            />

            <div className="mt-5">
              <DataTable
                columns={TABLE_DATA}
                data={sampleData}
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
        </div>

        <div className="md:w-[50%] w-full border-[1px] px-[20px] border-[#CBCBCB]">
          <div className="mt-5">
            <SearchInput
              name=""
              type="text"
              searchQuery={""}
              handleSearchInputChange={""}
            />

            <div className="mt-5">
              <DataTable
                columns={TABLE_DATA2}
                data={sampleData}
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
        </div>
      </div>

      
    </>
  );
};
