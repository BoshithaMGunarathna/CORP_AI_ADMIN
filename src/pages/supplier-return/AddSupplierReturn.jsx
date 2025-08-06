import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import { FormInput } from "../../components/global/FormInput";
import CancelButton from "../../components/global/CancelButton";
import SubmitButton from "../../components/global/SubmitButton";
import { SelectDropdownII } from "../../components/global/SelectDropdownII";
import NextButton from "../../components/global/NextButton";
import BackButton from "../../components/global/BackButton";
import SubmitButtonII from "../../components/global/SubmitButtonII";

export const AddSupplierReturn = ({ isOpen, onClose }) => {
  const [page, setPage] = useState(1);

  const inputItems = [
    {
      name: "Supplier*",
      inputName: "supplier",
      type: "text",
      placeholder: "Type here....",
    },
    {
      name: "Contact No*",
      inputName: "c_no",
      type: "text",
      placeholder: "Type here....",
    },
    {
      name: "Return Id*",
      inputName: "return_id",
      type: "text",
      placeholder: "Type here....",
    },
    {
      name: "Reason*",
      inputName: "reason",
      type: "text",
      placeholder: "Type here....",
    },
    {
      name: "Date*",
      inputName: "Amount",
      type: "text",
      placeholder: "Type here....",
    },
    {
      name: "Cost",
      inputName: "cost",
      type: "text",
      placeholder: "Type here....",
    },
    {
      name: "Add Quantity",
      inputName: "qty",
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
                <h2 className="text-xl font-semibold">
                  Add New Supplier Return
                </h2>
                <button onClick={onClose} className="text-black text-[30px]">
                  &times;
                </button>
              </div>

              <div className="mt-4">
                <form>
                  {page === 1 && (
                    <>
                      <div className="mt-6">
                        {inputItems.slice(0, 5).map((item, itemIndex) => (
                          <div className="mb-3 w-full" key={itemIndex}>
                            <FormInput
                              data={"formData"}
                              type={item.type}
                              errors={"errors"}
                              handleChange={"handleChange"}
                              name={item.name}
                              inputName={item.inputName}
                              placeholder={item.placeholder}
                            />
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {page === 2 && (
                    <>
                      <div className="text-[16px] font-medium mb-5 text-[#4880FF]">
                        Item Details
                      </div>
                      <div className="w-full mb-3">
                        <SelectDropdownII
                          name="Item"
                          options={"options"}
                          value={"value"}
                          inputName={"inputName"}
                          errors={"errors"}
                          handleFilterChange={"handleFilterChange"}
                        />
                      </div>

                      <div className="flex mt-5 text-[14px]">
                        <p className="w-[30%]">Item Code</p>
                        <p className="w-[70%] text-gray-500">Select Item</p>
                      </div>
                      <div className="flex mt-5 text-[14px]">
                        <p className="w-[30%]">Category</p>
                        <p className="w-[70%] text-gray-500">Select Item</p>
                      </div>
                      <div className="flex mt-5 text-[14px]">
                        <p className="w-[30%]">Selling Price</p>
                        <p className="w-[70%] text-gray-500">Select Item</p>
                      </div>
                      <div className="flex mt-5 text-[14px]">
                        <p className="w-[30%]">Quantity</p>
                        <p className="w-[70%] text-gray-500">Select Item</p>
                      </div>
                      <div className="mt-6">
                        {inputItems.slice(5, 7).map((item, itemIndex) => (
                          <div className="mb-3 w-full" key={itemIndex}>
                            <FormInput
                              data={"formData"}
                              type={item.type}
                              errors={"errors"}
                              handleChange={"handleChange"}
                              name={item.name}
                              inputName={item.inputName}
                              placeholder={item.placeholder}
                            />
                          </div>
                        ))}
                      </div>

<div className="min-w-[120px] flex justify-end">
<SubmitButtonII name="Add Item"/>
</div>
                      
                    </>
                  )}

                  {/* === Footer Buttons === */}
                  <div className="absolute bottom-5 flex justify-between w-full pr-[30px]">
                    {page === 1 ? (
                      <>
                        <div></div>
                        <div className=" min-w-[120px]">
                          <NextButton onClick={() => setPage(2)} />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="min-w-[120px]">
                          <BackButton onClick={() => setPage(1)} />
                        </div>
                        <div className="min-w-[120px]">
                          <SubmitButton text="Save" />
                        </div>
                      </>
                    )}
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
