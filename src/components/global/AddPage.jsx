import React from 'react'
import { Link } from "react-router-dom";

const AddPage = ({name, href }) => {
  return (
     <Link
      className=" rounded-md py-2 px-5 bg-adminAddButton text-white text-[15px] font-semibold"
       to={href}
    >
      {name}
    </Link>
  )
}

export default AddPage
