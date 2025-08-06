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

export const AddSupplier = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);

  const initialFormData = {
    Code: "",
    Name: "",
    Email: "",
    Contact_No: "",
    Contact_No2: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = (data) => {
    const errors = {};
    if (!data.Code) errors.Code = "Code is required.";
    if (!data.Name) errors.Name = "Name is required.";
    if (!data.Contact_No) errors.Contact_No = "Contact Number is required.";
    return errors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validateErrors = validate(formData);
    setErrors(validateErrors);
    if (Object.keys(validateErrors).length === 0) {
      const result = await Swal.fire({
        text: "Are you sure you want to add the supplier?",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Save and Issue",
        cancelButtonText: "Cancel",
      });

      if (result.isConfirmed) {
        setSubmitting(true);
        try {
          await axiosClient.post(`/supplier`, formData);
          toast.success("Supplier added successfully!");
          setFormData(initialFormData);
          onClose();
        } catch (error) {
          toast.error("Failed to add Supplier. Please try again.");
          console.error(error);
        } finally {
          setSubmitting(false);
        }
      }
    } else {
      Swal.fire({
        icon: "error",
        text: "Please fill out all required fields.",
        allowOutsideClick: false,
      });
    }
  };

  const handleCancel = () => {
    setFormData(initialFormData);
    onClose();
  };

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
                <h2 className="text-xl font-semibold">Add Supplier</h2>
                <button onClick={onClose} className="text-black  text-[30px]">
                  &times;
                </button>
              </div>

              <div className="mt-4">
                <form onSubmit={handleSubmit}>
                  <div className="mt-6 ">
                    {supplierInputItems.slice(0, 6).map((item, itemIndex) => (
                      <div className="mb-3 w-full " key={itemIndex}>
                        <FormInput
                          data={formData}
                          type={item.type}
                          errors={errors}
                          handleChange={handleChange}
                          name={item.name}
                          inputName={item.name}
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
