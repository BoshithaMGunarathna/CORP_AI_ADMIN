import React from "react"
import { useState } from "react"
import { Dialog, DialogHeader, DialogBody, DialogFooter, Button, Input, Select, Option } from "@material-tailwind/react"

export const AddItemModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    code: "",
    category: "",
    supplier: "",
    description: "",
    cost: "",
    realCost: "",
    sellingPrice: "",
    qtyType: "",
    qty: "",
    status: "active",
  })

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
   
    console.log("Form data:", formData)
    onClose()
  }

  const handleClose = () => {
    setFormData({
      code: "",
      category: "",
      supplier: "",
      description: "",
      cost: "",
      realCost: "",
      sellingPrice: "",
      qtyType: "",
      qty: "",
      status: "active",
    })
    onClose()
  }

  return (
    <Dialog
      open={isOpen}
      handler={handleClose}
      size="lg"
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
      placeholder=""
    >
      <DialogHeader
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        Add New Item
      </DialogHeader>
      <form onSubmit={handleSubmit}>
        <DialogBody
          className="space-y-4 max-h-[60vh] overflow-y-auto"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Code"
              value={formData.code}
              onChange={(e) => handleInputChange("code", e.target.value)}
              required
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              crossOrigin={undefined}
            />
            <Select
              label="Category"
              value={formData.category}
              onChange={(value) => handleInputChange("category", value)}
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              <Option value="category1">Category 1</Option>
              <Option value="category2">Category 2</Option>
            </Select>
            <Select
              label="Supplier"
              value={formData.supplier}
              onChange={(value) => handleInputChange("supplier", value)}
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              <Option value="supplier1">Supplier 1</Option>
              <Option value="supplier2">Supplier 2</Option>
            </Select>
            <Input
              label="Description"
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              required
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              crossOrigin={undefined}
            />
            <Input
              label="Cost"
              type="number"
              step="0.01"
              value={formData.cost}
              onChange={(e) => handleInputChange("cost", e.target.value)}
              required
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              crossOrigin={undefined}
            />
            <Input
              label="Real Cost"
              type="number"
              step="0.01"
              value={formData.realCost}
              onChange={(e) => handleInputChange("realCost", e.target.value)}
              required
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              crossOrigin={undefined}
            />
            <Input
              label="Selling Price"
              type="number"
              step="0.01"
              value={formData.sellingPrice}
              onChange={(e) => handleInputChange("sellingPrice", e.target.value)}
              required
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              crossOrigin={undefined}
            />
            <Select
              label="Qty Type"
              value={formData.qtyType}
              onChange={(value) => handleInputChange("qtyType", value)}
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              <Option value="pieces">Pieces</Option>
              <Option value="boxes">Boxes</Option>
              <Option value="kg">Kg</Option>
            </Select>
            <Input
              label="Quantity"
              type="number"
              value={formData.qty}
              onChange={(e) => handleInputChange("qty", e.target.value)}
              required
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              crossOrigin={undefined}
            />
            <Select
              label="Status"
              value={formData.status}
              onChange={(value) => handleInputChange("status", value)}
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              <Option value="active">Active</Option>
              <Option value="inactive">Inactive</Option>
            </Select>
          </div>
        </DialogBody>
        <DialogFooter
          className="space-x-2"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          <Button
            variant="text"
            color="red"
            onClick={handleClose}
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            color="green"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Add Item
          </Button>
        </DialogFooter>
      </form>
    </Dialog>
  )
}
