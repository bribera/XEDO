/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { FaArrowAltCircleRight, FaIdCard, FaRegCheckCircle } from 'react-icons/fa'
import { PiClockCountdownBold } from 'react-icons/pi'
import { MdOutlineIncompleteCircle } from 'react-icons/md'



const why = [
  {
    id:1,
    "icon" : <FaRegCheckCircle />,
    "title" : "Facile à utiliser ",
    // "text" : "Augmentez votre chiffre d'affaires sans nécessiter de compétences informatiques avancées ! ",
    "text" : "Boostez vos revenus sans besoin de compétences informatiques pointues ! ",
  },
  {
    id:2,
    "icon" : <FaIdCard />,
    "title" : "Inscription simplifié ",
    // "text" : "Rejoindre Xèdo Pro en seulement 1 minute ! Profitez d'un agent dédié à votre service.",
    "text" : "Rejoignez Xèdo Pro en seulement 1 clic ! Bénéficiez d'un agent dévoué à votre service.",
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
    "text" : "Augmentez votre clientèle grâce à notre réseau étendu. Profitez de nos campagnes de communication globales pour toucher une cible de prospects qualifiés.",
  },
]

const Commercant = () => {
  return (
    <div>
      <section>
        {/* head commercant */}
        <div className=' justify-center flex text-center flex-col xl:flex-row xl:text-start xl:py-9 xl:px-0 px-40 items-center  gap-5'>     
          
          <div className=" flex flex-1 justify-center flex-col  items-center xl:justify-start xl:items-start gap-5">
            
            {/* title */}
            <div className="flex justify-center xl:justify-start">
              <p className="font-bold text-[30px] md:text-[40px] xl:text-[48px]   leading-relaxed tracking-wide">Fidéliser vos clients grâce à <span className="">Xèdo</span> à partir des cartes de fidélité</p>
            </div>
            
            {/* undertitle */}
            <div className="flex justify-center xl:justify-start">
              <p className="font-normal leading-normal tracking-normal  text-[20px] text xl:text-[30px]">Optimisez vos profits en fidélisant vos clients de façon simple et sécurisée en quelques secondes!</p>
            </div>
            
            {/* button */}
            <div className="flex justify-center w-full xl:justify-start items-center"> 
              <Link href="/formulaire">            
                <button className=" btn flex justify-center items-center gap-2 text-white">Devenir Commerçant.e <FaArrowAltCircleRight /></button>
              </Link>        
            </div> 

          </div>
          {/* image */}  
          <div className="flex-1">         
            <Image alt='commerçants' src="/commercant.jpg" width={500} height={500} className='w-full h-full object-fill'/>        
          </div>    
          
        </div>
      </section>


      {/* why xèdo pro */}
      <section>
        <div className='py-[50px]'>
          <div className=" justify-center flex items-center py-[50px]">
            <p className="text-[45px] xl:text-[50px] text-third">Pourquoi Xèdo Pro?</p>
          </div>
          <div className="  grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-10 xl:gap-20 xl:grid xl:grid-cols-2">
            {
              why.map((item, id) => {
                return (
                  <div className="flex items-center gap-10 rounded-xl hover:shadow-2xl hover:shadow-neutral-400 hover:translate-x-3 px-4 py-2 border-[1px] border-first border-collapse" key="id">
                    <span className="bg-second text-[24px]  p-[18px] rounded-full flex justify-center items-center font-semibold text-white">
                      {item.icon}
                    </span>
                    <div className=" flex flex-col gap-5 justify-start items-start">
                      <p className="text-[20px] xl:text-[24px]  font-medium ">{item.title}</p>
                      <div className="">
                        <p className=" font-normal text-[18px] xl:text-[20px]">{item.text}</p>
                      </div>
                    </div>
                  </div>
                )           
              })
            }
          </div>

        </div>
      </section>


      {/* devenir commerçante */}
      {/* <section className="pb-[50px] w-full h-[800px]">
        <div className="relative w-full">
          <div className=" ">
            <Image alt='background' width={400} height={400} src="/connexion.png" className='w-full h-[800px] object-fill' />
          </div>
          <div className="top-0 absolute h-[800px] w-full opacity-20  bg-second">
          </div>
            <div className="py-[50px]  absolute h-[800px]">
              <Link href="/formulaire" className='flex flex-col gap-10 hover:text-white justify-center items-center'>  
                <div className="">
                  <p className="font-semibold leading-relaxed tracking-wide text-[20px] xl:text-[24px]">Améliorez vos profits grâce à l'application Xèdo en toute simplicité.</p>
                </div>  
                <div className="">         
                  <button className=" btn flex items-center gap-2 text-white">Devenir Commerçant.e <FaArrowAltCircleRight /></button>
                </div>    
              </Link>
            </div>              
        </div>
      </section> */}
      
    </div>
  )
}

export default Commercant
