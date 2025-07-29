import React from 'react'

function TotalScroll({totalCount}) {
  return (
    <div className="flex flex-col w-fit items-center ">
    <span className="font-medium text-[6.25rem]">{totalCount}</span>
    <span className="text-2xl font-medium">Total Score</span>
  </div>
  )
}

export default TotalScroll