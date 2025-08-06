import React from "react"
import { useState } from "react"
import { IconButton, Tooltip } from "@material-tailwind/react"
import { PlusCircleIcon, PlusIcon, MinusIcon, ArrowDownIcon } from "../../utils/icons"
import { useNavigate } from "react-router-dom"
import "react-toastify/dist/ReactToastify.css"
import DataTable from "react-data-table-component"
import { TABLE_HEADER_STYLES } from "../../utils/utils"
import SearchInput from "../../components/global/SearchInput"
import MobilePagination from "../../components/global/MobilePagination"
import MobileItemRow from "../../components/global/MobileItemRow"
import { AddLabourModal } from "./AddLabourModal"
import { AddOccupationModal } from "./AddOccupationModal"

export const Labours = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [showAddLabourModal, setShowAddLabourModal] = useState(false)
  const [showAddOccupationModal, setShowAddOccupationModal] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [expandedLabourIndex, setExpandedLabourIndex] = useState(null)

  const navigate = useNavigate()

  // Handler for search input changes
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value)
  }

  // Handler for edit click
  const handleEditClick = (row) => {
    console.log("Edit labour:", row)
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
      name: "Occupation",
      selector: (row) => row.Occupation,
      wrap: false,
      minWidth: "150px",
      sortable: true,
    },
    {
      name: "Full Name",
      selector: (row) => row.FullName,
      wrap: false,
      minWidth: "200px",
    },
    {
      name: "NIC",
      selector: (row) => row.NIC,
      wrap: false,
      minWidth: "180px",
    },
    {
      name: "Mobile Number 1",
      selector: (row) => row.MobileNumber1,
      wrap: false,
      minWidth: "150px",
    },
    {
      name: "Mobile Number 2",
      selector: (row) => row.MobileNumber2,
      wrap: false,
      minWidth: "150px",
    },
    {
      name: "Action",
      cell: (row) => (
        <Tooltip content="Add Labour">
          <IconButton onClick={() => handleEditClick(row)} variant="text" className="mx-2 bg-white">
            <div className="w-6 h-6  rounded-full flex items-center justify-center">
              <PlusCircleIcon />
            </div>
          </IconButton>
        </Tooltip>
      ),
      minWidth: "100px",
    },
  ]

  // Mobile version row expand
  const handleExpandClick = (index) => {
    if (expandedLabourIndex === index) {
      setExpandedLabourIndex(null)
    } else {
      setExpandedLabourIndex(index)
    }
  }

  // Sample labour data matching the image
  const sampleLabours = [
    {
      ID: "001",
      Occupation: "Worker",
      FullName: "Janith Sameera",
      NIC: "2022144554565",
      MobileNumber1: "0711234567",
      MobileNumber2: "0711234567",
    },
    {
      ID: "001",
      Occupation: "Worker",
      FullName: "Janith Sameera",
      NIC: "2022144554565",
      MobileNumber1: "0711234567",
      MobileNumber2: "0711234567",
    },
    {
      ID: "001",
      Occupation: "Worker",
      FullName: "Janith Sameera",
      NIC: "2022144554565",
      MobileNumber1: "0711234567",
      MobileNumber2: "0711234567",
    },
  ]

  return (
    <>
      <div className="flex justify-between pt-8 font-nunito">
        <div className="flex">
          <span className="text-[24px] text-[#000000] font-semibold">Labours</span>
        </div>
      </div>

      {/* Desktop version */}
      <section className="mt-4 hidden md:block">
        <div className="w-full rounded-lg bg-white px-[25px] pb-[40px] pt-[15px]">

          <div className="mt-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-700">Search</span>
              <div className="w-64">
                <SearchInput
                  name="Search..."
                  type="text"
                  searchQuery={searchQuery}
                  handleSearchInputChange={handleSearchInputChange}
                />
              </div>
            </div>
            <div className="flex gap-3">
              <button
                className="bg-[#769EFF] hover:bg-[#5a7dff] text-white px-4 py-2 rounded-md text-sm font-medium"
                onClick={() => setShowAddOccupationModal(true)}
              >
                + Add Occupation
              </button>
              <button
                className="bg-[#769EFF] hover:bg-[#5a7dff] text-white px-4 py-2 rounded-md text-sm font-medium"
                onClick={() => setShowAddLabourModal(true)}
              >
                + Add Labour
              </button>
            </div>
          </div>

          <div className="mt-10">
            <DataTable
              columns={TABLE_DATA}
              data={sampleLabours}
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
        <div className="flex justify-end gap-2">
          <button
            className="bg-[#769EFF] hover:bg-[#5a7dff] text-white px-3 py-2 rounded-md text-xs font-medium"
            onClick={() => setShowAddOccupationModal(true)}
          >
            + Add Occupation
          </button>
          <button
            className="bg-[#769EFF] hover:bg-[#5a7dff] text-white px-3 py-2 rounded-md text-xs font-medium"
            onClick={() => setShowAddLabourModal(true)}
          >
            + Add Labour
          </button>
        </div>

        <div className="mt-3 flex flex-col">
          <SearchInput
            name="Search Labours"
            searchQuery={searchQuery}
            handleSearchInputChange={handleSearchInputChange}
          />
        </div>

        <div className="w-full pt-5">
          <div className="font-poppins flex w-full items-center gap-2 bg-[#769EFF] bg-opacity-30 px-2 py-2 text-[12px] font-medium leading-[18px] text-[#10275E]">
            <ArrowDownIcon />
            Labour Name
          </div>
          {sampleLabours.slice((currentPage - 1) * 10, currentPage * 10).map((labour, index) => (
            <div key={labour.ID + index}>
              <div
                className="flex w-full items-center border-b border-[#64728C] border-opacity-10 px-2 py-2"
                onClick={() => handleExpandClick(index)}
              >
                <span className="mr-3 flex aspect-square w-[14px] items-center justify-center rounded-full border border-[#64728C]">
                  {expandedLabourIndex === index ? (
                    <MinusIcon width={"8px"} />
                  ) : (
                    <PlusIcon width={"8px"} color={"#64728C"} />
                  )}
                </span>
                <span className="font-poppins text-[12px] font-medium leading-[18px] text-[#64728C]">
                  {labour.FullName}
                </span>
              </div>
              {expandedLabourIndex === index && (
                <div className="w-full bg-[#D9D9D9] bg-opacity-20 pl-[35px]">
                  <MobileItemRow label="ID" value={labour.ID} />
                  <MobileItemRow label="Occupation" value={labour.Occupation} />
                  <MobileItemRow label="Full Name" value={labour.FullName} />
                  <MobileItemRow label="NIC" value={labour.NIC} />
                  <MobileItemRow label="Mobile Number 1" value={labour.MobileNumber1} />
                  <MobileItemRow label="Mobile Number 2" value={labour.MobileNumber2} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Pagination for Mobile version */}
        <MobilePagination currentPage={currentPage} setCurrentPage={setCurrentPage} items={sampleLabours} />
      </section>

      <AddLabourModal isOpen={showAddLabourModal} onClose={() => setShowAddLabourModal(false)} />
      <AddOccupationModal isOpen={showAddOccupationModal} onClose={() => setShowAddOccupationModal(false)} />
    </>
  )
}
