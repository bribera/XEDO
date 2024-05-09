import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import Image from "next/image"
import Link from "next/link"

const equipes = [
  {
    id:1,
    "image": "/first.jpg",
    "name": "Bribéra AGOSSOU",
    "title": "Chef Projet",
    "facebok": <FaFacebookF />,
    "facebooklink" : "",
    "twitter": <FaTwitter />,
    "twitterlink" : "",
    "linkedin": <FaLinkedinIn />,
    "flinkdedinlink" : "",
  },
  {
    id:2,
    "image": "/second.jpg",
    "name": "Jacob DOSSOU",
    "title": "Développeur Web & Mobile",
    "facebok": <FaFacebookF />,
    "facebooklink" : "",
    "twitter": <FaTwitter />,
    "twitterlink" : "",
    "linkedin": <FaLinkedinIn />,
    "flinkdedinlink" : "",
  },
  {
    id:3,
    "image": "/first.jpg",
    "name": "Esther BIO",
    "title": "Marketeur Digital",
    "facebok": <FaFacebookF />,
    "twitter": <FaTwitter />,
    "linkedin": <FaLinkedinIn />,
  },
  {
    id:4,
    "image": "/first.jpg",
    "name": "Cendrin HOUEFA",
    "title": "Développeur Web & Mobile",
    "facebok": <FaFacebookF />,
    "twitter": <FaTwitter />,
    "linkedin": <FaLinkedinIn />,
  },
  {
    id:5,
    "image": "/first.jpg",
    "name": "Bribéra AGOSSOU",
    "title": "Développeur Web ",
    "facebok": <FaFacebookF />,
    "twitter": <FaTwitter />,
    "linkedin": <FaLinkedinIn />,
  },
  {
    id:6,
    "image": "/first.jpg",
    "name": "Daniel SOSSOU",
    "title": "Développeur Web & Mobile",
    "facebok": <FaFacebookF />,
    "twitter": <FaTwitter />,
    "linkedin": <FaLinkedinIn />,
  },
]

const Equipe = () => {
  return (
    <div>
      <div className='container mx-auto '>
        {/* blog*/}
        <div className="relative">
            {/* background texte */}
            <div className="absolute -top-4 left-[20%] xl:top-8 text-center lg:left-[35%]">
            <p className="uppercase text-slate-300 text-opacity-25 dark:text-opacity-10 text-7xl tracking-widest leading-relaxed  font-semibold">
                membres
            </p>
            </div>
        </div>
        {/* content Blog */}
        <div className="flex flex-col justify-between gap-y-16 xl:gap-y-8 items-center h-fit-content">
          {/* text Blogs */}
          <div className="">
            <div className="flex items-center gap-2 font-semibold  text-6xl lg:text-8xl pt-8 xl:pt-20 uppercase">
              <p className="">Notre</p>
              <span className='text-second'>Equipe</span>
            </div>
          </div>
          {/* chiffres et d'autres */}
          <div className="pb-[30px]  flex flex-col xl:grid grid-cols-4 gap-5 text-center xl:py-[62px] px-[82px] ">
            {
                  equipes.map((equipe, index) => {
                      return (
                        <div className="flex  justify-center items-center gap-10 hover:drop-shadow-3xl hover:shadow-neutral-600  hover: hover: hover: hover:translate-y-3" key={index}>
                            {/* block */}
                            <div className="flex flex-col gap-10 justify-center items-center ">
                              {/* image */}
                              <div className=" ">
                                <Image alt='' src={equipe.image}  width={500} height={500} className=" rounded-[100%] w-[150px] h-[150px]"/> 
                              </div>
                              {/* texte */}
                              <div className=" w-full p-4 rounded-b-md flex flex-col gap-y-2 leading-relaxed tracking-normal  text-center">
                                  <p className="uppercase font-medium leading-relaxed tracking-wider text-lg">{equipe.title}</p>
                                  <div className=" flex justify-center items-center gap-5 text-[20px] text-third">
                                    <Link href="/blog">   
                                      <FaFacebookF />
                                    </Link>
                                    <Link href="/blog">   
                                      <FaTwitter />
                                    </Link>
                                    <Link href="/blog">   
                                      <FaLinkedinIn />
                                    </Link>
                                  </div>
                              </div>
                            </div>
                        </div>
                      )
                  })
              }
          </div>
        </div>
    </div>        
                      
    </div>
  )
}

export default Equipe
