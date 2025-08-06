import React from "react";
import { AddIcon } from "../../utils/icons";

const OpenModalBtn = ({ handleOpenModal }) => {
  return (
    <button
      onClick={handleOpenModal}
      className="rounded-md py-2  font-semibold"
    >
      <AddIcon/>
    </button>
  );
};

export default OpenModalBtn;
