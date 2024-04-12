import React, { useState } from "react";
import { IoBackspaceOutline } from "react-icons/io5";
import logo from "../../assets/images/monkeylogo.svg";
import profilePic from "../../assets/images/userImage.svg";
import { NavLink } from "react-router-dom";
import "../../assets/style/style.css"




const AsideSection = ({ handleClick, isFixedWidth, menusData }) => {
  const [isActive, setIsActive] = useState("Dashboard")
  return (
    <div className="max-sm:hidden max-lg:block">
      <div className="flex justify-center">
        <img src={logo} alt="image not found" />
      </div>
      {!isFixedWidth && (
        <>
          <div className="flex justify-end mr-4 text-3xl">
            <IoBackspaceOutline onClick={handleClick} />
          </div>
          <div className="flex flex-col items-center">
            <img src={profilePic} alt="image not found" />
            <h2 className="text-xl font-semibold">Sourav Kumar</h2>
            <p className="text-md mb-4 font-semibold">( Designer )</p>
          </div>
          <div>
            <ul>
              {menusData.map((item, index) => (
                <li key={index} className="ps-8 py-1 whitespace-nowrap relative" onClick={() => setIsActive(item.menu)}>
                  <NavLink to={item.link} className={`flex items-center gap-4 my-1 py-6 px-8 ${item.menu === isActive ? "bg-activeBg text-white rounded-tl-[50px] rounded-bl-[50px] active_round " : "bg-inactiveBg text-black-500"}`}>
                    <span className="text-2xl">{item.icon}</span>
                    <p className="fontmal text-m">{item.menu}</p>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default AsideSection;

