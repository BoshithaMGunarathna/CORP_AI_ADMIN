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
import { IconButton, Tooltip } from "@material-tailwind/react";
import {
  EditNewIcon,
  PlusIcon,
  MinusIcon,
  ArrowDownIcon,
} from "../../utils/icons";
import DataTable from "react-data-table-component";
import { TABLE_HEADER_STYLES } from "../../utils/utils";

export const AddDamageNote = ({ isOpen, onClose }) => {
  const [page, setPage] = useState(1);

  const inputItems = [
    {
      name: "Damage Note id",
      inputName: "id",
      type: "text",
      placeholder: "Type here....",
    },
    {
      name: "Date",
      inputName: "Amount",
      type: "text",
      placeholder: "Type here....",
    },
    {
      name: "Reason",
      inputName: "reason",
      type: "text",
      placeholder: "Type here....",
    },
  ];

  const sampleItems = [
    {
      ID: "001",
      Name: "Lorem Ipsum",
      Cost: "1000.00",
      Qty: "2",
      Total_Cost: "1000.00",
    },
    {
      ID: "001",
      Name: "Lorem Ipsum",
      Cost: "1000.00",
      Qty: "2",
      Total_Cost: "1000.00",
    },
    {
      ID: "001",
      Name: "Lorem Ipsum",
      Cost: "1000.00",
      Qty: "2",
      Total_Cost: "1000.00",
    },
  ];

  const TABLE_DATA = [
    {
      name: "ID",
      selector: (row) => row.ID,
      wrap: false,
      maxWidth: "auto",
    },
    {
      name: "Name",
      selector: (row) => row.Name,
      wrap: false,
      maxWidth: "auto",
      sortable: true,
    },
    {
      name: "Cost",
      selector: (row) => row.Cost,
      wrap: false,
      maxWidth: "auto",
    },
    {
      name: "Qty",
      selector: (row) => row.Qty,
      wrap: false,
      maxWidth: "auto",
    },
    {
      name: "Total Cost",
      selector: (row) => row.Total_Cost,
      wrap: false,
      minWidth: "200px",
    },
    {
      name: "Action",
      cell: (row) => (
        <>
          <Tooltip content="Edit Item">
            <IconButton
              onClick={() => handleEditClick(row)}
              variant="text"
              className="mx-2 bg-white"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              <EditNewIcon />
            </IconButton>
          </Tooltip>
        </>
      ),
      minWidth: "100px",
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
              className="w-[800px] relative h-full bg-white shadow-xl p-4"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <div className="flex justify-between items-center border-b pb-2">
                <h2 className="text-xl font-semibold">Add New Damage Note</h2>
                <button onClick={onClose} className="text-black text-[30px]">
                  &times;
                </button>
              </div>

              <div className="mt-4">
                <form>
                  {page === 1 && (
                    <div className="max-h-[450px] overflow-y-auto">
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
                    </div>
                  )}

                  {page === 2 && (
                    <div className="max-h-[450px] overflow-y-auto pr-2">
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
                        <div className="mb-3 w-full">
                          <FormInput
                            data={"formData"}
                            type={"text"}
                            errors={"errors"}
                            handleChange={"handleChange"}
                            name={"Qty"}
                            inputName={"Qty"}
                            placeholder={""}
                          />
                        </div>
                        <div className="min-w-[120px] flex justify-end">
                          <SubmitButtonII name="Add Item" />
                        </div>
                        <div className="mt-10">
                          <DataTable
                            columns={TABLE_DATA}
                            data={sampleItems}
                            customStyles={TABLE_HEADER_STYLES}
                            className="mt-4"
                            pagination
                            paginationPerPage={10}
                            paginationRowsPerPageOptions={[10, 50, 100]}
                            noDataComponent={
                              <div className="text-center">
                                No data available
                              </div>
                            }
                          />
                        </div>
                      </>
                    </div>
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
