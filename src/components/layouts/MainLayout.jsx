import React, { useState, useEffect, useRef } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Burger, ArrowBack, BackIcon, SearchIcon } from "../../utils/icons";
import { SideBar } from "./SideBar";
import { Tooltip } from "@material-tailwind/react";
import {
  BellIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { useStateContext } from "../../contexts/NavigationContext";
import { subPathLinks } from "../../utils/dataArrays";

export const MainLayout = ({ selectedItem }) => {
  const [signOutVisible, setSignOutVisible] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const dropdownRef = useRef(null);
  const sideBardownRef = useRef(null);
  const sideBarButtondownRef = useRef(null);
  const { token, setUser, setToken } = useStateContext();

  const handleLogout = () => {
    setUser(null);
    setToken(null);
  };

  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  const toggleSidebarExpand = () => {
    setSidebarExpanded((cur) => !cur);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSignOutVisible(false);
      }
      if (
        sideBardownRef.current &&
        !sideBardownRef.current.contains(event.target)
      ) {
        if (
          sideBarButtondownRef.current &&
          sideBarButtondownRef.current.contains(event.target)
        ) {
          setSidebar(true);
        } else {
          setSidebar(false);
        }
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const location = useLocation();
  const { user } = useStateContext();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const userString = queryParams.get("user");
    const token = queryParams.get("token");
    if (userString) {
      const user = JSON.parse(userString);
      setUser(user);
      setToken(token);
    }
  }, [location.search]);

  // if (!token) {
  //   return <Navigate to="/login" />;
  // }

  const handleSidebar = () => {
    setSidebar((pre) => !pre);
  };

  let mainPath = "";
  let subPaths = "";
  const pathParts = location.pathname.split("/");
  const id = pathParts[3];

  switch (location.pathname) {
    case "/":
      mainPath = "Dashboard";
      subPaths = [];
      break;
    case "/suppliers":
      mainPath = "Suppliers";
      subPaths = [];
      break;
    case "/reservation":
      mainPath = "Suppliers";
      subPaths = [];
      break;
    case "/grns":
      mainPath = "Suppliers";
      subPaths = [];
      break;
    case "/stock-card":
      mainPath = "Dashboard";
      subPaths = [];
      break;
    case "/suppliers/add":
      mainPath = "Suppliers";
      subPaths = ["Back", "New Supplier"];
      break;
    case `/supplier/edit/${id}`:
      mainPath = "Suppliers";
      subPaths = ["Back", "Edit Supplier"];
      break;
    case "/account":
      mainPath = "My Account";
      subPaths = [];
      break;
    case "/labours":
      mainPath = "Dashboard";
      subPaths = [];
      break;
    default:
      break;
  }
  return (
    <section className="bg-[#f0eff5] w-full min-h-screen flex">
      <div ref={sideBardownRef} className="">
        <SideBar
          handleSidebar={handleSidebar}
          sidebar={sidebar}
          handleLogout={handleLogout}
          sidebarExpanded={sidebarExpanded}
          toggleSidebarExpand={toggleSidebarExpand}
        />
      </div>

      <section
        className={`w-full flex flex-col transition-all duration-300 ease-in-out ${
          sidebarExpanded
            ? "md:ml-[15%] md:w-[85%]"
            : "md:ml-[80px] md:w-w-full"
        }`}
        style={{
          transition: "margin-left 0.5s ease-in-out",
        }}
      >
        <div className="relative rounded-none bg-adminMainColor w-full py-2 md:pl-[2%] pl-[3%] md:pr-[2%] pr-[3%] flex flex-row justify-between items-center md:before:w-[35px] md:before:h-[35px] md:before:content-[''] md:before:bg-[#ffffff] md:before:absolute md:before:left-[-35px] md:before:top-0">
          <div>
            <div ref={sideBarButtondownRef} className="flex md:hidden">
              <Tooltip content="Sidebar">
                <div onClick={handleSidebar}>
                  <Burger className="w-4 h-4 text-white" />
                </div>
              </Tooltip>
            </div>
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="block md:hidden"></div>
            <div className="md:flex items-center gap-3 font-nunito text-black font-medium text-[14px] leading-9 hidden">
              <BackIcon /> {mainPath}
            </div>
            <div className="flex items-center justify-between">
              <div className="relative hidden md:block w-[250px]">
                <i className="absolute text-white transform -translate-y-1/2 left-3 top-1/2">
                  <SearchIcon />
                </i>
                <input
                  type="text"
                  className="w-full bg-[#F5F5F5] text-[13px]  placeholder:text-[#979797] placeholder:text-[12px] placeholder:font-nunito placeholder:font-semibold placeholder:leading-[18px] pl-10 pr-3 py-[6px] rounded-lg focus:outline-none focus:border-transparent"
                  placeholder="Search here..."
                />
              </div>

              <Tooltip content="View Notifications">
                <div className="ml-8">
                  <Link to="/notifications">
                    <BellIcon className="w-6 h-6 text-[#001F3F]" />
                  </Link>
                </div>
              </Tooltip>
              <div class="w-px h-8 bg-gray-400 mx-5"></div>

              <div className="text-[14px]">Brody Alan</div>
              <div className="relative" ref={dropdownRef}>
                <div
                  className="flex items-center gap-2 ml-2 cursor-pointer"
                  onClick={() => setSignOutVisible(!signOutVisible)}
                >
                  <div className="ml-2 bg-gray-500 rounded-full w-fit">
                    <UserIcon className="w-5 h-5 text-white md:h-8 md:w-8" />
                  </div>
                  <div className="hidden md:block">
                    <br />
                  </div>
                </div>
                {signOutVisible && (
                  <div className="absolute top-12 right-5 bg-white w-[150px] flex flex-col items-start p-3 z-10 shadow-md">
                    <div className="w-full" onClick={handleLogout}>
                      <div className="py-2 cursor-pointer font-nunito">
                        Logout
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="bg-white flex items-center justify-between py-2 md:px-[2%] px-[3%]">
          <div className="flex items-center justify-between gap-2 md:gap-5">
            {subPaths.map((path, index) =>
              path === "Back" ? (
                <div key={index} className="border-r border-[#DDDDDD] pr-5">
                  <a href="#" onClick={() => window.history.back()}>
                    <button className="bg-[#F6FBFF] text-[#64728C] font-nunito font-normal text-[12px] md:text-[14px] leading-[21px] text-center py-1.5 px-1 md:px-3 rounded-[15px] transition-all duration-300">
                      <ArrowBack className="w-4 h-4 mr-1" />
                    </button>
                  </a>
                </div>
              ) : (
                <Link key={index} to={subPathLinks[path]}>
                  <button
                    className={`bg-[#F6FBFF] text-[#64728C] font-nunito font-normal text-[12px] md:text-[14px] leading-[21px] text-center py-1.5 px-1 md:px-3 rounded-[15px] transition-all duration-300 ${
                      location.pathname.includes(subPathLinks[path])
                        ? "bg-[#ecefff] text-[#2a3577]"
                        : ""
                    }`}
                  >
                    {path}
                  </button>
                </Link>
              )
            )}
          </div>
          <div className="min-h-8"></div>
          
        </div> */}
        <div className="flex gap-5 flex-col md:px-[2%] px-[3%]">
          <Outlet />
        </div>
      </section>
    </section>
  );
};
