import { useState } from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"
import { PrintIcon } from "../../utils/icons"
import SearchInput from "../../components/global/SearchInput"
import DataTable from "react-data-table-component"
import { TABLE_HEADER_STYLES } from "../../utils/utils"
import AddPage from "../../components/global/AddPage"

export const PLReport = () => {
  const [tabIndex, setTabIndex] = useState(0)
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value)
  }

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value)
  }

  // dummy data for the summary
  const summaryData = {
    totalInvoiceProfit: 1250000.00,
    totalExpensesCredit: 250000.00,
    totalExpensesDebit: 180000.00,
    damageTotal: 50000.00,
    totalProfitLoss: 1250000.00 - 250000.00 - 180000.00 - 50000.00
  }

  // dummy invoice data
  const invoiceData = [
    {
      id: "INV001",
      customerName: "ABC Company Ltd",
      date: "2024-01-15",
      netAmount: 150000.00,
      invoiceCost: 120000.00,
      invoiceProfit: 30000.00
    },
    {
      id: "INV002",
      customerName: "XYZ Corporation",
      date: "2024-01-18",
      netAmount: 280000.00,
      invoiceCost: 200000.00,
      invoiceProfit: 80000.00
    },
    {
      id: "INV003",
      customerName: "DEF Industries",
      date: "2024-01-20",
      netAmount: 95000.00,
      invoiceCost: 70000.00,
      invoiceProfit: 25000.00
    },
    {
      id: "INV004",
      customerName: "GHI Solutions",
      date: "2024-01-22",
      netAmount: 320000.00,
      invoiceCost: 250000.00,
      invoiceProfit: 70000.00
    },
    {
      id: "INV005",
      customerName: "JKL Enterprises",
      date: "2024-01-25",
      netAmount: 180000.00,
      invoiceCost: 140000.00,
      invoiceProfit: 40000.00
    }
  ]

  const invoiceTotals = {
    totalInvoiceAmount: invoiceData.reduce((sum, item) => sum + item.netAmount, 0),
    totalInvoiceCost: invoiceData.reduce((sum, item) => sum + item.invoiceCost, 0),
    totalProfit: invoiceData.reduce((sum, item) => sum + item.invoiceProfit, 0)
  }

  // dummy expenses data
  const expensesData = [
    {
      id: "EXP001",
      date: "2024-01-10",
      category: "Office Supplies",
      description: "Stationery and printing materials",
      amount: 15000.00
    },
    {
      id: "EXP002",
      date: "2024-01-12",
      category: "Travel",
      description: "Business trip to Colombo",
      amount: 25000.00
    },
    {
      id: "EXP003",
      date: "2024-01-14",
      category: "Utilities",
      description: "Monthly electricity bill",
      amount: 18000.00
    },
    {
      id: "EXP004",
      date: "2024-01-16",
      category: "Marketing",
      description: "Social media advertising",
      amount: 30000.00
    },
    {
      id: "EXP005",
      date: "2024-01-18",
      category: "Equipment",
      description: "Office equipment maintenance",
      amount: 12000.00
    }
  ]

  const totalExpensesCredit = expensesData.reduce((sum, item) => sum + item.amount, 0)

  const creditExpensesData = [
    {
      id: "CE001",
      date: "2024-01-11",
      category: "Rent",
      description: "Monthly office rent payment",
      amount: 75000.00
    },
    {
      id: "CE002",
      date: "2024-01-13",
      category: "Salaries",
      description: "Staff salary payments",
      amount: 150000.00
    },
    {
      id: "CE003",
      date: "2024-01-15",
      category: "Insurance",
      description: "Business insurance premium",
      amount: 25000.00
    },
    {
      id: "CE004",
      date: "2024-01-17",
      category: "Maintenance",
      description: "Building maintenance costs",
      amount: 20000.00
    },
    {
      id: "CE005",
      date: "2024-01-19",
      category: "Software",
      description: "Monthly software subscriptions",
      amount: 12000.00
    }
  ]

  const totalCreditExpenses = creditExpensesData.reduce((sum, item) => sum + item.amount, 0)

  // dummy damage data
  const damageData = [
    {
      id: "DN001",
      date: "2024-01-08",
      reason: "Equipment malfunction - printer damage",
      totalCost: 15000.00
    },
    {
      id: "DN002",
      date: "2024-01-14",
      reason: "Vehicle accident - minor repairs",
      totalCost: 25000.00
    },
    {
      id: "DN003",
      date: "2024-01-19",
      reason: "Water damage to office documents",
      totalCost: 5000.00
    },
    {
      id: "DN004",
      date: "2024-01-23",
      reason: "Computer hardware failure",
      totalCost: 35000.00
    },
    {
      id: "DN005",
      date: "2024-01-26",
      reason: "Product return due to defect",
      totalCost: 18000.00
    }
  ]

  const totalDamageAmount = damageData.reduce((sum, item) => sum + item.totalCost, 0)

  const handlePrint = () => {
    window.print()
  }

  const DateRangeFilter = () => (
    <div className="md:justify-left mt-4 flex flex-col md:flex-row">
      <SearchInput
        name="Start Date"
        type="date"
        value={startDate}
        onChange={handleStartDateChange}
      />
      <SearchInput
        name="End Date"
        type="date"
        value={endDate}
        onChange={handleEndDateChange}
      />
    </div>
  )

  // Table columns for each tab
  const invoiceColumns = [
    {
      name: "ID",
      selector: row => row.id,
      sortable: true,
      width: "120px"
    },
    {
      name: "Customer Name",
      selector: row => row.customerName,
      sortable: true,
      minWidth: "200px"
    },
    {
      name: "Date",
      selector: row => new Date(row.date).toLocaleDateString(),
      sortable: true,
      width: "120px"
    },
    {
      name: "Net Amount (LKR)",
      selector: row => row.netAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
      sortable: true,
      right: true,
      width: "150px"
    },
    {
      name: "Invoice Cost (LKR)",
      selector: row => row.invoiceCost.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
      sortable: true,
      right: true,
      width: "150px"
    },
    {
      name: "Invoice Profit (LKR)",
      selector: row => row.invoiceProfit.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
      sortable: true,
      right: true,
      cell: row => <div className="text-green-600">{row.invoiceProfit.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>,
      width: "150px"
    }
  ]

  const expensesColumns = [
    {
      name: "ID",
      selector: row => row.id,
      sortable: true,
      width: "120px"
    },
    {
      name: "Date",
      selector: row => new Date(row.date).toLocaleDateString(),
      sortable: true,
      width: "120px"
    },
    {
      name: "Category",
      selector: row => row.category,
      sortable: true,
      minWidth: "150px"
    },
    {
      name: "Description",
      selector: row => row.description,
      sortable: true,
      minWidth: "250px"
    },
    {
      name: "Amount (LKR)",
      selector: row => row.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
      sortable: true,
      right: true,
      width: "150px"
    }
  ]

  const creditExpensesColumns = [
    {
      name: "Expenses ID",
      selector: row => row.id,
      sortable: true,
      width: "120px"
    },
    {
      name: "Date",
      selector: row => new Date(row.date).toLocaleDateString(),
      sortable: true,
      width: "120px"
    },
    {
      name: "Category",
      selector: row => row.category,
      sortable: true,
      minWidth: "150px"
    },
    {
      name: "Description",
      selector: row => row.description,
      sortable: true,
      minWidth: "250px"
    },
    {
      name: "Amount (LKR)",
      selector: row => row.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
      sortable: true,
      right: true,
      width: "150px"
    }
  ]

  const damageColumns = [
    {
      name: "Damage Note ID",
      selector: row => row.id,
      sortable: true,
      width: "150px"
    },
    {
      name: "Date",
      selector: row => new Date(row.date).toLocaleDateString(),
      sortable: true,
      width: "120px"
    },
    {
      name: "Reason",
      selector: row => row.reason,
      sortable: true,
      minWidth: "300px"
    },
    {
      name: "Total Cost (LKR)",
      selector: row => row.totalCost.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
      sortable: true,
      right: true,
      width: "150px"
    }
  ]

  return (
    <div className="font-nunito">
      <div className="flex justify-between pt-8">
        <div className="flex">
          <span className="text-[24px] text-[#000000] font-semibold">PL Report</span>
        </div>
        <div>
          <button
            onClick={handlePrint}
            className="bg-[#4F46E5] hover:bg-[#4338CA] text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2"
          >
            <PrintIcon /> Print Report
          </button>
        </div>
      </div>

      <div className="mt-4 w-full rounded-lg bg-white px-[25px] pb-[40px] pt-[15px]">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="flex border-b border-gray-200">
            <Tab className="py-2 px-4 font-medium text-sm cursor-pointer focus:outline-none"
              selectedClassName="text-[#4F46E5] border-b-2 border-[#4F46E5]">
              Summary
            </Tab>
            <Tab className="py-2 px-4 font-medium text-sm cursor-pointer focus:outline-none"
              selectedClassName="text-[#4F46E5] border-b-2 border-[#4F46E5]">
              Invoices
            </Tab>
            <Tab className="py-2 px-4 font-medium text-sm cursor-pointer focus:outline-none"
              selectedClassName="text-[#4F46E5] border-b-2 border-[#4F46E5]">
              Expenses
            </Tab>
            <Tab className="py-2 px-4 font-medium text-sm cursor-pointer focus:outline-none"
              selectedClassName="text-[#4F46E5] border-b-2 border-[#4F46E5]">
              CreditExpenses
            </Tab>
            <Tab className="py-2 px-4 font-medium text-sm cursor-pointer focus:outline-none"
              selectedClassName="text-[#4F46E5] border-b-2 border-[#4F46E5]">
              DebitDamage
            </Tab>
          </TabList>

          {/* Summary Tab */}
          <TabPanel>
            <h2 className="text-xl font-semibold mt-6">Profit & Loss Summary</h2>
            <DateRangeFilter />

            <div className="bg-white rounded-lg border border-gray-200 p-6 mt-4">
              <div className="mb-8">
                <div className="flex justify-between border-b border-gray-200 py-2">
                  <span className="font-medium">Description</span>
                  <span className="font-medium">Amount (LKR)</span>
                </div>

                <div className="flex justify-between border-b border-gray-200 py-3">
                  <span>Total Invoice Profit</span>
                  <span className="font-medium">{summaryData.totalInvoiceProfit.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>

                <div className="flex justify-between border-b border-gray-200 py-3">
                  <span>Total Expenses Credit</span>
                  <span className="text-red-500 font-medium">- {summaryData.totalExpensesCredit.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>

                <div className="flex justify-between border-b border-gray-200 py-3">
                  <span>Total Expenses Debit</span>
                  <span className="text-red-500 font-medium">- {summaryData.totalExpensesDebit.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>

                <div className="flex justify-between border-b border-gray-200 py-3">
                  <span>Damage Total</span>
                  <span className="text-red-500 font-medium">- {summaryData.damageTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>

                <div className="flex justify-between border-t-2 border-gray-300 py-4 mt-4">
                  <span className="font-bold">Total Profit/Loss</span>
                  <span className={`text-lg font-bold ${summaryData.totalProfitLoss >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {summaryData.totalProfitLoss >= 0 ? '+' : ''}
                    {summaryData.totalProfitLoss.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                </div>
              </div>
            </div>
          </TabPanel>

          {/* Invoices Tab */}
          <TabPanel>
            <h2 className="text-xl font-semibold mt-6">Profit & Loss Invoices</h2>
            <DateRangeFilter />

            <div className="bg-white rounded-lg border border-gray-200 p-6 mt-4">
              <DataTable
                columns={invoiceColumns}
                data={invoiceData}
                customStyles={TABLE_HEADER_STYLES}
                pagination
                paginationPerPage={10}
                paginationRowsPerPageOptions={[10, 25, 50]}
                noDataComponent={<div className="py-4 text-center">No invoice data available</div>}
              />

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold mb-4">Invoice Summary</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Total Invoice Amount (LKR)</p>
                    <p className="text-xl font-bold text-blue-600">
                      {invoiceTotals.totalInvoiceAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Total Invoice Cost (LKR)</p>
                    <p className="text-xl font-bold text-orange-600">
                      {invoiceTotals.totalInvoiceCost.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Total Profit (LKR)</p>
                    <p className="text-xl font-bold text-green-600">
                      {invoiceTotals.totalProfit.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>

          {/* Expenses Tab */}
          <TabPanel>
            <h2 className="text-xl font-semibold mt-6">Profit & Loss Expenses</h2>
            <DateRangeFilter />

            <div className="bg-white rounded-lg border border-gray-200 p-6 mt-4">
              <DataTable
                columns={expensesColumns}
                data={expensesData}
                customStyles={TABLE_HEADER_STYLES}
                pagination
                paginationPerPage={10}
                paginationRowsPerPageOptions={[10, 25, 50]}
                noDataComponent={<div className="py-4 text-center">No expenses data available</div>}
              />

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold">Total Expenses Credit (LKR)</h3>
                  <span className="text-2xl font-bold text-red-600">
                    {totalExpensesCredit.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                </div>
              </div>
            </div>
          </TabPanel>

          {/* CreditExpenses Tab */}
          <TabPanel>
            <h2 className="text-xl font-semibold mt-6">Profit & Loss Expenses Credit</h2>
            <DateRangeFilter />

            <div className="bg-white rounded-lg border border-gray-200 p-6 mt-4">
              <DataTable
                columns={creditExpensesColumns}
                data={creditExpensesData}
                customStyles={TABLE_HEADER_STYLES}
                pagination
                paginationPerPage={10}
                paginationRowsPerPageOptions={[10, 25, 50]}
                noDataComponent={<div className="py-4 text-center">No credit expenses data available</div>}
              />

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold">Total Credit Expenses (LKR)</h3>
                  <span className="text-2xl font-bold text-red-600">
                    {totalCreditExpenses.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                </div>
              </div>
            </div>
          </TabPanel>

          {/* DebitDamage Tab */}
          <TabPanel>
            <h2 className="text-xl font-semibold mt-6">Profit & Loss Damages</h2>
            <DateRangeFilter />

            <div className="bg-white rounded-lg border border-gray-200 p-6 mt-4">
              <DataTable
                columns={damageColumns}
                data={damageData}
                customStyles={TABLE_HEADER_STYLES}
                pagination
                paginationPerPage={10}
                paginationRowsPerPageOptions={[10, 25, 50]}
                noDataComponent={<div className="py-4 text-center">No damage data available</div>}
              />

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold">Total Damage Amount (LKR)</h3>
                  <span className="text-2xl font-bold text-red-600">
                    {totalDamageAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                </div>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  )
}