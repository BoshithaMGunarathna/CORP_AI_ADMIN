import React from "react";
import Select from "react-select";
import { customSelectStyles } from "../../utils/utils";

export const SelectDropdown = ({
  name,
  options,
  value,
  inputName,
  errors,
  handleFilterChange,
  isMulti = false,
}) => {
  return (
    <div className="w-full flex gap-5 justify-between items-center">
      <p className="font-nunito text-[14px]  w-[150px] md:text-[14px] leading-[20px] font-normal text-[#000000]">
        {name}
      </p>
      <Select
        className="basic-single font-nunito text-[14px] h-10 w-[260px]"
        classNamePrefix="select"
        isSearchable
        // name={name}
        // options={options}
        // defaultValue={options[0]}
        // value={value}
        // onChange={handleFilterChange}
        styles={customSelectStyles}
      />
      {errors[inputName] && (
        <p className="pt-1 text-xs font-medium text-red-500 font-nunito">
          {errors[inputName]}
        </p>
      )}
    </div>
  );
};
