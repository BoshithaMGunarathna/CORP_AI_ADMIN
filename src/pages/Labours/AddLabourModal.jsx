import react from "react"
import { useState } from "react"
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
  Input,
  Select,
  Option,
  IconButton,
} from "@material-tailwind/react"
import { read } from "xlsx"

export const AddLabourModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    occupation: "",
    fullName: "",
    nic: "",
    mobileNumber1: "",
    mobileNumber2: "",
    address: "",
    email: "",
  })

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Labour form data:", formData)
    onClose()
  }

  const handleClose = () => {
    setFormData({
      occupation: "",
      fullName: "",
      nic: "",
      mobileNumber1: "",
      mobileNumber2: "",
      address: "",
      email: "",
    })
    onClose()
  }

  return (
    <Dialog open={isOpen} handler={handleClose} size="lg">
      <DialogHeader className="flex justify-between items-center px-6 py-4 border-b">
        <span className="text-lg font-medium">+ Add New Labour</span>
        <IconButton variant="text" onClick={handleClose}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </IconButton>
      </DialogHeader>
      <form onSubmit={handleSubmit}>
        <DialogBody className="space-y-6 max-h-[70vh] overflow-y-auto px-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Full Name</label>
              <Input
                placeholder="Type here..."
                value={formData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                required
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Occupation</label>
              <Input
                placeholder="Type here..."
                value={formData.occupation}
                onChange={(e) => handleInputChange("occupation", e.target.value)}
                required
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">NIC</label>
              <Select value={formData.nic} onChange={(value) => handleInputChange("nic", value)} className="w-full">
                <Option value="">Select...</Option>
                <Option value="nic1">NIC Option 1</Option>
                <Option value="nic2">NIC Option 2</Option>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Mobile Number 1</label>
              <Input
                placeholder="Select..."
                value={formData.mobileNumber1}
                onChange={(e) => handleInputChange("mobileNumber1", e.target.value)}
                required
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Mobile Number 2</label>
              <Input
                placeholder="Select..."
                value={formData.mobileNumber2}
                onChange={(e) => handleInputChange("mobileNumber2", e.target.value)}
                className="w-full"
              />
            </div>
          </div>
        </DialogBody>
        <DialogFooter className="flex justify-end px-6 pb-6">
          <Button type="submit" color="blue" className="bg-[#4880FF] hover:bg-[#5a7dff]">
            Add Labour
          </Button>
        </DialogFooter>
      </form>
    </Dialog>
  )
}
