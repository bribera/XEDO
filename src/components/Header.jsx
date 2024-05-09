'use client'
import Image from 'next/image';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { BiX, BiMenuAltRight } from "react-icons/bi";

const menus = [
    {
        name:"Solution",
        path: "/", 
    },
    {
        name:"Commerçant.e",
        path: "/commercant",
    },
    {
        name:"A  propos",
        path: "/a-propos", 
    },
    {
        name:"Faq",
        path: "/faq",
    },
    {
        name:"Blog",
        path: "/blog",
    },
]
const Header = () => {
    const pathname = usePathname()

    const [haut, setHaut] = useState(false)

    const [nav, setNav] = useState(false)

    const handleCkick = () => {
        setNav(!nav)
    }

    useEffect(() =>  {
        const handleScroll = () => {
            if(window.scrollY > 40) {
                setHaut(true)
            }else {
                setHaut(false)
            }
        }

        window.addEventListener("scroll", handleScroll) 

        return (() => {
            window.removeEventListener("scroll", handleScroll)
        })
    }, [])

  return (
    <div className="">
        <div className={`${haut? 
                " bg-white/90  fixed w-[100%] z-20 pr-[80px] lg:px-20 "
                : ""
        }`}>

            <div className='flex justify-between items-center  py-6 '>
                {/* logo */}
                <div className="flex justify-between items-center">
                    <Link href={'/'} className=''>
                        {/* Xèdo. */}
                        <Image src='/1.png' alt='logo' width={110} height={40}/>
                    </Link>
                   
                </div>
                {/* icon menu */}
                <div className="inline-block">
                    <button className='lg:hidden flex cursor-pointer' onClick={handleCkick}>
                        {
                            nav ? <BiX size={50}/> 
                            :
                            <BiMenuAltRight size={50}/>
                        }
                        
                    </button>
                </div>
                {/* menu */}
                <div className="hidden lg:flex">
                    <nav className={`${
                    nav ? 'max-h-max py-4 px-4 xl:py-0 transition duration-300 ' 
                        : 
                    'max-h-none max-w-none xl:max-h-max hidden'
                } flex flex-col tracking-wider justify-center items-center font-bold bg-second w-full h-screen absolute top-[106px] left-0 z-[99]
                text-white xl:text-black text-[24px] xl:static xl:font-semibold gap-y-6 xl:flex xl:flex-row xl:w-max xl:overflow-hidden xl:gap-x-12
                xl:h-max xl:pb-0 xl:bg-transparent xl:text-[20px] text-sm xl:normal-case transition duration-300`}> 
                        {
                            menus.map((menu, index) => {
                                return (
                                    <Link 
                                        href={menu.path} 
                                        key={index}
                                        className={`${menu.path === pathname && 'xl:text-second text-second'}
                                        py-3 relative text-[18px] xl:text-[24px] flex items-center xl:inline-block hover:bg-white xl:hover:bg-transparent hover:text-first hover:w-full 
                                        hover:py-2 xl:hover:text-third xl:hover:after:w-full hover:justify-center xl:hover:w-auto`} >
                                        <p className="">{menu.name}</p>
                                    </Link>
                                )
                            })
                        }
                    </nav>
                </div>
                {/* boutton call to action */}
                <div className="hidden lg:flex">
                    <button className='flex items-center  justify-center gap-1 btn'>
                        <p className="">
                            Contactez-nous
                        </p>
                        <Link href="/" className='text-[24px]'> <FaWhatsapp /> </Link>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header

// h-fit xl:w-[1650px] mx-auto md:w-[1010px] md:pr-[79px] w-[550px] bg-white/90 fixed z-[99]