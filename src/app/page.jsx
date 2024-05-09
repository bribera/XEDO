
import Link from "next/link"
import Tarif from "@/components/Tarif";
import Why from "@/components/Why";
import Image from "next/image";
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function Home() {
  return (
    <main className="pt-[] xl:pt-16">

        {/* head first page */}
      <section>
        <div className="flex  justify-between items-center flex-col xl:flex-row gap-5 xl:gap-40">
          {/* text */}
          <div className="flex md:flex-1 flex-col justify-between items-center text-center md:w-[90%]  xl:w-[85%] xl:items-start gap-5">
            {/* header */}
            <div className="flex justify-between flex-col gap-8 ">
              <div className="">
                <p className="text-[44px] font-bold text-center  leading-relaxed xl:text-start tracking-wider">
                  Un compte unique offrant la flexibilité de générer plusieurs cartes de fidélité à volonté.
                </p>
              </div>
              {/* undertitle */}
              <div className="">
                <p className="text-[20px] font-normal text-center  xl:text-start">
                Grâce à notre plateforme, créez une ou plusieurs cartes de fidélité en seulement 1 minutes pour des achats en ligne à prix réduit. 
                Une solution simple, rapide et sécurisée.
                </p>
              </div>
            </div>
            {/* button */}
            <Link href ="/formulaire">
              <div className="text-center xl:text-start">
                <button type="button" className="btn2 border-[1px] text-start border-second flex items-center gap-2">Créer un compte pour votre entreprise <FaArrowAltCircleRight /> </button>
              </div>
            </Link>
          </div>
          {/* image */}
          <div className=" md:flex-1">
            <Image src="/solution.jpg" width={500} height={900} className="object-fill w-full h-full " alt="aplication mobile solution"/>
          </div>
        </div>
      </section>

      <div className="">
        <Why />
      </div>

      {/* tarif */}
      <div className="">
        <Tarif />
      </div>
    </main>
  );
}
