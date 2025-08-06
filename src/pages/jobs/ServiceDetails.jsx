import React from "react";
import {  TABLE_HEADER_STYLES } from "../../utils/utils";
import { FormInputII } from "../../components/global/FormInputII";
import { SelectDropdown } from "../../components/global/SelectDropdown";
import SubmitButtonII from "../../components/global/SubmitButtonII";
import SearchInput from "../../components/global/SearchInput";
import DataTable from "react-data-table-component";
import { IconButton, Tooltip } from "@material-tailwind/react";
import { RemoveIcon } from "../../utils/icons";
import NextButton from "../../components/global/NextButton";
import BackButton from "../../components/global/BackButton";

export const ServiceDetails = () => {
  const sampleServices = [
    {
      idService: 1,
      Name: "Service 01",
      Rate: 1200.0,
    },
    {
      idService: 1,
      Name: "Service 02",
      Rate: 1500.0,
    },
    {
      idService: 1,
      Name: "Service 03",
      Rate: 2200.0,
    },
  ];

  const TABLE_DATA = [
    {
      name: "Service Name",
      selector: (row) => row.Name,
      wrap: false,
      minWidth: "200px",
      cellStyle: {
        whiteSpace: "normal",
        wordBreak: "break-word",
      },
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
        Service Details
      </div>
      <div className="md:flex block md:gap-10 mt-10">
        <div className="md:w-[50%] w- full border-[1px] px-[20px] pt-5 border-[#CBCBCB]">
          <div className="mb-3 w-full">
            <SelectDropdown
              name="Vehicle Category"
              options={"sdf"}
              value={"fdgfe"}
              inputName={"sdggsdg"}
              errors={"sdsdvd"}
              handleFilterChange={"sdfsdf"}
            />
          </div>
          <div className="mb-3 w-full">
            <FormInputII
              data={"vsd"}
              type={"text"}
              errors={"sdv"}
              handleChange={"sdfsdv"}
              name={"Rate"}
              inputName={"dsfds"}
              placeholder={"add rate"}
            />
          </div>
          <div className="flex justify-end">
            <SubmitButtonII submitting={"s"} name={"Add Service"} />
          </div>

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
                data={sampleServices}
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
                columns={TABLE_DATA}
                data={sampleServices}
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
