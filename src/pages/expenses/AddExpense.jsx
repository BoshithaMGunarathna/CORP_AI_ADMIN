import { useState } from "react";
import axiosClient from "../../../axios-client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { FormInput } from "../../components/global/FormInput";
import CancelButton from "../../components/global/CancelButton";
import SubmitButton from "../../components/global/SubmitButton";
import { supplierInputItems } from "../../utils/dataArrays";
import { motion, AnimatePresence } from "framer-motion";
import { SelectDropdown } from "../../components/global/SelectDropdown";
import { SelectDropdownII } from "../../components/global/SelectDropdownII";

export const AddExpense = ({ isOpen, onClose }) => {
  const inputItems = [
    {
      name: "Date*",
      inputName: "Date",
      type: "date",
      placeholder: "Type here....",
    },
    {
      name: "Description*",
      inputName: "Description",
      type: "text",
      placeholder: "Type here....",
    },
    {
      name: "Amount*",
      inputName: "Amount",
      type: "text",
      placeholder: "Type here....",
    },
  ];

  return (
    <>
      <ToastContainer />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex justify-end bg-black bg-opacity-30 font-nunito"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-[500px] relative h-full bg-white shadow-xl p-4"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <div className="flex justify-between items-center border-b pb-2">
                <h2 className="text-xl font-semibold">Add Expense</h2>
                <button onClick={onClose} className="text-black  text-[30px]">
                  &times;
                </button>
              </div>

              <div className="mt-4">
                <form>
                  <div className="mt-6 ">
                    {inputItems.slice(0, 2).map((item, itemIndex) => (
                      <div className="mb-3 w-full " key={itemIndex}>
                        <FormInput
                          data={"formData"}
                          type={item.type}
                          errors={"errors"}
                          handleChange={"scsac"}
                          name={item.name}
                          inputName={item.inputName}
                          placeholder={item.placeholder}
                        />
                      </div>
                    ))}

                    <div className="w-full mb-3">
                      <SelectDropdownII
                        name="Category"
                        options={"sdf"}
                        value={"fdgfe"}
                        inputName={"sdggsdg"}
                        errors={"sdsdvd"}
                        handleFilterChange={"sdfsdf"}
                      />
                    </div>
                    {inputItems.slice(2, 3).map((item, itemIndex) => (
                      <div className="mb-3 w-full " key={itemIndex}>
                        <FormInput
                          data={"formData"}
                          type={item.type}
                          errors={"errors"}
                          handleChange={"scsac"}
                          name={item.name}
                          inputName={item.inputName}
                          placeholder={item.placeholder}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="absolute bottom-5 flex justify-between w-full pr-[30px] ">
                    <div className=" min-w-[120px]">
                      <CancelButton
                      // onClick={handleCancel}
                      />
                    </div>
                    <div className=" min-w-[120px]">
                      <SubmitButton
                        text="Save"
                        //   submitting={submitting}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
