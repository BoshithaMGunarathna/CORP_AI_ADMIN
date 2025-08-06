import React from "react";
import Select from "react-select";
import { customSelectStyles } from "../../utils/utils";
import { FormInputII } from "../../components/global/FormInputII";
import {
  customerDetailsInputItems,
  customerInputItems,
  vehicleDetailsInputItems,
} from "../../utils/dataArrays";
import { FormInput } from "../../components/global/FormInput";
import OpenModalBtn from "../../components/global/OpenModalBtn";
import { SelectDropdown } from "../../components/global/SelectDropdown";

export const CustomerDetails = () => {
  return (
    <>
      <div className="text-center font-semibold text-[18px] font-nunito pt-4">
        Customer Details
      </div>

      <div className="flex items-center text-[15px] font-nunito font-normal mt-5 w-[500px]">
        <SelectDropdown
          name="Reservation Number"
          options={"sdf"}
          value={"fdgfe"}
          inputName={"sdggsdg"}
          errors={"sdsdvd"}
          handleFilterChange={"sdfsdf"}
        />
      </div>
      <div className="flex items-center text-[15px] font-nunito font-normal mt-5 w-[500px]">
        <SelectDropdown
          name="Customer"
          options={"sdf"}
          value={"fdgfe"}
          inputName={"sdggsdg"}
          errors={"sdsdvd"}
          handleFilterChange={"sdfsdf"}
        />
      </div>

      <div className="md:flex block md:gap-10 mt-10">
        <div className="md:w-[50%] w- full border-[1px] border-[#CBCBCB]">
          <div className="text-center font-semibold text-[18px] font-nunito pt-4">
            Customer Details
          </div>
          <div className="px-[20px] mt-5">
            {customerDetailsInputItems.slice(0, 5).map((item, index) => (
              <div className="mb-3 w-full" key={index}>
                <FormInputII
                  data={"vsd"}
                  type={item.type}
                  errors={"sdv"}
                  handleChange={"sdfsdv"}
                  name={item.name}
                  inputName={item.name}
                  placeholder={item.placeholder}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="md:w-[50%] w-full border-[1px] border-[#CBCBCB]">
          <div className="text-center  font-semibold text-[18px] font-nunito pt-4">
            Vehicle Details
          </div>
          <div className="px-[20px] mt-8">
            <div className="w-full flex gap-4  items-center mt-5">
              <SelectDropdown
                name="Vehicle Category"
                options={"sdf"}
                value={"fdgfe"}
                inputName={"sdggsdg"}
                errors={"sdsdvd"}
                handleFilterChange={"sdfsdf"}
              />
              <OpenModalBtn />
            </div>
            <div className="w-full flex gap-4  items-center mt-5">
              <SelectDropdown
                name="Vehicle Brand"
                options={"sdf"}
                value={"fdgfe"}
                inputName={"sdggsdg"}
                errors={"sdsdvd"}
                handleFilterChange={"sdfsdf"}
              />
              <OpenModalBtn />
            </div>
            <div className="w-full flex gap-4  items-center mt-5">
              <SelectDropdown
                name="Vehicle Model"
                options={"sdf"}
                value={"fdgfe"}
                inputName={"sdggsdg"}
                errors={"sdsdvd"}
                handleFilterChange={"sdfsdf"}
              />
              <OpenModalBtn />
            </div>

            <div className="mt-5 mr-8">
              {vehicleDetailsInputItems.slice(3, 5).map((item, index) => (
                <div className="mb-3 w-full" key={index}>
                  <FormInputII
                    data={"vsd"}
                    type={item.type}
                    errors={"sdv"}
                    handleChange={"sdfsdv"}
                    name={item.name}
                    inputName={item.name}
                    placeholder={item.placeholder}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
