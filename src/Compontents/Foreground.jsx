import React from 'react'
import {useRef, useState } from 'react'
import Card from './Card'

function Foreground() {
   const ref = useRef(null);
    
  const data = [
       {desc: "Hi , Tuhin , Stay foucused on your goal. and remember why you have started",
        filesize: "6.9mb",
        close: true,
       },
       {desc: "keep going",
        filesize: "6.9mb",
        close: true,
       },
       {desc: "Great you are consistent",
        filesize: "6.9mb",
        close: true,
       }
  ];
  
  return (
    <>
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
        {data.map((item,index)=>(
          <Card data={item} refernce={ref}/>
        ))}
        </div>
    </>
  )
}

export default Foreground