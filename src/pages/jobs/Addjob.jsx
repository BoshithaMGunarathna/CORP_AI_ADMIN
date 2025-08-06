import React, { useState } from "react";
import { CustomerDetails } from "./CustomerDetails";
import { ServiceDetails } from "./ServiceDetails";
import { ItemDetails } from "./ItemDetails";
import { LaborDetails } from "./LaborDetails";
import { Summary } from "./Summary";
import { NextIcon } from "../../utils/icons";
import BackButton from "../../components/global/BackButton";
import NextButton from "../../components/global/NextButton";
import SubmitButton from "../../components/global/SubmitButton";

export const Addjob = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabTitles = [
    "01. Customer Details",
    "02. Service Details",
    "03. Item Details",
    "04. Labor Details",
    "05. Summary",
  ];

  const handleNext = () => {
    if (activeTab < 5) setActiveTab((prev) => prev + 1);
  };

  const handleBack = () => {
    if (activeTab > 1) setActiveTab((prev) => prev - 1);
  };

  return (
    <>
      <div className="flex justify-between pt-8 font-nunito">
        <div className="flex">
          <a
            href="/jobs"
            className="flex items-center text-[16px] text-[#737373] font-semibold"
          >
            Job <NextIcon />
          </a>
          <span className="text-[24px] text-[#000000] font-semibold ml-2">
            Add New Job
          </span>
        </div>
      </div>

      <div className="flex justify-center font-nunito w-full rounded-lg bg-white py-6 text-[16px]">
        <div className="flex gap-4 border-b border-gray-200">
          {tabTitles.map((title, index) => (
            <div
              key={index}
              className={`py-2 px-4 ${
                activeTab === index + 1
                  ? "text-adminAddButton border-b-2 border-adminAddButton"
                  : "text-gray-400 cursor-not-allowed"
              }`}
            >
              {title}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full rounded-lg bg-white px-[25px] pb-[40px] pt-[15px] mb-10">
        {activeTab === 1 && <CustomerDetails />}
        {activeTab === 2 && <ServiceDetails />}
        {activeTab === 3 && <ItemDetails />}
        {activeTab === 4 && <LaborDetails />}
        {activeTab === 5 && <Summary />}

        <div className="flex justify-end gap-5 mt-6">
          {activeTab > 1 ? <BackButton onClick={handleBack} /> : <div />}

          {activeTab < 5 ? (
            <NextButton onClick={handleNext} />
          ) : (
            <div className="min-w-[120px]">
              <SubmitButton text="Save" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
