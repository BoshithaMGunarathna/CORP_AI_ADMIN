import React from "react";

const CancelButton = ({ handleCancel }) => {
  return (
    <button
      className="font-poppins border-adminAddButton text-adminAddButton hover:bg-adminAddButton flex min-w-[120px] items-center justify-center gap-2 rounded-lg border bg-white px-4 py-2 text-[14px] font-semibold leading-[22px] transition-all duration-300 hover:text-white"
      type="button"
      onClick={handleCancel}
    >
      Cancel
    </button>
  );
};

export default CancelButton;
