import React from 'react'
import Image from "next/image"
import Link from "next/link"
import {HiEye} from "react-icons/hi"
import { FaArrowAltCircleRight, FaArrowCircleRight } from 'react-icons/fa'


const posts = [
    {
      id: 1,
      title: "happy Science",
      image: "/first.jpg",
      description: "Lire la suite ...",

      previewUrl: "/",
    },
    {
      id: 2,
      title: "happy Science",
      image: "/second.jpg",
      description: "Lire la suite ... ",

      previewUrl: "/", 
    },
   
    {
      id: 3,
      title: "happy Science",
      image: "/third.jpg",
      description: "Lire la suite ... ",

      previewUrl: "/",
    },
   
    {
      id: 4,
      title: "happy Science",
      image: "/commercant.jpg",
      description: "Lire la suite ... ",
      previewUrl: "/",
    },
    {
     id: 5,
      title: "happy Science",
      image: "/third.jpg",
      description: "Lire la suite ... ",

      previewUrl: "/",
    },
    {
     id: 6,
      title: "happy Science",
      image: "/solution.jpg",
      description: "Lire la suite ... ",
      previewUrl: "/",
    },
    {
    id: 7,
      title: "happy Science",
      image: "/second.jpg",
      description: "Lire la suite ... ",
      previewUrl: "/",
    },
    {
      id: 8,
      title: "happy Science",
      image: "/first.jpg",
      description: "Lire la suite ... ",
      previewUrl: "/",
    },
  ]

const Blog = () => {
  return (
    <div className='container mx-auto '>
        {/* blog*/}
        <div className="relative">
            {/* background texte */}
            <div className="absolute -top-5 left-[24%] xl:top-8 text-center lg:left-[35%]">
            <p className="uppercase text-slate-300 text-opacity-25 dark:text-opacity-10 text-8xl tracking-widest leading-relaxed  font-semibold">
                posts
            </p>
            </div>
        </div>
        {/* content Blog */}
        <div className="flex flex-col justify-between gap-y-16 xl:gap-y-8 items-center h-fit-content">
          {/* text Blogs */}
          <div className="">
            <div className="flex items-center gap-2 font-semibold  text-6xl lg:text-8xl pt-8 xl:pt-20 uppercase">
              <p className="">Notre</p>
              <span className='text-second'>Blog</span>
            </div>
          </div>
          {/* chiffres et d'autres */}
          <div className="pb-[30px]  flex flex-col xl:grid grid-cols-4 gap-5 text-start xl:pt-[62px] px-[82px] ">
            {
                  posts.map((post, index) => {
                      return (
                        <div className="flex  justify-end gap-4 hover:drop-shadow-3xl hover:shadow-neutral-600  hover:transition-all hover:duration-100 hover: hover:translate-y-3" key={index}>
                            {/* block */}
                            <div className="flex flex-col justify-start items-start ">
                              {/* image */}
                              <div className="h-[200px]  rounded-t-lg group relative">
                                <Image alt='' src={post.image}  width={500} height={500} className="objet-fit rounded-t-md w-full h-full"/>
                                <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-second/60 bg-opacity-5 bg-rounded-t-lg hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
                                        
                                        <Link href={post.previewUrl} 
                                            className='w-14 h-14 border-2 relative rounded-full border-white hover:border-slate-100'>
                                            <HiEye className='h-10 w-10 text-white cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:text-white'/> 
                                        </Link>
                                </div>
                              
                              </div>
                                  {/* texte */}
                                  <div className=" bg-slate-800 w-full text-white p-4 rounded-b-md flex flex-col gap-y-2 leading-relaxed tracking-normal  text-start">
                                      <p className="uppercase font-medium leading-relaxed tracking-wider text-lg">{post.title}</p>
                                      <Link href="/blog">   
                                        <p className="flex items-center gap-2">{post.description} <FaArrowAltCircleRight /></p>
                                      </Link>
                                  </div>
                            </div>
                        </div>
                      )
                  })
              }
          </div>
        </div>
    </div>
  )
}

export default Blog
