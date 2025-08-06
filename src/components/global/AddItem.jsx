import React, { FC } from "react";

import { PlusIcon } from "../../utils/icons";
import { Link } from "react-router-dom";

const AddItem = ({ handleOpenModal, name }) => {
  return (
    <button
      onClick={handleOpenModal}
      className="px-4 rounded-md py-2 bg-adminAddButton text-white text-[15px] font-semibold font-inter"
    >
      {name}
    </button>
  );
};

export default AddItem;
