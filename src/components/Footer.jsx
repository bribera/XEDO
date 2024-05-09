/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Link from "next/link"
import Image from "next/image"

import { FaFacebookF, FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="">
      <div className='flex flex-col justify-between  pt-16'>
        <div className="border-t-[1px] border-third gap-10 grid grid-cols-2 xl:grid-cols-4 justify-between  p-[10px] py-6">
          {/* logo */}
          <div className=" flex flex-col gap-3">
            <div className="flex flex-col gap-3">
              <Link href="/" className=''>
                {/* <p className="text-[45px] text-blue-500 font-bold">Xèdo.</p> */}
                <Image src='/3.png' alt='logo' width={50} height={20} className='w-fit'/>
              </Link>
              <div className="">
                <p className="font-normal leading-normal text-[18px] tracking-wide">
                Grâce à l'application Xèdo, vous pouvez facilement récupérer vos gains de cashback chez tous nos commerces partenaires.
                </p>
              </div>
            </div>
            <div className="flex justify-items-center items-center text-[18px] xl:text-[20px] gap-3">
              <Link href="/" className='p-2 bg-third text-white rounded-3xl text-center hover:bg-first'>
                <FaFacebookF />
              </Link>
              <Link href="/" className='p-2 bg-third text-white rounded-3xl text-center hover:bg-first'>
                <FaInstagram />
              </Link>
              <Link href="/" className='p-2 bg-third text-white rounded-3xl text-center hover:bg-first'>
                <FaTiktok />
              </Link>
              <Link href="/" className='p-2 bg-third text-white rounded-3xl text-center hover:bg-first'>
                <FaTwitter />
              </Link>
            </div>
          </div>
          {/* links */}
          <div className="">
            <div className="">
              <p className="text-[26px] font-bold pb-4 text-second leading-relaxed tracking-wide">Liens utiles</p>
            </div>
            <div className="flex  flex-col gap-3 font-normal text-[18px] xl:text-[20px] leading-relaxed tracking-wide">
              <Link href="/apropos">Solution</Link>
              <Link href="/apropos">Commerçant.e</Link>
              <Link href="/apropos">A propos</Link>
              <Link href="/apropos">Contact</Link>
            </div>
          </div>
          {/* Légales */}
          <div className="">
            <p className="text-[26px] font-bold pb-4 text-second leading-relaxed tracking-wide">Légale</p>
            <div className="flex flex-col gap-5 text-[20px]">
              <p className="font-normal leading-relaxed tracking-wider">
                <Link href="/politique">
                  Politiques de confidentialité
                </Link>
              </p>
              <p className="font-normal leading-relaxed tracking-wider">
                <Link href="/termes">
                  Termes & Services
                </Link>
              </p>
            </div>
          </div>
          {/* Services */}
          {/* <div className="">
            <p className="text-[24px] font-bold pb-4 text-second leading-relaxed tracking-wide">Services</p>
            <div className="">
              <p className="font-medium leading-relaxed tracking-wider">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quam consequuntur sint inventore commodi, totam sunt rem, enim vitae ea doloribus aliquam vel. Molestias vitae itaque laudantium ut. Inventore, iure?</p>
            </div>
          </div> */}
          {/* entreprise */}
          <div className="">
            <p className="text-[26px] font-bold pb-4 text-second leading-relaxed tracking-wide">Entreprise</p>
            <div className="flex flex-col gap-5 text-[18px] xl:text-[20px]">
              <Link href="/equipes" className='font-normal leading-relaxed tracking-wide'>
                Equipe
              </Link>
              <Link href="/equipes" className='font-normal leading-relaxed tracking-wide'>
                Aide
              </Link>
              <Link href="/equipes" className='font-normal leading-relaxed tracking-wide'>
                Statuts des services
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center py-3 bg-third">
          <p className="text-[18px] font-light text-white"> © 2024 Xèdo . Tous droits réservés.</p>
        </div>
      </div>
      
    </div>
  )
}

export default Footer
