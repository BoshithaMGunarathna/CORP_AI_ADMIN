import React from "react";

const MobileItemRow = ({ label, value }) => (
  <div className="flex w-full items-center border-b border-[#64728C] border-opacity-10 py-2">
    <div className="font-poppins w-[40%] text-[12px] font-medium leading-[18px] text-[#64728C]">
      {label}
    </div>
    <div className="font-poppins overflow-wrap break-word w-[60%] text-[12px] font-normal leading-[18px] text-[#64728C]">
      {value}
    </div>
  </div>
);

export default MobileItemRow;
