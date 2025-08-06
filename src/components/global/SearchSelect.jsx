import React from "react";
import Select from "react-select";
import { customSelectStyles } from "../../utils/utils";

const SearchSelect = ({ name, options, value, handleFilterChange }) => {
  return (
    <div className="w-full md:w-[230px] md:mr-5">
      <p className="font-nunito pb-2 text-[14px]  font-normal leading-[22px] text-[#000000]">
        {name}
      </p>
      <Select
        className="basic-single font-font-nunito text-[14px] h-10"
        classNamePrefix="select"
        isSearchable
        name={name}
        options={options}
        defaultValue={options[0]}
        value={value}
        onChange={handleFilterChange}
        styles={customSelectStyles} 
      />
    </div>
  )
}

export default SearchSelect
