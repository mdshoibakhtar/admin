import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { TbMenuDeep } from "react-icons/tb";
import { CgClose } from "react-icons/cg";

function MobileNavigation({ menusData }) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className='max-sm:block hidden'>
            <div className="flex justify-end " >
                <div className="flex gap-4 text-white items-center py-3 bg-gradient-to-r from-[#979292b6] to-[#201f2159] rounded-xl px-4 justify-end max-w-[240px] cursor-pointer	" onClick={() => setIsOpen(!isOpen)}>
                    <span className='text-white hover:animate-bounce'>
                        {isOpen ? <CgClose /> : <TbMenuDeep />}
                    </span>
                </div>
            </div>

            {isOpen && (<ul className={`transition duration-700 ease-in-out relative left-[-350px]  ${isOpen ? "left-[0px]" : ""}`}>
                {menusData.map((item, index) => (
                    <li key={index} className="px-8 py-1 whitespace-nowrap " onClick={() => setIsOpen(!isOpen)} >
                        <NavLink to={item.link} className={`flex items-center gap-4 my-1 text-white p-4 bg-gradient-to-r from-[#979292b6] to-[#201f2159] rounded  `}>
                            <span className="text-2xl">{item.icon}</span>
                            <p className="fontmal text-m">{item.menu}</p>
                        </NavLink>
                    </li>
                ))}
            </ul>)}
        </nav>
    )

}

export default MobileNavigation