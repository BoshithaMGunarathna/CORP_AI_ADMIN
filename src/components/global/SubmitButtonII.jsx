import React from "react";
import { ProcessingIcon } from "../../utils/icons";

const SubmitButtonII = ({submitting, name}) => {
  return (
    <button
          className="font-nunito border-adminSecondAddButton bg-adminSecondAddButton flex items-center justify-center rounded-lg border px-4 py-2 text-[14px] font-semibold leading-[22px] text-white transition-all duration-300 hover:bg-opacity-75 hover:text-white"
          type="submit"
          disabled={submitting}
        >
          {/* {submitting && <ProcessingIcon />} */}
          {name}
        </button>
  )
}

export default SubmitButtonII
0