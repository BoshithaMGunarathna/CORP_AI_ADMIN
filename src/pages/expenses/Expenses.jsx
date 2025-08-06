import React, { useState } from "react";
import AddItem from "../../components/global/AddItem";
import SearchInput from "../../components/global/SearchInput";
import DataTable from "react-data-table-component";
import { TABLE_HEADER_STYLES } from "../../utils/utils";
import SearchSelect from "../../components/global/SearchSelect";
import { AddExpense } from "./AddExpense";
import { AddCategory } from "./AddCategory";
import AddItemII from "../../components/global/AddItemII";

export const Expenses = () => {
  const [addExpenseModal, setAddExpenseModal] = useState(false);
  const handleExpensesOpenModal = () => setAddExpenseModal(true);
  const [categoryModal, setCategoryModal] = useState(false);
  const handleCategoryOpenModal = () => setCategoryModal(true);

  const TABLE_DATA = [
    {
      name: "Id",
      selector: (row) => row.id,
      wrap: false,
      minWidth: "200px",
      cellStyle: {
        whiteSpace: "normal",
        wordBreak: "break-word",
      },
      sortable: true,
    },
    {
      name: "Date",
      selector: (row) => row.date,
      wrap: false,
      maxWidth: "auto",
    },
    {
      name: "Category",
      selector: (row) => row.category,
      wrap: false,
      minWidth: "200px",
    },

    {
      name: "Credit Amount",
      selector: (row) => row.credit,
      wrap: false,
      maxWidth: "auto",
      right: true,
    },
    {
      name: "Debit Amount",
      selector: (row) => row.debit,
      wrap: false,
      maxWidth: "auto",
      right: true,
    },
  ];

  const sampleData = [
    {
      id: 1,
      date: "2020-02-21",
      category: "Category 01",
      description: "test description",
      credit: "1200.00",
      debit: "200.00",
    },
    {
      id: 2,
      date: "2020-02-21",
      category: "Category 02",
      description: "test description",
      credit: "1200.00",
      debit: "200.00",
    },
    {
      id: 3,
      date: "2020-02-21",
      category: "Category 03",
      description: "test description",
      credit: "1200.00",
      debit: "200.00",
    },
  ];

  const status = [
    {
      value: 1,
      label: "SUP001",
    },
    {
      value: 2,
      label: "SUP002",
    },
  ];
  return (
    <>
      <div className="flex justify-between pt-8 font-nunito">
        <div className="flex">
          {/* <a
            href="#"
            className=" flex items-center text-[16px] text-[#737373] font-semibold"
          >
            Job <NextIcon />{" "}
          </a>{" "} */}
          <span className="text-[24px] text-[#000000] font-semibold">
            Expenses
          </span>
        </div>
        <div className="flex gap-5">
          <AddItemII
            handleOpenModal={handleCategoryOpenModal}
            name="Categories"
          />
          <AddItem
            handleOpenModal={handleExpensesOpenModal}
            name="Add Expenses"
          />
        </div>
      </div>

      <section className="mt-4 hidden md:block">
        <div className="w-full rounded-lg bg-white px-[25px] pb-[40px] pt-[15px]">
          <div className="md:justify-left mt-4 flex flex-col md:flex-row">
            <SearchInput
              name="Start Date"
              type="date"
              //   searchQuery={searchQuery}
              //   handleSearchInputChange={handleSearchInputChange}
            />
            <SearchInput
              name="End Date"
              type="date"
              //   searchQuery={searchQuery}
              //   handleSearchInputChange={handleSearchInputChange}
            />
            <SearchSelect name="Category" options={status} />
            <SearchSelect name="Type" options={status} />
          </div>
          <div className="mt-10">
            <DataTable
              columns={TABLE_DATA}
              data={sampleData}
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
      <AddExpense
        isOpen={addExpenseModal}
        onClose={() => setAddExpenseModal(false)}
      />
      <AddCategory
        isOpen={categoryModal}
        onClose={() => setCategoryModal(false)}
      />
    </>
  );
};

export default Expenses;
