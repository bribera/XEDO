import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { FaRegCircle } from "react-icons/fa6";


const TarifCard = ({first,second,third, four, five, description,title, prix, temps,  categorie}) => {
  return (
    <div>
      <div className='  pb-[60px]'>
        <div className=" flex flex-col justify-start items-center rounded-xl  border-2 border-second">
          <div className="">
            <Image alt='papier avion' width={300} height={300} src="/illustration.png"/>
          </div>
          
          <div className="flex flex-col gap-5 rounded-b-xl mt-3 py-6 px-4 ">
            <h5 className='text-[28px] xl:text-[36px] uppercase font-bold mb-2 leading-relaxed tracking-wide'>{categorie}</h5>
            <p className="font-semibold leading-relaxed -tracking-wide text-[24px] xl:text-[28px] ">{title}</p>
            <div className="flex items-center gap-2">
              <p className="font-medium text-[20px] xl:text-[24px]">{prix}</p>
              <p className="font-light italic text-[18px] xl:text-[20px]">{temps}</p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-5">
                <div className="bg-second p-3 text-white rounded-full">
                  <FaRegCircle />
                </div>
                <p className="">{first}</p>
              </div>
              <div className="flex items-center gap-5">
                <div className="bg-second p-3 text-white rounded-full">
                  <FaRegCircle />
                </div>                
                <p className="">{second}</p>
              </div>
              <div className="flex items-center gap-5">
                <div className="bg-second p-3 text-white rounded-full">
                  <FaRegCircle />
                </div>
                <p className="">{third}</p>
              </div>
              <div className="flex items-center gap-5">
                <div className="bg-second p-3 text-white rounded-full">
                  <FaRegCircle />
                </div>
                <p className="">{four}</p>
              </div>
              <div className="flex items-center gap-5">
                <div className="bg-second p-3 text-white rounded-full">
                  <FaRegCircle />
                </div>
                <p className="">{five}</p>
              </div>
            </div>
            {/* <div className="">
              <button className='flex items-center  justify-center gap-1 btn'>
                  <Link href="/" className='text-[24px]'> 
                    <p className="">
                        Choisir
                    </p> 
                  </Link>
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TarifCard
