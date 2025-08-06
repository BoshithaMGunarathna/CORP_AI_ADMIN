import React from "react";
import { SelectDropdown } from "../../components/global/SelectDropdown";
import { FormInputII } from "../../components/global/FormInputII";
import SubmitButton from "../../components/global/SubmitButton";
import SubmitButtonII from "../../components/global/SubmitButtonII";
import DataTable from "react-data-table-component";
import { TABLE_HEADER_STYLES } from "../../utils/utils";
import { IconButton, Tooltip } from "@material-tailwind/react";
import {
  EditNewIcon,
} from "../../utils/icons";

export const Services = () => {

const sampleServices = [
    {
      idService: 1,
      Name: "Service 01",
      Rate: 1200.0,
      time: '50 min'
    },
    {
      idService: 1,
      Name: "Service 02",
      Rate: 1500.0,
      time: '50 min'
    },
    {
      idService: 1,
      Name: "Service 03",
      Rate: 2200.0,
      time: '50 min'
    },
  ];


   const TABLE_SERVICE = [
    {
      name: "Service",
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
    },
    {
      name: "Estimate Time",
      selector: (row) => row.time,
      wrap: false,
      minWidth: "200px",
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
          <span className="text-[24px] text-[#000000] font-semibold">
            Services
          </span>
        </div>
        <div></div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-[40%] pr-5">
          <div className="border-[1px] bg-white rounded-lg px-3">
            <div className="text-center font-semibold text-[18px] font-nunito pt-4">
              Add Service
            </div>
            <div className="w-full mt-5">
              <SelectDropdown
                name="Vehicle Category"
                options={"sdf"}
                value={"fdgfe"}
                inputName={"sdggsdg"}
                errors={"sdsdvd"}
                handleFilterChange={"sdfsdf"}
              />
            </div>
            <div className="w-full mt-5">
              <SelectDropdown
                name="Name"
                options={"sdf"}
                value={"fdgfe"}
                inputName={"sdggsdg"}
                errors={"sdsdvd"}
                handleFilterChange={"sdfsdf"}
              />
            </div>
            <div className="w-full mt-5">
              <SelectDropdown
                name="Vehicle Model"
                options={"sdf"}
                value={"fdgfe"}
                inputName={"sdggsdg"}
                errors={"sdsdvd"}
                handleFilterChange={"sdfsdf"}
              />
            </div>
                        <div className="mt-5 w-full">
              <FormInputII
                data={"vsd"}
                type="text"
                errors={"sdv"}
                handleChange={"sdfsdv"}
                name={"Registration No"}
                //   inputName={item.name}
                //   placeholder={item.placeholder}
              />
            </div>
            <div className="flex justify-end my-5">
              <SubmitButton name="save" />
            </div>
          </div>
        </div>
        <div className="w-[60%]">
          <div className="border-[1px] bg-white rounded-lg px-3">
            <div className="mt-5">
              <div className="flex items-center text-[15px] font-nunito font-normal mt-5 w-[400px]">
                      <SelectDropdown
                        name="Category"
                        options={"sdf"}
                        value={"fdgfe"}
                        inputName={"sdggsdg"}
                        errors={"sdsdvd"}
                        handleFilterChange={"sdfsdf"}
                      />
                    </div>
              <div className="mt-10">
                <DataTable
                  columns={TABLE_SERVICE}
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
      </div>
    </>
  );
};
