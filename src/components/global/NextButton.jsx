import React from 'react'

const NextButton = ({ onClick }) => {
  return (
    <button
     onClick={onClick}
          type="button"
          className="font-nunito border-adminAddButton bg-adminAddButton flex min-w-[120px] items-center justify-center gap-2 rounded-lg border px-4 py-2 text-[14px] font-semibold leading-[22px] text-white transition-all duration-300 hover:bg-opacity-75 hover:text-white"
        >
          Next
        </button>
  )
}

export default NextButton
