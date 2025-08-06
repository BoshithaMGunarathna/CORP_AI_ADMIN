import { useState, useEffect } from "react";
import { ListItem, ListItemPrefix } from "@material-tailwind/react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "./../../assets/images/logo-sidebar.png";
import logoSmall from "../../assets/images/logo.png";
import { newNavigationItems } from "../../utils/dataArrays";
import { CloseSidebarIcon } from "../../utils/icons";
import { useStateContext } from "../../contexts/NavigationContext";
import Swal from "sweetalert2";

export const SideBar = ({
  handleSidebar,
  sidebar,
  handleLogout,
  toggleSidebarExpand,
  sidebarExpanded,
}) => {
  const { user } = useStateContext();

  const location = useLocation();
  const currentUrl = location.pathname.replace(/^\//, "");

  const [openMenuKey, setOpenMenuKey] = useState(null);

  return (
    <div dir="ltr">
      <div
        className={` h-full bg-[#FFFFFF] flex flex-col font-nunito z-50 items-start fixed transform duration-300 ease-in-out fade-right-enter-active md:opacity-100 overflow-visible pb-20 transition-all ${sidebar ? "fade-right-enter-to" : "fade-right-enter-from"
          } ${sidebarExpanded ? "md:w-[15%] w-[60%]" : "md:w-[80px] w-[60%]"}`}
        style={{ transition: "all 0.5s ease-in-out" }}
      >
        <div className="mb-2 flex items-center relative gap-4 p-4 w-full z-50">
          <div className="flex justify-center w-full mb-10 h-[80px] relative">
            <img
              src={logo}
              alt="brand"
              className={`absolute top-0 pt-4 left-1/2 transform transition-all duration-500 ease-in-out ${sidebarExpanded
                  ? "opacity-100 translate-x-[-50%]"
                  : "opacity-0 translate-x-[-60%]"
                }`}
              style={{
                visibility: sidebarExpanded ? "visible" : "hidden",
                transition:
                  "opacity 0.5s ease-in-out, transform 0.5s ease-in-out, visibility 0.5s",
              }}
            />
            <img
              src={logoSmall}
              alt="brand"
              className={`absolute top-0 left-1/2 pt-5 transform transition-all duration-500 ease-in-out ${sidebarExpanded
                  ? "opacity-0 translate-x-[-40%]"
                  : "opacity-100 translate-x-[-50%]"
                }`}
              style={{
                visibility: sidebarExpanded ? "hidden" : "visible",
                transition:
                  "opacity 0.5s ease-in-out, transform 0.5s ease-in-out, visibility 0.5s",
              }}
            />
          </div>
          <span
            onClick={handleSidebar}
            className="absolute top-0 right-0 md:hidden"
          ></span>
          <div
            className="w-[30px] aspect-square rounded-full bg-[#263679] absolute top-28 -right-[15px] z-100 hidden md:flex items-center justify-center pr-[3px] cursor-pointer"
            onClick={toggleSidebarExpand}
          >
            {sidebarExpanded ? (
              <span className="cursor-pointer">
                <CloseSidebarIcon />
              </span>
            ) : (
              <span className="rotate-180 pr-1 cursor-pointer">
                <CloseSidebarIcon />
              </span>
            )}
          </div>
        </div>

        <div className="w-full relative overflow-y-scroll scrollbar-y-style overflow-x-hidden border-t-[0.5px] border-[#B8B8B8] pt-7">
          <li className="list-none w-full flex gap-1 flex-col">
            {newNavigationItems.slice(0, 8).map((item, itemIndex) => {
              return (
                <NavItem
                  icon={item.icon}
                  currentUrl={currentUrl}
                  key={itemIndex}
                  title={item.title}
                  link={item.link}
                  children={item.children}
                  toggleSidebarExpand={toggleSidebarExpand}
                  sidebarExpanded={sidebarExpanded}
                  openMenuKey={openMenuKey}
                  setOpenMenuKey={setOpenMenuKey}
                />
              );
            })}
          </li>
          <li className="list-none w-full flex gap-1 flex-col mt-16 border-t-[0.5px] border-[#B8B8B8] pt-7">
            <NavItem
              title="Settings"
              link="labours"
              icon={() => (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.00391 11C10.1085 11 11.0039 10.1046 11.0039 9C11.0039 7.89543 10.1085 7 9.00391 7C7.89934 7 7.00391 7.89543 7.00391 9C7.00391 10.1046 7.89934 11 9.00391 11Z" stroke="#202224" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M13.9376 11.0003C13.8488 11.2014 13.8223 11.4245 13.8616 11.6407C13.9008 11.857 14.0039 12.0565 14.1576 12.2137L14.1976 12.2537C14.3215 12.3775 14.4199 12.5245 14.487 12.6864C14.5541 12.8483 14.5886 13.0218 14.5886 13.197C14.5886 13.3722 14.5541 13.5457 14.487 13.7076C14.4199 13.8694 14.3215 14.0165 14.1976 14.1403C14.0737 14.2643 13.9267 14.3626 13.7648 14.4297C13.603 14.4968 13.4295 14.5314 13.2542 14.5314C13.079 14.5314 12.9055 14.4968 12.7436 14.4297C12.5818 14.3626 12.4347 14.2643 12.3109 14.1403L12.2709 14.1003C12.1138 13.9466 11.9142 13.8435 11.698 13.8043C11.4817 13.7651 11.2586 13.7916 11.0576 13.8803C10.8604 13.9648 10.6922 14.1052 10.5738 14.284C10.4553 14.4629 10.3918 14.6725 10.3909 14.887V15.0003C10.3909 15.3539 10.2504 15.6931 10.0004 15.9431C9.75033 16.1932 9.41119 16.3337 9.05757 16.3337C8.70394 16.3337 8.3648 16.1932 8.11476 15.9431C7.86471 15.6931 7.72423 15.3539 7.72423 15.0003V14.9403C7.71907 14.7197 7.64764 14.5057 7.51924 14.3261C7.39083 14.1466 7.21139 14.0098 7.00423 13.9337C6.80315 13.8449 6.5801 13.8184 6.36384 13.8577C6.14758 13.8969 5.94802 14 5.7909 14.1537L5.7509 14.1937C5.62707 14.3176 5.48002 14.416 5.31815 14.4831C5.15629 14.5502 4.98279 14.5847 4.80757 14.5847C4.63234 14.5847 4.45884 14.5502 4.29698 14.4831C4.13511 14.416 3.98806 14.3176 3.86423 14.1937C3.74026 14.0698 3.64192 13.9228 3.57482 13.7609C3.50772 13.599 3.47318 13.4255 3.47318 13.2503C3.47318 13.0751 3.50772 12.9016 3.57482 12.7397C3.64192 12.5779 3.74026 12.4308 3.86423 12.307L3.90423 12.267C4.05792 12.1099 4.16102 11.9103 4.20023 11.6941C4.23945 11.4778 4.21298 11.2547 4.12423 11.0537C4.03972 10.8565 3.8994 10.6883 3.72054 10.5699C3.54168 10.4514 3.33209 10.3878 3.11757 10.387H3.00423C2.65061 10.387 2.31147 10.2465 2.06142 9.99647C1.81137 9.74642 1.6709 9.40728 1.6709 9.05366C1.6709 8.70004 1.81137 8.3609 2.06142 8.11085C2.31147 7.8608 2.65061 7.72033 3.00423 7.72033H3.06423C3.28489 7.71516 3.4989 7.64374 3.67843 7.51533C3.85796 7.38693 3.99471 7.20748 4.0709 7.00033C4.15964 6.79925 4.18611 6.5762 4.1469 6.35993C4.10769 6.14367 4.00459 5.94411 3.8509 5.78699L3.8109 5.74699C3.68693 5.62316 3.58858 5.47611 3.52149 5.31425C3.45439 5.15238 3.41985 4.97888 3.41985 4.80366C3.41985 4.62844 3.45439 4.45494 3.52149 4.29307C3.58858 4.13121 3.68693 3.98416 3.8109 3.86033C3.93473 3.73636 4.08178 3.63801 4.24364 3.57091C4.40551 3.50381 4.57901 3.46928 4.75423 3.46928C4.92945 3.46928 5.10295 3.50381 5.26482 3.57091C5.42668 3.63801 5.57373 3.73636 5.69757 3.86033L5.73757 3.90033C5.89468 4.05402 6.09424 4.15712 6.31051 4.19633C6.52677 4.23554 6.74982 4.20907 6.9509 4.12033H7.00423C7.20141 4.03582 7.36958 3.8955 7.48803 3.71664C7.60648 3.53778 7.67004 3.32818 7.6709 3.11366V3.00033C7.6709 2.6467 7.81137 2.30757 8.06142 2.05752C8.31147 1.80747 8.65061 1.66699 9.00423 1.66699C9.35785 1.66699 9.69699 1.80747 9.94704 2.05752C10.1971 2.30757 10.3376 2.6467 10.3376 3.00033V3.06033C10.3384 3.27485 10.402 3.48444 10.5204 3.6633C10.6389 3.84216 10.8071 3.98248 11.0042 4.06699C11.2053 4.15574 11.4284 4.18221 11.6446 4.143C11.8609 4.10378 12.0604 4.00068 12.2176 3.84699L12.2576 3.80699C12.3814 3.68302 12.5284 3.58468 12.6903 3.51758C12.8522 3.45048 13.0257 3.41594 13.2009 3.41594C13.3761 3.41594 13.5496 3.45048 13.7115 3.51758C13.8734 3.58468 14.0204 3.68302 14.1442 3.80699C14.2682 3.93082 14.3665 4.07787 14.4336 4.23974C14.5007 4.4016 14.5353 4.5751 14.5353 4.75033C14.5353 4.92555 14.5007 5.09905 14.4336 5.26091C14.3665 5.42278 14.2682 5.56983 14.1442 5.69366L14.1042 5.73366C13.9505 5.89078 13.8474 6.09034 13.8082 6.3066C13.769 6.52286 13.7955 6.74592 13.8842 6.94699V7.00033C13.9687 7.19751 14.1091 7.36567 14.2879 7.48412C14.4668 7.60257 14.6764 7.66614 14.8909 7.66699H15.0042C15.3579 7.66699 15.697 7.80747 15.947 8.05752C16.1971 8.30757 16.3376 8.6467 16.3376 9.00033C16.3376 9.35395 16.1971 9.69309 15.947 9.94313C15.697 10.1932 15.3579 10.3337 15.0042 10.3337H14.9442C14.7297 10.3345 14.5201 10.3981 14.3413 10.5165C14.1624 10.635 14.0221 10.8031 13.9376 11.0003Z" stroke="#202224" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

              )}
              toggleSidebarExpand={toggleSidebarExpand}
              sidebarExpanded={sidebarExpanded}
              currentUrl={currentUrl}
              openMenuKey={openMenuKey}
              setOpenMenuKey={setOpenMenuKey}
            />

            <NavItem
              title="Logout"
              link="#"
              handleLogout={handleLogout}
              icon={() => (
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.99967 3.20837C10.3448 3.20837 10.6247 3.4882 10.6247 3.83337C10.6247 4.17855 10.3448 4.45837 9.99967 4.45837C6.66296 4.45837 3.95801 7.16332 3.95801 10.5C3.95801 13.8368 6.66296 16.5417 9.99967 16.5417C10.3448 16.5417 10.6247 16.8215 10.6247 17.1667C10.6247 17.5119 10.3448 17.7917 9.99967 17.7917C5.9726 17.7917 2.70801 14.5271 2.70801 10.5C2.70801 6.47297 5.9726 3.20837 9.99967 3.20837Z"
                    fill="#202224"
                    stroke="#202224"
                    strokeWidth="0.2"
                  />
                  <path
                    d="M13.7244 8.44194C13.4803 8.19786 13.4803 7.80213 13.7244 7.55806C13.9685 7.31398 14.3642 7.31398 14.6083 7.55806L17.1083 10.0581C17.3523 10.3022 17.3523 10.6978 17.1083 10.9419L14.6083 13.4419C14.3642 13.686 13.9685 13.686 13.7244 13.4419C13.4803 13.1978 13.4803 12.8022 13.7244 12.5581L15.1574 11.125H8.33301C7.98783 11.125 7.70801 10.8452 7.70801 10.5C7.70801 10.1548 7.98783 9.875 8.33301 9.875H15.1574L13.7244 8.44194Z"
                    fill="#202224"
                    stroke="#202224"
                    strokeWidth="0.2"
                  />
                </svg>
              )}
              toggleSidebarExpand={toggleSidebarExpand}
              sidebarExpanded={sidebarExpanded}
            />
          </li>
        </div>
      </div>
    </div>
  );
};

const NavItem = ({
  icon,
  title,
  link,
  children,
  handleLogout,
  sidebarExpanded,
  openMenuKey,
  setOpenMenuKey,
}) => {
  const NavIcon = icon;
  const isOpen = openMenuKey === title;
  const navigate = useNavigate();
  const location = useLocation();

  const currentUrl = location.pathname.replace(/^\//, ""); // "jobs", "dashboard", etc.
  const normalizedLink = link.replace(/^\//, ""); // removes leading slash if any

  const isActive =
    currentUrl === normalizedLink ||
    (children && children.some((child) => child.link === currentUrl));

  // useEffect(() => {
  //   if (children && children.some((child) => child.link === currentUrl)) {
  //     setIsOpen(true);
  //   }
  // }, [currentUrl]);

  const handleClick = (e) => {
    if (handleLogout) {
      e.preventDefault();
      Swal.fire({
        title: "Are you sure?",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Logout!",
        customClass: {
          title: "font-nunito",
          content: "font-nunito",
          actions: "font-nunito",
          confirmButton: "font-nunito",
          cancelButton: "font-nunito",
        },
      }).then((result) => {
        if (result.isConfirmed) {
          handleLogout();
        }
      });
      return;
    }

    if (children) {
      e.preventDefault();

      if (isOpen) {
        setOpenMenuKey(null);
      } else {
        setOpenMenuKey(title);
        navigate(children[0].link);
      }
    }
  };

  const listItemContent = (
    <div
      onClick={handleClick}
      className={`${isActive || isOpen
          ? "bg-[#4880FF] text-white font-bold"
          : "text-[#202224] font-normal"
        } font-nunito text-[14px] leading-[22px] justify-between p-0 h-[45px] rounded-[5px]`}
    >
      <div className="flex h-full items-center justify-center w-full cursor-pointer">
        <ListItemPrefix className="flex justify-center items-center pl-[23px]">
          <NavIcon
            color={isActive || isOpen ? "white" : "#202224"}
            width="18px"
            className="h-5"
          />
        </ListItemPrefix>
        <span
          className="flex-1 ml-2 transition-all duration-500"
          style={{
            transform: sidebarExpanded ? "translateX(0)" : "translateX(-100%)",
            opacity: sidebarExpanded ? 1 : 0,
            transition: "transform 0.5s ease-in-out, opacity 0.5s ease-in-out",
          }}
        >
          {title}
        </span>
      </div>
    </div>
  );

  return (
    <>
      <div className={`flex w-full ${sidebarExpanded ? `pr-4` : `pr-3`}`}>
        {isActive ? (
          <div className="bg-[#white] w-1 h-[45px] rounded-l-lg rounded-r-full"></div>
        ) : (
          <div className="bg-white w-1 h-[45px] rounded-l-lg rounded-r-full"></div>
        )}
        <div className="ml-1 w-full">
          {children || handleLogout ? (
            <div>{listItemContent}</div>
          ) : (
            <Link to={`/${link}`} onClick={() => setOpenMenuKey(null)}>
              {listItemContent}
            </Link>
          )}
        </div>
      </div>

      {/* Animated children */}
      {children && (
        <div
          className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${isOpen ? "max-h-[500px]" : "max-h-0"
            }`}
        >
          <div className="flex flex-col pl-12 gap-1 pr-2 pt-2">
            {children.map((child, index) => (
              <Link
                key={index}
                className={`flex py-2 pl-2 w-full rounded-[5px] gap-3 items-center ${currentUrl === child.link
                    ? "bg-[#4880FF] font-bold text-white"
                    : "bg-white font-normal text-[#202224]"
                  }`}
                to={child.link}
              >
                <div
                  className={`w-1 h-6 ${currentUrl === child.link
                      ? "bg-[#4880FF]"
                      : "bg-transparent"
                    }`}
                ></div>
                <h5>{child.title}</h5>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
