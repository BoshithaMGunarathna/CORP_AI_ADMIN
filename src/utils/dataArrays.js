import {
  CustomersIcon,
  DashboardIcon,
  ExpensesIcon,
  JobsIcon,
  ReportsIcon,
  ServicesIcon,
  StocksIcon,
  SupplierIcon,
} from "./icons";

export const newNavigationItems = [
  {
    title: "Dashboard",
    link: "",
    icon: DashboardIcon,
  },
  {
    title: "Blogs",
    icon: JobsIcon,
    link: "/jobs-child",
    children: [
      { title: "Jobs", link: "jobs" },

    ],
  },
  {
    title: "Customers",
    icon: CustomersIcon,
    link: "/customer-child",
    children: [
      { title: "Customer Details", link: "customers" },
    ],
  },
  {
    title: "Services",
    link: "services",
    icon: ServicesIcon,
  },
  {
    title: "Courses",
    icon: StocksIcon,
    link: "/stock-child",
    children: [
      { title: " Details", link: "items" },
    ],
  },
  {
    title: "Events",
    link: "expenses",
    icon: ExpensesIcon,
  },
  {
    title: "Suppliers",
    icon: SupplierIcon,
    link: "/supplier-child",
    children: [
      { title: "Supplier Details", link: "suppliers" },
      { title: "Supplier Returns", link: "supplier-return" },
      { title: "Credit Suppliers", link: "supplier-credit" },
    ],
  },
  {
    title: "Reports",
    icon: ReportsIcon,
    link: "/report-child",
    children: [
      { title: "Stock Card", link: "stock-card" },
      { title: "P/L Report", link: "pl-reports" },

    ],
  },

  {
    title: "Customers",
    link: "customers",
    icon: SupplierIcon,
    children: 0,
  },
];

export const subPathLinks = {
  "Manage Customers": "/customers",
  "GRN Summary Report": "/reports",
  "Stock Card": "/stock-card",
  "Stock Report": "/stock-report",
  "Stock Statement": "/stock-statement",
  "Transfer Note": "/transfernotereport",
  Jobs: "/jobs",
  "Manage Jobs": "/manage-jobs",
  "Vendor Report": "/vendorreport",
  "Age Composition Report": "/age-composition",
  "Supplier Item Report": "/item-report",
  "Add Stocks to Production": "/production/add-stocks",
};

export const supplierInputItems = [
  {
    name: "Name*",
    inputName: "name",
    type: "text",
    placeholder: "Type here....",
  },
  {
    name: "Address*",
    inputName: "address",
    type: "text",
    placeholder: "Type here....",
  },

  {
    name: "Contact No*",
    inputName: "no",
    type: "text",
    placeholder: "Type here....",
  },
  {
    name: "Agent Name*",
    inputName: "a_name",
    type: "text",
  },
  {
    name: "Mobile No*",
    inputName: "m_no",
    type: "text",
    placeholder: "Type here....",
  },
];

export const customerInputItems = [
  {
    name: "First Name*",
    inputName: "firstName",
    type: "text",
    placeholder: "Type here....",
  },
  {
    name: "Last Name*",
    inputName: "lastName",
    type: "text",
    placeholder: "Type here....",
  },

  {
    name: "Mobile Number 01",
    inputName: "contact1",
    type: "text",
    placeholder: "Type here....",
  },
  {
    name: "Mobile Number 02 ",
    inputName: "contact2",
    type: "text",
  },
  {
    name: "Vehicle Category*",
    inputName: "vcategory",
    type: "text",
    placeholder: "Type here....",
  },
  {
    name: "Vehicle Brand*",
    inputName: "vbrand",
    type: "text",
    placeholder: "Type here....",
  },

  {
    name: "Vehicle Model",
    inputName: "vmodel",
    type: "text",
    placeholder: "Type here....",
  },
  {
    name: "Registration No",
    inputName: "rNo",
    type: "text",
  },
];

export const customerDetailsInputItems = [
  {
    name: "First Name",
    inputName: "firstName",
    type: "text",
    placeholder: "Type here....",
  },
  {
    name: "Last Name",
    inputName: "lastName",
    type: "text",
    placeholder: "Type here....",
  },

  {
    name: "Mobile Number 01",
    inputName: "contact1",
    type: "text",
    placeholder: "Type here....",
  },
  {
    name: "Mobile Number 02 ",
    inputName: "contact2",
    type: "text",
  },
  {
    name: "Address",
    inputName: "address",
    type: "text",
  },
]


export const vehicleDetailsInputItems = [
  {
    name: "Vehicle Category",
    inputName: "vcategory",
    type: "text",
    placeholder: "Type here....",
  },
  {
    name: "Vehicle Brand",
    inputName: "vbrand",
    type: "text",
    placeholder: "Type here....",
  },

  {
    name: "Vehicle Model",
    inputName: "vmodel",
    type: "text",
    placeholder: "Type here....",
  },
  {
    name: "Registration No",
    inputName: "rNo",
    type: "text",
  },
  {
    name: "Present Meter",
    inputName: "p_meter",
    type: "text",
  },
]

