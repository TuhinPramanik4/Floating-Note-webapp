import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function Card() {
  return (
     <div className='relative w-40 h-52 px-3 py-5  rounded-[20px] text-white bg-zinc-900/90 overflow-hidden'>
         <FaFileAlt />
        <p className='text-sm leading-tight mt-5 font-semibold text-zinc-200'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      <div className='footer absolute bottom-0  w-full h-10  left-0 '>
        <div className=' py-2 px-5  flex items-center justify-between '>
          <h5>.4mb</h5>
           <span className='w-5 h-5 bg-sky-200 rounded-full flex items-center justify-center text-zinc-900 hover:bg-red-400' >
            <MdDelete size={30} />
          </span>
          </div>
      </div>
     </div>
    
  )
}

export default Card