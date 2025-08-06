import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../components/layouts/MainLayout";
import { GuestLayout } from "../components/layouts/GuestLayout";
import { Supplier } from "../pages/suppliers/Supplier";
import { AddSupplier } from "../pages/suppliers/AddSupplier";
import { Login } from "../pages/Login";
import { SignUp } from "../pages/SignUp";
import { Dashboard } from "../pages/dashbaord/Dashboard";
import { Customer } from "../pages/customer/Customer";
import { Reserve } from "../pages/Rservation";
import { GRN } from "../pages/GRN";
import { Jobs } from "../pages/jobs/Jobs";
import { Addjob } from "../pages/jobs/Addjob";
import { Services } from "../pages/services/Services";
import Expenses from "../pages/expenses/Expenses";
import { SupplierReturns } from "../pages/supplier-return/SupplierReturns";
import { CreditSupplier } from "../pages/credit-supplier/CreditSupplier";
import { ItemDetails } from "../pages/stocks/ItemDetails";
import Dashboard2 from "../pages/dashbaord/Dashboard2";
import { Labours } from "../pages/Labours/Labours";
import { StockCard } from "../pages/reports/Stockcard";
import { PLReport } from "../pages/reports/PLReport";




const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Dashboard2 /> },
      {
        path: "/suppliers",
        element: <Supplier />,
      },
      {
        path: "/reservation",
        element: <Reserve />,
      },
      {
        path: "/grn",
        element: <GRN />,
      },
      {
        path: "/suppliers/add",
        element: <AddSupplier />,
      },
      {
        path: "/customers",
        element: <Customer />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/jobs/add-job",
        element: <Addjob />,
      },

      {
        path: "/items",
        element: <ItemDetails />,
      },
  


      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/expenses",
        element: <Expenses />,
      },
      {
        path: "/supplier-return",
        element: <SupplierReturns />,
      },
      {
        path: "/supplier-credit",
        element: <CreditSupplier />,
      },



      {
        path: "/stock-card",
        element: <StockCard />,
      },


      {
        path: "/pl-reports",
        element: <PLReport />,
      },
 
      {
        path: "/labours",
        element: <Labours />,
      },

     
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
