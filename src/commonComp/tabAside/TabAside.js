import React from 'react'

function TabAside({isFixedWidth,handleClick,menusIcon}) {
    return (
        <>{isFixedWidth && (
            <div className="absolute top-1/2 transform -translate-y-1/2 transition-all duration-500 aftr bfr">
                <div className="rounded-r-full bg-monkeyColor text-white relative">
                    <ul className="px-5 py-20 tab_round">
                        {menusIcon?.map((itm, i) => (
                            <li key={i} className="font-medium text-2xl my-6" onClick={itm?.uid === '6' ? handleClick : null}>
                                {itm?.icon}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )}</>
    )
}

export default TabAside