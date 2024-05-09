"use client"
import React, { useState } from "react";
import Accordion from "./Accordion";
import AccordionParticulier from "./AccordionParticulier";


const particulier = [
  {
    id: 1,
    question: "What is Next.Js ?",
    answer: "The React Framework for Production",
  },
  {
    id: 2,
    question: "What is Tailwindcss ?",
    answer:
      "A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
  },
  {
    id: 3,
    question: "What is art ?",
    answer:
      " a visual object or experience consciously created through an expression of skill or imagination.",
  },
];

const data = [
  {
    id: 1,
    question1: "What is Next.Js ?",
    answer1: "The React Framework for Production",
  },
  {
    id: 2,
    question1: "What is Tailwindcss ?",
    answer1:
      "A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
  },
  {
    id: 3,
    question1: "What is art ?",
    answer1:
      " a visual object or experience consciously created through an expression of skill or imagination.",
  },
];

const Faq = () => {

  

  return (
    <div className="">

    <div className="relative">
        {/* background texte */}
        <div className="absolute -top-4 left-[10%] md:left-[20%] xl:left-[30%] xl:top-8 text-center lg:left-[35%]">
          <p className="uppercase text-slate-300 text-opacity-25  text-7xl tracking-widest leading-relaxed  font-semibold">
              questions
          </p>
        </div>
        <div className="absolute left-[10%] xl:left-[30%] flex gap-5 justify-center items-center flex-col -top-6">
            <div className="flex  items-center gap-2 font-semibold  text-6xl lg:text-8xl pt-8 xl:pt-20 uppercase">
              <p className="">Notre</p>
              <span className='text-second'>FAQ</span>
            </div>
            <div className="">
              <p className=" text-[20px] xl:text-[24px] text-center ">Les questions que nos utilisateurs nous posent souvent</p>
            </div>
          </div>
    </div>

  {/* les entreprises */}
    <div className=" pt-52  w-full ">
      <div className="py-5 ">
        <div className="pb-10 text-[42px] font-bold uppercase leading-normal tracking-wide">
          Pour les entreprises
        </div>
        <div className=" w-full border-[1px] border-second rounded-xl p-5">
        {
            data && data.map((info, index) => {
              return (

                <Accordion 
                key={index} 
                question1 = {info.question1}
                answer1 = {info.answer1}
              
                />   
              )
            })
          }  
        </div>
      </div>
    </div>


  {/* les particuliers */}
    <div className=" py-20  w-full">
      <div className="py-5">
        <div className="pb-10 text-[42px] uppercase font-bold leading-normal tracking-wide">
          Pour les particuliers
        </div>
        <div className=" w-full bg-white  border-[1px] border-second rounded-xl p-5">
          {
            particulier && particulier.map((data, index) => {
              return (

                <AccordionParticulier 
                key={index} 
                question = {data.question}
                answer = {data.answer}
              
                />   
              )
            })
          }
        </div>
      </div>
    </div>
    </div>
  )
}

export default Faq
