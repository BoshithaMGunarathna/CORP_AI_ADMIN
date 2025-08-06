"use client"

import { useState } from "react"
import { IconButton, Tooltip } from "@material-tailwind/react"
import { EditNewIcon, PlusIcon, MinusIcon, ArrowDownIcon } from "../../utils/icons"
import { useNavigate } from "react-router-dom"
import "react-toastify/dist/ReactToastify.css"
import DataTable from "react-data-table-component"
import { TABLE_HEADER_STYLES } from "../../utils/utils"
import SearchInput from "../../components/global/SearchInput"
import AddItem from "../../components/global/AddItem"
import MobilePagination from "../../components/global/MobilePagination"
import MobileItemRow from "../../components/global/MobileItemRow"
import SearchSelect from "../../components/global/SearchSelect"

export const StockCard = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [showAddModal, setShowAddModal] = useState(false)
  const [selectedItem, setSelectedItem] = useState("")
  const [selectedType, setSelectedType] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const handleOpenModal = () => setShowAddModal(true)

  const [currentPage, setCurrentPage] = useState(1)
  const [expandedItemIndex, setExpandedItemIndex] = useState(null)

  const navigate = useNavigate()

  // Handler for search input changes
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value)
  }

  // Handler for edit click
  const handleEditClick = (row) => {
    console.log("Edit Stock:", row)
  }

  // Handler for date changes
  const handleStartDateChange = (event) => {
    setStartDate(event.target.value)
  }

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value)
  }

  // Creating the table columns
  const TABLE_DATA = [
    {
      name: "ID",
      selector: (row) => row.ID,
      wrap: false,
      minWidth: "80px",
      sortable: true,
    },
    {
      name: "Item",
      selector: (row) => row.Item,
      wrap: false,
      minWidth: "150px",
    },
    {
      name: "Date Time",
      selector: (row) => row.DateTime,
      wrap: false,
      minWidth: "150px",
    },
    {
      name: "Transaction Type",
      selector: (row) => row.TransactionType,
      wrap: false,
      minWidth: "150px",
    },
    {
      name: "Transaction ID",
      selector: (row) => row.TransactionID,
      wrap: false,
      minWidth: "150px",
    },
    {
      name: "Last GRN Cost",
      selector: (row) => row.LastGRNCost,
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
      minWidth: "120px",
      right: true,
    },
    {
      name: "In Qty",
      selector: (row) => row.InQty,
      wrap: false,
      minWidth: "100px",
      right: true,
    },
    {
      name: "Out Qty",
      selector: (row) => row.OutQty,
      wrap: false,
      minWidth: "100px",
      right: true,
    },
    {
      name: "Stock In Hand",
      selector: (row) => row.StockInHand,
      wrap: false,
      minWidth: "120px",
      right: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <>
          <Tooltip content="Edit Stock">
            <IconButton
              onClick={() => handleEditClick(row)}
              variant="text"
              className="mx-2 bg-white"
              placeholder=""
              onPointerEnterCapture={() => { }}
              onPointerLeaveCapture={() => { }}
            >
              <EditNewIcon />
            </IconButton>
          </Tooltip>
        </>
      ),
      minWidth: "100px",
    },
  ]

  // Mobile version row expand
  const handleExpandClick = (index) => {
    if (expandedItemIndex === index) {
      setExpandedItemIndex(null)
    } else {
      setExpandedItemIndex(index)
    }
  }

  // Sample data with new structure
  const sampleStock = [
    {
      ID: "001",
      Item: "Laptop Dell XPS 15",
      DateTime: "2023-05-15 10:30",
      TransactionType: "Purchase",
      TransactionID: "TRX-1001",
      LastGRNCost: "1200.00",
      RealCost: "1250.00",
      SellingPrice: "1500.00",
      InQty: "10",
      OutQty: "0",
      StockInHand: "10",
    },
    {
      ID: "002",
      Item: "Wireless Mouse",
      DateTime: "2023-05-16 14:15",
      TransactionType: "Sale",
      TransactionID: "TRX-1002",
      LastGRNCost: "15.00",
      RealCost: "15.00",
      SellingPrice: "25.00",
      InQty: "0",
      OutQty: "5",
      StockInHand: "25",
    },
    {
      ID: "003",
      Item: "Keyboard Mechanical",
      DateTime: "2023-05-17 09:45",
      TransactionType: "Purchase",
      TransactionID: "TRX-1003",
      LastGRNCost: "50.00",
      RealCost: "55.00",
      SellingPrice: "80.00",
      InQty: "15",
      OutQty: "0",
      StockInHand: "15",
    },
    {
      ID: "004",
      Item: "Monitor 27\" 4K",
      DateTime: "2023-05-18 11:20",
      TransactionType: "Return",
      TransactionID: "TRX-1004",
      LastGRNCost: "350.00",
      RealCost: "350.00",
      SellingPrice: "450.00",
      InQty: "2",
      OutQty: "0",
      StockInHand: "7",
    },
    {
      ID: "005",
      Item: "USB-C Cable",
      DateTime: "2023-05-19 16:10",
      TransactionType: "Sale",
      TransactionID: "TRX-1005",
      LastGRNCost: "8.00",
      RealCost: "8.00",
      SellingPrice: "15.00",
      InQty: "0",
      OutQty: "12",
      StockInHand: "38",
    },
  ]

  // Filter options
  const itemOptions = [
    { value: "", label: "Select..." },
    { value: "Laptop Dell XPS 15", label: "Laptop Dell XPS 15" },
    { value: "Wireless Mouse", label: "Wireless Mouse" },
    { value: "Keyboard Mechanical", label: "Keyboard Mechanical" },
  ]

  //   const typeOptions = [
  //     { value: "", label: "Select..." },
  //     { value: "Purchase", label: "Purchase" },
  //     { value: "Sale", label: "Sale" },
  //     { value: "Return", label: "Return" },
  //   ]

  return (
    <>
      <div className="flex justify-between pt-8 font-nunito">
        <div className="flex">
          <span className="text-[24px] text-[#000000] font-semibold">Stock Card</span>
        </div>
      </div>

      {/* Desktop version */}
      <section className="mt-4 hidden md:block">
        <div className="w-full rounded-lg bg-white px-[25px] pb-[40px] pt-[15px]">
          {/* Filter dropdowns */}
          <div className="md:justify-left mt-4 flex flex-col md:flex-row gap-3">
            <SearchSelect
              name="Item"
              options={itemOptions}
              value={selectedItem}
              handleFilterChange={setSelectedItem}
            />
            {/* <SearchSelect
              name="Transaction Type"
              options={typeOptions}
              value={selectedType}
              handleFilterChange={setSelectedType}
            /> */}
            <SearchInput
              name="Start Date"
              type="date"
            //  searchQuery={searchQuery}
            //  handleSearchInputChange={handleSearchInputChange}
            />
            <SearchInput
              name="End Date"
              type="date"
            //  searchQuery={searchQuery}
            //  handleSearchInputChange={handleSearchInputChange}
            />
          </div>

          <div className="mt-10">
            <DataTable
              columns={TABLE_DATA}
              data={sampleStock}
              customStyles={TABLE_HEADER_STYLES}
              className="mt-4"
              pagination
              paginationPerPage={10}
              paginationRowsPerPageOptions={[10, 50, 100]}
              noDataComponent={<div className="text-center">No data available</div>}
            />
          </div>
        </div>
      </section>

      {/* Mobile version */}
      <section className="mt-5 w-full rounded-[10px] bg-white px-[3%] py-3 md:hidden">
        <div className="flex justify-end">
          <AddItem handleOpenModal={handleOpenModal} name="+ Add Stock" />
        </div>

        {/* Mobile filters */}
        <div className="mt-3 grid grid-cols-2 gap-2">
          <SearchSelect
            name="Item"
            options={itemOptions}
            value={selectedItem}
            handleFilterChange={setSelectedItem}
          />
          {/* <SearchSelect
            name="Type"
            options={typeOptions}
            value={selectedType}
            handleFilterChange={setSelectedType}
          /> */}
        </div>

        {/* Mobile date filters */}
        <div className="mt-3 grid grid-cols-2 gap-2">
          <SearchInput
            name="Start Date"
            type="date"
          //  searchQuery={searchQuery}
          //  handleSearchInputChange={handleSearchInputChange}
          />
          <SearchInput
            name="End Date"
            type="date"
          //  searchQuery={searchQuery}
          //  handleSearchInputChange={handleSearchInputChange}
          />
        </div>

        <div className="mt-3 flex flex-col">
          <SearchInput
            name="Search Stock"
            searchQuery={searchQuery}
            type="text"
            handleSearchInputChange={handleSearchInputChange}
          />
        </div>

        <div className="w-full pt-5">
          <div className="font-poppins flex w-full items-center gap-2 bg-[#4F46E5] bg-opacity-30 px-2 py-2 text-[12px] font-medium leading-[18px] text-[#10275E]">
            <ArrowDownIcon />
            Stock Details
          </div>
          {sampleStock.slice((currentPage - 1) * 10, currentPage * 10).map((stock, index) => (
            <div key={stock.ID + index}>
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
                  {stock.Item} - {stock.TransactionID}
                </span>
              </div>
              {expandedItemIndex === index && (
                <div className="w-full bg-[#D9D9D9] bg-opacity-20 pl-[35px]">
                  <MobileItemRow label="ID" value={stock.ID} />
                  <MobileItemRow label="Item" value={stock.Item} />
                  <MobileItemRow label="Date Time" value={stock.DateTime} />
                  <MobileItemRow label="Transaction Type" value={stock.TransactionType} />
                  <MobileItemRow label="Transaction ID" value={stock.TransactionID} />
                  <MobileItemRow label="Last GRN Cost" value={stock.LastGRNCost} />
                  <MobileItemRow label="Real Cost" value={stock.RealCost} />
                  <MobileItemRow label="Selling Price" value={stock.SellingPrice} />
                  <MobileItemRow label="In Qty" value={stock.InQty} />
                  <MobileItemRow label="Out Qty" value={stock.OutQty} />
                  <MobileItemRow label="Stock In Hand" value={stock.StockInHand} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Pagination for Mobile version */}
        <MobilePagination currentPage={currentPage} setCurrentPage={setCurrentPage} items={sampleStock} />
      </section>
    </>
  )
}