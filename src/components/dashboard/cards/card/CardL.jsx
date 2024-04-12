import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import "../../../../assets/style/style.css"
function Card({ cardObj }) {
    return (
        <div className="w-full lg:w-8/12">
            <div className="grid grid-cols-1 md:grid-cols-1  lg:grid-cols-2 gap-7">
                {cardObj?.map((item, index) => {
                    return (
                        <div key={index} className="text-white border border-[#ffff006a] rounded-3xl p-6 bg-gradient-to-r from-[#4745457b] to-[#201f2159] overflow-hidden">
                            <h2 className="text-center text-2xl font-semibold">{item?.cardName}</h2>
                            <div className="flex justify-center my-2">
                                <img src={item?.src} alt="image not found" />
                            </div>
                            <Link to={"#"} className="flex items-center gap-2 justify-end relative ">
                                <div className='blur_class'>
                                    <div className='flex items-center gap-2 justify-end'>
                                        <span>View More</span>
                                        <div className="w-6 h-6 flex justify-center items-center rounded-full border-2">
                                            <IoIosArrowForward className="text-bgColor font-semibold" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>

    )
}

export default Card
