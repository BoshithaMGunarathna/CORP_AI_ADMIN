import React, { FC } from "react";

const SearchInput = ({ name, searchQuery,type, handleSearchInputChange }) => {
  return (
    <div className="mb-4 w-full md:mb-0 md:mr-5 md:w-[230px]">
      <p className="font-nunito pb-2 text-[14px] font-normal leading-[22px] text-[#000000]">
        {name}
      </p>
      <input
        type={type}
        placeholder="Search...."
        value={searchQuery}
        onChange={handleSearchInputChange}
        className="font-nunito w-full min-w-[230px] rounded-lg border border-[#CBCBCB] px-5 py-2 text-[14px] font-medium leading-[20px] focus:outline-[#bdbdbd]"
      />
    </div>
  );
};

export default SearchInput;
