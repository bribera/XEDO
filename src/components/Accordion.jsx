import React, { useState } from 'react'
import { FaMinus, FaPlus } from "react-icons/fa6";





const Accordion = ({index, question1, answer1}) => {

  const [open, setOpen] = useState(false);

  

  return (
    <div>
      <div className="">
        <div className="">

          <div className="" key={index}>
              <button 
              onClick={() => setOpen(!open)}
              className='flex justify-between w-full border-b-[2px] shadow-md border-first'>
                  <div className="p-2">
                      <p className="text-[24px] font-medium">{question1}</p>
                  </div>
                  <div className="text-[24px]">
                      {
                        open ? <FaMinus /> : <FaPlus />
                      }
                  </div>
              </button> 
              <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 ${ 
                
                open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  
                }` }>
                  
                <div className="bg-second text-white px-[50px] py-[20px] text-[20px] xl:text-[24px] overflow-hidden">
                  <p className="">{answer1}</p>
                </div>
                  
              </div>
          </div> 

        </div>
      </div>
    </div>
  )
}

export default Accordion
