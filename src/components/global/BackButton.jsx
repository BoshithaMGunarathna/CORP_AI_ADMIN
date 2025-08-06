import React from "react";

const BackButton = ({ onClick }) => {
  return (
    <button
      type="button"
     onClick={onClick}
      className="font-nunito border-adminAddButton text-adminAddButton hover:bg-adminAddButton flex min-w-[120px] items-center justify-center gap-2 rounded-lg border bg-white px-4 py-2 text-[14px] font-semibold leading-[22px] transition-all duration-300 hover:text-white"
    >
      Back
    </button>
  );
};

export default BackButton;
