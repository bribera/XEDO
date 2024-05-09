import React from 'react'
import Image from "next/image"
import { FaRegCheckCircle, FaIdCard } from "react-icons/fa";
import { PiClockCountdownBold } from "react-icons/pi";
import { MdOutlineIncompleteCircle } from "react-icons/md";




const why = [
  {
    id:1,
    "icon" : <FaRegCheckCircle />,
    "title" : "Facile à utiliser ",
    "text" : "Augmentez votre chiffre d'affaires sans nécessiter de compétences informatiques avancées ! ",
  },
  {
    id:2,
    "icon" : <FaIdCard />,
    "title" : "Inscription simplifié ",
    "text" : "Rejoindre Xèdo Pro en seulement 1 minute ! Profitez d'un agent dédié à votre service.",
  },
  {
    id:3,
    "icon" : <PiClockCountdownBold />,
    "title" : "Rapports Quotidiens Faciles",
    "text" : "Des rapports clairs, nets et précis, directement dans l'application Xèdo Pro, pour piloter vos actions marketing avec précision et booster votre chiffre d'affaires.",
  },
  {
    id:4,
    "icon" : <MdOutlineIncompleteCircle />,
    "title" : "Marketing Partout",
    "text" : "Augmentez votre clientèle grâce à notre réseau étendu. Profitez de nos campagnes de communication globales pour toucher une cible de prospects qualifiés à travers les différents cannaux.",
  },
]

const Why = () => {
  return (
    <div className='py-[50px]'>
     <div className=" justify-center flex items-center py-[50px]">
      <p className="text-[45px] xl:text-[50px] text-third">Pourquoi Xèdo ?</p>
     </div>
      <div className="  grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-10 xl:grid xl:grid-cols-2">
        {
          why.map((item, id) => {
            return (
              <div className="flex items-center gap-10 shadow-md drop-shadow-md px-8 py-5 border-t-2 border-r-2 border-l-2 border-first border-b-[25px] border-collapse" key="id">
                <span className="bg-second text-[24px]  p-[25px] rounded-full flex justify-center items-center font-semibold text-white">
                  {item.icon}
                </span>
                <div className=" h-full flex flex-col gap-5 justify-center items-start">
                  <p className="font-semibold text-[20px] lg:text-[24px]">{item.title}</p>
                  <div className="">
                    <p className="font-medium text-[18px] text-[#646464] lg:text-[20px]">{item.text}</p>
                  </div>
                </div>
              </div>
            )           
          })
        }
      </div>

    </div>
  )
}

export default Why
