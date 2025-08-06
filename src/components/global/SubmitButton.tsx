import React from "react";
import { ProcessingIcon } from "../../utils/icons";

const SubmitButton = ({ submitting }) => {
  return (
    <button
      className="font-nunito border-adminAddButton bg-adminAddButton flex w-full items-center justify-center gap-2 rounded-lg border px-4 py-2 text-[14px] font-semibold leading-[22px] text-white transition-all duration-300 hover:bg-opacity-75 hover:text-white"
      type="submit"
      disabled={submitting}
    >
      {/* {submitting && <ProcessingIcon />} */}
      Save
    </button>
  );
};

export default SubmitButton;
