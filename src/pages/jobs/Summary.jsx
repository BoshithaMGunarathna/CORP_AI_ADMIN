import React from "react";
import DataTable from "react-data-table-component";
import { TABLE_HEADER_STYLES } from "../../utils/utils";
import SubmitButton from "../../components/global/SubmitButton";
import BackButton from "../../components/global/BackButton";


export const Summary = () => {
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

  const sampleLaborServices = [
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
  ];

  const TABLE_LABOR = [
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
      name: "Labor",
      selector: (row) => <>labor 01</>,
      wrap: false,
      maxWidth: "auto",
      cellStyle: {
        whiteSpace: "normal",
        wordBreak: "break-word",
      },
      compact: true,
    },
  ];

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

  const TABLE_ITEM_DATA = [
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
  ];
  return (
    <>
      <div className="text-center font-semibold text-[18px] font-nunito pt-4">
        Summary
      </div>
      <div className="grid grid-cols-3 gap-4 p-4 font-nunito">
        <div className="border-[1px] p-2 h-fit rounded-lg">
          <div className="text-right font-bold text-[12px] font-nunito py-4">
            Reservation Number 9
          </div>
          <table class="w-full text-sm text-left rtl:text-right ">
            <thead class="text-[14px] text-black font-normal bg-[#E2F0FF]">
              <tr>
                <th scope="col" colSpan="2" class="px-6 py-3">
                  Customer details
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white  text-gray-700 text-[14px] ">
                <td className="p-2 whitespace-nowrap border-b border-gray-200">
                  Name
                </td>
                <td className="p-2 whitespace-nowrap border-b border-gray-200">
                  Nimal Perera
                </td>
              </tr>
              <tr className="bg-white  text-gray-700 text-[14px] ">
                <td className="p-2 whitespace-nowrap border-b border-gray-200">
                  Contact No
                </td>
                <td className="p-2 whitespace-nowrap border-b border-gray-200">
                  021-3696520
                </td>
              </tr>
              <tr className="bg-white  text-gray-700 text-[14px] ">
                <td className="p-2 whitespace-nowrap border-b border-gray-200">
                  Mobile No
                </td>
                <td className="p-2 whitespace-nowrap border-b border-gray-200">
                  011-2352693
                </td>
              </tr>
              <tr className="bg-white  text-gray-700 text-[14px] ">
                <td className="p-2 whitespace-nowrap border-b border-gray-200">
                  Address
                </td>
                <td className="p-2 whitespace-nowrap border-b border-gray-200">
                  Colombo
                </td>
              </tr>
            </tbody>
          </table>

          <table class="w-full text-sm text-left rtl:text-right mt-5 ">
            <thead class="text-[14px] text-black font-normal bg-[#E2F0FF]">
              <tr>
                <th scope="col" colSpan="2" class="px-6 py-3">
                  Vehicle details
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white  text-gray-700 text-[14px] ">
                <td className="p-2 whitespace-nowrap border-b border-gray-200">
                  Name
                </td>
                <td className="p-2 whitespace-nowrap border-b border-gray-200">
                  Nimal Perera
                </td>
              </tr>
              <tr className="bg-white  text-gray-700 text-[14px] ">
                <td className="p-2 whitespace-nowrap border-b border-gray-200">
                  Contact No
                </td>
                <td className="p-2 whitespace-nowrap border-b border-gray-200">
                  021-3696520
                </td>
              </tr>
              <tr className="bg-white  text-gray-700 text-[14px] ">
                <td className="p-2 whitespace-nowrap border-b border-gray-200">
                  Mobile No
                </td>
                <td className="p-2 whitespace-nowrap border-b border-gray-200">
                  011-2352693
                </td>
              </tr>
              <tr className="bg-white  text-gray-700 text-[14px] ">
                <td className="p-2 whitespace-nowrap border-b border-gray-200">
                  Address
                </td>
                <td className="p-2 whitespace-nowrap border-b border-gray-200">
                  Colombo
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <div className="border-[1px] p-2 h-fit rounded-lg">
            <div className="text-center font-bold text-[14px] font-nunito pt-2">
              Service Details
            </div>
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
          <div className="border-[1px] p-2 h-fit rounded-lg mt-3">
            <div className="text-center font-bold text-[14px] font-nunito pt-2">
              Labor Details
            </div>
            <div className="mt-5">
              <DataTable
                columns={TABLE_LABOR}
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
        <div>
          <div className="border-[1px] p-2 h-fit rounded-lg">
            <div className="text-center font-bold text-[14px] font-nunito pt-2">
              Item Details
            </div>
            <div className="mt-5">
              <DataTable
                columns={TABLE_ITEM_DATA}
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
