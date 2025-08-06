import React from "react"
import { useState } from "react"
import { Dialog, DialogHeader, DialogBody, DialogFooter, Button, Input, Textarea } from "@material-tailwind/react"

export const AddOccupationModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    occupationName: "",
    description: "",
    dailyRate: "",
    hourlyRate: "",
  })

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Occupation form data:", formData)
    onClose()
  }

  const handleClose = () => {
    setFormData({
      occupationName: "",
      description: "",
      dailyRate: "",
      hourlyRate: "",
    })
    onClose()
  }

  return (
    <Dialog open={isOpen} handler={handleClose} size="md">
      <DialogHeader>Add New Occupation</DialogHeader>
      <form onSubmit={handleSubmit}>
        <DialogBody className="space-y-4">
          <Input
            label="Occupation Name"
            value={formData.occupationName}
            onChange={(e) => handleInputChange("occupationName", e.target.value)}
            required
          />
          <Textarea
            label="Description"
            value={formData.description}
            onChange={(e) => handleInputChange("description", e.target.value)}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Daily Rate"
              type="number"
              step="0.01"
              value={formData.dailyRate}
              onChange={(e) => handleInputChange("dailyRate", e.target.value)}
            />
            <Input
              label="Hourly Rate"
              type="number"
              step="0.01"
              value={formData.hourlyRate}
              onChange={(e) => handleInputChange("hourlyRate", e.target.value)}
            />
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="red" onClick={handleClose}>
            Cancel
          </Button>
          <Button type="submit" color="blue">
            Add Occupation
          </Button>
        </DialogFooter>
      </form>
    </Dialog>
  )
}
