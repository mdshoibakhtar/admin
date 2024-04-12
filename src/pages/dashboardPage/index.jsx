import React, { useState } from "react";
import Dashboard from "../../components/dashboard/Dashboard";
import AsideSection from "../../commonComp/Aside/AsideSection";
import { CiCircleChevRight } from "react-icons/ci";
import { MdDashboard } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { IoIosArrowDropright } from "react-icons/io";
import { FaRegAddressCard } from "react-icons/fa6";
import { AiOutlineLogout } from "react-icons/ai";
import TabAside from "../../commonComp/tabAside/TabAside";
const menusIcon = [
  { uid: "6", icon: <IoIosArrowDropright /> },
  { uid: "1", icon: <MdDashboard /> },
  { uid: "2", icon: <FaRegAddressCard /> },
  { uid: "3", icon: <FaEdit /> },
  { uid: "4", icon: <IoIosCheckmarkCircle /> },
  { uid: "5", icon: <HiOutlineNewspaper /> },
]
const menusData = [
  { menu: "Dashboard", link: "/dashboard", icon: <MdDashboard /> },
  { menu: "My Client", link: "/myclient", icon: <FaRegAddressCard /> },
  { menu: "Raised Complaint", link: "/raisedcomplaint", icon: <FaEdit /> },
  { menu: "Resolved Complaint", link: "/resolvedclient", icon: <IoIosCheckmarkCircle /> },
  { menu: "Working Pending", link: "/workingpending", icon: <HiOutlineNewspaper /> },
  { menu: "Logout", link: "/logout", icon: <AiOutlineLogout /> },
];
const DashboardPage = () => {
  const [isFixedWidth, setIsFixedWidth] = useState(false);

  const handleClick = () => {
    setIsFixedWidth(!isFixedWidth);
  };

  return (
    <div className="relative">
      <div className="max-sm:hidden max-lg:block">
        <TabAside isFixedWidth={isFixedWidth} handleClick={handleClick} menusIcon={menusIcon} />
      </div>
      <div className="bg-bgColor w-full h-full">
        <div className="w-full flex overflow-hidden	">
          <div className={`${isFixedWidth && "w-36"}transition-all duration-500`}>
            <AsideSection handleClick={handleClick} isFixedWidth={isFixedWidth} menusData={menusData} />
          </div>
          <div className={`w-full bg-monkeyColor max-sm:px-5 ${!isFixedWidth && "px-8"}  py-5 rounded-tl-[50px] rounded-bl-[37px] ${isFixedWidth && "px-20"} `}>
            <Dashboard menusData={menusData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
