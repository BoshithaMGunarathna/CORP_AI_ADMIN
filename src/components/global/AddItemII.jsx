import React, { FC } from "react";

import { PlusIcon } from "../../utils/icons";
import { Link } from "react-router-dom";

const AddItemII = ({ handleOpenModal, name }) => {
  return (
    <button
      onClick={handleOpenModal}
      className="px-4 rounded-md py-2 bg-adminSecondAddButton text-white text-[15px] font-semibold font-inter"
    >
      {name}
    </button>
  );
};

export default AddItemII;
