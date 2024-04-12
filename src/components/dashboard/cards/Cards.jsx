import React from 'react'
import CardL from './card/CardL'
import CardR from './card/CardR'

function Cards({cardObj,onChange,data}) {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between mt-20 mb-7">
      <CardL cardObj={cardObj}/>
      <CardR onChange={onChange} date={data} />
    </div>
  )
}

export default Cards
