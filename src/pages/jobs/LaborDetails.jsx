import React from "react";
import { AddIcon } from "../../utils/icons";
import { customSelectStyles } from "../../utils/utils";
import Select from "react-select";
import BackButton from "../../components/global/BackButton";
import NextButton from "../../components/global/NextButton";
export const LaborDetails = () => {
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

  return (
    <>
      <div className="w-[50%] font-nunito mt-10">
        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left rtl:text-right ">
            <thead class="text-[14px] text-black font-normal bg-[#E2F0FF]">
              <tr>
                <td scope="col" class="px-6 py-3">
                  Service
                </td>
                <td scope="col" class="px-6 py-3">
                  Labor Name
                </td>
              </tr>
            </thead>
            <tbody>
              {sampleServices.map((service, index) => (
                <tr key={index} className="bg-white  text-gray-700 text-[14px]">
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                    {service.Name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                    labor 1 
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button>
                      <AddIcon />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
     
    </>
  );
};
