import React from "react";
import { useState } from "react";
import { IconButton, Tooltip } from "@material-tailwind/react";
import {
  EditNewIcon,
  PlusIcon,
  MinusIcon,
  ArrowDownIcon,
} from "../../utils/icons";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import DataTable from "react-data-table-component";
import { TABLE_HEADER_STYLES } from "../../utils/utils";
import SearchInput from "../../components/global/SearchInput";
import AddItem from "../../components/global/AddItem";
import MobilePagination from "../../components/global/MobilePagination";
import MobileItemRow from "../../components/global/MobileItemRow";
import SearchSelect from "../../components/global/SearchSelect";
import { AddItemModal } from "./AddItemModal";
import AddItemII from "../../components/global/AddItemII";
import { ItemCategoryManager } from "./ItemCategoryManager";

export const ItemDetails = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSupplier, setSelectedSupplier] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedQtyType, setSelectedQtyType] = useState("");
  const handleOpenModal = () => setShowAddModal(true);

  const [categoryModal, setCategoryModal] = useState(false);
  const handleCategoryOpenModal = () => setCategoryModal(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [expandedItemIndex, setExpandedItemIndex] = useState(null);

  const navigate = useNavigate();

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const handleEditClick = (row) => {
    console.log("Edit item:", row);
  };

  //  table columns
  const TABLE_DATA = [
    {
      name: "ID",
      selector: (row) => row.ID,
      wrap: false,
      minWidth: "80px",
      sortable: true,
    },
    {
      name: "Code",
      selector: (row) => row.Code,
      wrap: false,
      minWidth: "120px",
      sortable: true,
    },
    {
      name: "Category",
      selector: (row) => row.Category,
      wrap: false,
      minWidth: "150px",
    },
    {
      name: "Supplier",
      selector: (row) => row.Supplier,
      wrap: false,
      minWidth: "150px",
    },
    {
      name: "Description",
      selector: (row) => row.Description,
      wrap: false,
      minWidth: "200px",
    },
    {
      name: "Cost",
      selector: (row) => row.Cost,
      wrap: false,
      minWidth: "120px",
      right: true,
    },
    {
      name: "Real Cost",
      selector: (row) => row.RealCost,
      wrap: false,
      minWidth: "120px",
      right: true,
    },
    {
      name: "Selling Price",
      selector: (row) => row.SellingPrice,
      wrap: false,
      minWidth: "140px",
      right: true,
    },
    {
      name: "Qty type",
      selector: (row) => row.QtyType,
      wrap: false,
      minWidth: "120px",
    },
    {
      name: "Qty",
      selector: (row) => row.Qty,
      wrap: false,
      minWidth: "80px",
      right: true,
    },
    {
      name: "Status",
      selector: (row) => row.Status,
      wrap: false,
      minWidth: "120px",
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

  // Mobile version row expand
  const handleExpandClick = (index) => {
    if (expandedItemIndex === index) {
      setExpandedItemIndex(null);
    } else {
      setExpandedItemIndex(index);
    }
  };

  // Sample item data
  const sampleItems = [
    {
      ID: "001",
      Code: "425973",
      Category: "Lorem Ipsum",
      Supplier: "Lorem Ipsum",
      Description: "Lorem Ipsum",
      Cost: "1000.00",
      RealCost: "2000.00",
      SellingPrice: "2000.00",
      QtyType: "Lorem Ipsum",
      Qty: "2",
      Status: "Lorem Ipsum",
    },
    {
      ID: "001",
      Code: "425973",
      Category: "Lorem Ipsum",
      Supplier: "Lorem Ipsum",
      Description: "Lorem Ipsum",
      Cost: "1000.00",
      RealCost: "2000.00",
      SellingPrice: "2000.00",
      QtyType: "Lorem Ipsum",
      Qty: "2",
      Status: "Lorem Ipsum",
    },
    {
      ID: "001",
      Code: "425973",
      Category: "Lorem Ipsum",
      Supplier: "Lorem Ipsum",
      Description: "Lorem Ipsum",
      Cost: "1000.00",
      RealCost: "2000.00",
      SellingPrice: "2000.00",
      QtyType: "Lorem Ipsum",
      Qty: "2",
      Status: "Lorem Ipsum",
    },
    {
      ID: "001",
      Code: "425973",
      Category: "Lorem Ipsum",
      Supplier: "Lorem Ipsum",
      Description: "Lorem Ipsum",
      Cost: "1000.00",
      RealCost: "2000.00",
      SellingPrice: "2000.00",
      QtyType: "Lorem Ipsum",
      Qty: "2",
      Status: "Lorem Ipsum",
    },
    {
      ID: "001",
      Code: "425973",
      Category: "Lorem Ipsum",
      Supplier: "Lorem Ipsum",
      Description: "Lorem Ipsum",
      Cost: "1000.00",
      RealCost: "2000.00",
      SellingPrice: "2000.00",
      QtyType: "Lorem Ipsum",
      Qty: "2",
      Status: "Lorem Ipsum",
    },
  ];

  // Filter
  const categoryOptions = [
    { value: "", label: "Select..." },
    { value: "category1", label: "Category 1" },
    { value: "category2", label: "Category 2" },
  ];

  const supplierOptions = [
    { value: "", label: "Select..." },
    { value: "supplier1", label: "Supplier 1" },
    { value: "supplier2", label: "Supplier 2" },
  ];

  const statusOptions = [
    { value: "", label: "Select..." },
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
  ];

  const qtyTypeOptions = [
    { value: "", label: "Select..." },
    { value: "pieces", label: "Pieces" },
    { value: "boxes", label: "Boxes" },
  ];

  return (
    <>
      <div className="flex justify-between pt-8 font-nunito">
        <div className="flex">
          <span className="text-[24px] text-[#000000] font-semibold">
            Item Details
          </span>
        </div>
        <div className="flex gap-5">
          <AddItemII
            handleOpenModal={handleCategoryOpenModal}
            name="Categories"
          />
          <AddItem handleOpenModal={handleOpenModal} name="Add Item" />
        </div>
      </div>

      {/* Desktop  */}
      <section className="mt-4 hidden md:block">
        <div className="w-full rounded-lg bg-white px-[25px] pb-[40px] pt-[15px]">
          <div className="md:justify-left mt-4 flex flex-col md:flex-row gap-4">
            <SearchSelect
              name="Category"
              options={categoryOptions}
              value={selectedCategory}
              handleFilterChange={setSelectedCategory}
            />
            <SearchSelect
              name="Supplier"
              options={supplierOptions}
              value={selectedSupplier}
              handleFilterChange={setSelectedSupplier}
            />
            <SearchSelect
              name="Status"
              options={statusOptions}
              value={selectedStatus}
              handleFilterChange={setSelectedStatus}
            />
            <SearchSelect
              name="Qty Type"
              options={qtyTypeOptions}
              value={selectedQtyType}
              handleFilterChange={setSelectedQtyType}
            />
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
                <div className="text-center">No data available</div>
              }
            />
          </div>
        </div>
      </section>

      {/* Mobile  */}
      <section className="mt-5 w-full rounded-[10px] bg-white px-[3%] py-3 md:hidden">
        <div className="flex justify-end">
          <AddItem handleOpenModal={handleOpenModal} name="+ Add Item" />
        </div>

        {/* Mobile filters */}
        <div className="mt-3 grid grid-cols-2 gap-2">
          <SearchSelect
            name="Category"
            options={categoryOptions}
            value={selectedCategory}
            handleFilterChange={setSelectedCategory}
          />
          <SearchSelect
            name="Supplier"
            options={supplierOptions}
            value={selectedSupplier}
            handleFilterChange={setSelectedSupplier}
          />
          <SearchSelect
            name="Status"
            options={statusOptions}
            value={selectedStatus}
            handleFilterChange={setSelectedStatus}
          />
          <SearchSelect
            name="Qty Type"
            options={qtyTypeOptions}
            value={selectedQtyType}
            handleFilterChange={setSelectedQtyType}
          />
        </div>

        <div className="mt-3 flex flex-col">
          <SearchInput
            name="Search Items"
            searchQuery={searchQuery}
            type="text"
            handleSearchInputChange={handleSearchInputChange}
          />
        </div>

        <div className="w-full pt-5">
          <div className="font-poppins flex w-full items-center gap-2 bg-[#769EFF] bg-opacity-30 px-2 py-2 text-[12px] font-medium leading-[18px] text-[#10275E]">
            <ArrowDownIcon />
            Item Description
          </div>
          {sampleItems
            .slice((currentPage - 1) * 10, currentPage * 10)
            .map((item, index) => (
              <div key={item.ID + index}>
                <div
                  className="flex w-full items-center border-b border-[#64728C] border-opacity-10 px-2 py-2"
                  onClick={() => handleExpandClick(index)}
                >
                  <span className="mr-3 flex aspect-square w-[14px] items-center justify-center rounded-full border border-[#64728C]">
                    {expandedItemIndex === index ? (
                      <MinusIcon width={"8px"} />
                    ) : (
                      <PlusIcon width={"8px"} color={"#64728C"} />
                    )}
                  </span>
                  <span className="font-poppins text-[12px] font-medium leading-[18px] text-[#64728C]">
                    {item.Description}
                  </span>
                </div>
                {expandedItemIndex === index && (
                  <div className="w-full bg-[#D9D9D9] bg-opacity-20 pl-[35px]">
                    <MobileItemRow label="ID" value={item.ID} />
                    <MobileItemRow label="Code" value={item.Code} />
                    <MobileItemRow label="Category" value={item.Category} />
                    <MobileItemRow label="Supplier" value={item.Supplier} />
                    <MobileItemRow label="Cost" value={item.Cost} />
                    <MobileItemRow label="Real Cost" value={item.RealCost} />
                    <MobileItemRow
                      label="Selling Price"
                      value={item.SellingPrice}
                    />
                    <MobileItemRow label="Qty Type" value={item.QtyType} />
                    <MobileItemRow label="Qty" value={item.Qty} />
                    <MobileItemRow label="Status" value={item.Status} />
                  </div>
                )}
              </div>
            ))}
        </div>

        {/* Pagination for Mobile  */}
        <MobilePagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          items={sampleItems}
        />
      </section>

      <AddItemModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
      />
      <ItemCategoryManager
              isOpen={categoryModal}
              onClose={() => setCategoryModal(false)}
            />
    </>
  );
};
