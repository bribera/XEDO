import React from 'react'
import Image from 'next/image'
const Apropos = () => {
  return (
    <div>
      <div className="flex justify-center flex-col items-center gap-5">
        {/* image */}
        <div className=" flex-1">
          <Image alt='apropos' src="/first.jpg" width={600} height={500} className='w-full h-full object-cover rounded-xl'/>
        </div>
        {/* texte */}
        <div className="flex justify-between items-center gap-5 flex-1 bg-second px-5 py-3 rounded-xl">
          {/* title */}
          <div className="">
            <p className=" text-[30px] xl:text-[42px]  leading-relaxed -tracking-wide font-bold">
              Maximisons nos profits à <br /> chaque fois
            </p>
          </div>
          {/* undertitle */}
          <div className="w-[50%]">
            <p className="font-normal leading-relaxed tracking-normal text-[18px] xl:text-[20px]">Xèdo permet aux entreprises de fidéliser leurs clients grâce aux cartes de fidélité 
               et aux particuliers de gerer les cashback, de façon éfficace, leurs différentes cartes de fidélisation des commerçants partenaires.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Apropos
