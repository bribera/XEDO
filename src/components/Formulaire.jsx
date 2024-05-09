/* eslint-disable react/no-unescaped-entities */
"use client"
import React, {useState} from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup.object({
  name:yup.string().required('Le nom est obligatoire'),
  surname:yup.string().required("Le prenom est obligatoire"),
  logo:yup.string().required("Le logo est obligatoire"),
  sexe:yup.string().required("Le sexe est obligatoire"),
  activity:yup.string().required("Le type d'activité est obligatoire"),
  pourcent:yup.string().required("Le pourcentage est obligatoire"),
  adresse:yup.string().required("L'adresse est obligatoire"),
  facebook:yup.string().required("Le lien facebook est obligatoire"),
  whatsapp:yup.string().required("Le lien instagram est obligatoire"),
  intineraire:yup.string().required("L'itinéraire est obligatoire"),
  mail:yup.string().required().matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "L'email n'est pas correcte"),
  phone:yup.number().required().required("L'itinéraire est obligatoire"),
  // message:yup.string().required(),
  password:yup.string().min(8,"le mot de passe doit comporter au moins 8 caractères").required("Ce champs est obligatoire"),
//   confirmpassword:yup.string().oneOf([yup.ref("password")], "Le mot de passe doit correspondre").required("Ce champs est obligatoire"),
  societe:yup.string().required("Ce champs est obligatoire"),
})

const Formulaire = () => {
    
    const [values, setValues] = useState({
        name:"",
        surname:"",
        mail:"",
        logo:"",
        sexe:"",
        activity:"",
        pourcent:"",
        itineraire:"",
        adresse:"",
        whatsapp:"",
        phone:"",
        facebook:"",
        societe:"",
        password:"",
        confirmpassword:"",
        message:"",
      })
    
      const {handleSubmit, register, formState: {errors}, reset} = useForm({
        initials:values,
        resolver:yupResolver(schema)
      })
    
      // console.log(formState)
    
      const formSubmit = (data) => {
        console.log(data)
        reset()
      }
    
    return(
    <div>
        <div className="">

            <div className="flex flex-col items-center py-10 gap-2 font-semibold  text-6xl lg:text-8xl pt-8 xl:pt-20 ">
                <p className="uppercase">Formulaire</p>
                <p className="text-[20px] xl:text-[24px] text-center font-normal">Remplissez le formulaire ci-dessous pour créer et enregister un compte qur Xèdo. </p>
            </div>
            <div className="flex border border-second rounded-md">
                <div className=" w-fit relative basis-[45%] connexion">
                    {/* <Image alt='enregistrement compte' width={500} height={500} src="/connexion.png" className='object-fill w-[100%]'/> */}
                </div>
                <div className="py-14 px-10  basis-[55%]">
                    <form action="" className='' onSubmit={handleSubmit(formSubmit)}>
                        {/* name and information du  propriétaire */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-5 justify-start items-start">
                            {/* name entreprise*/}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="" className="text-[20px]  md:text-[24px] leading-relaxed tracking-wide font-semibold">Nom de l'entreprise</label>
                                <input type="text" id="name" value={values.name} name='name' register={{...register("name")}}  className='p-2 border py-[10px]  border-second' />
                            </div>
                            {/* email entreprise*/}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="" className="text-[20px]  md:text-[24px] leading-relaxed tracking-wide font-semibold">Email de l'entreprise</label>
                                <input type="email" id="mail" value={values.mail} name='mail' register={{...register("mail")}} className='p-2 border py-[10px]  border-second' />
                            </div>
                            {/* password de l'entreprise*/}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="" className="text-[20px]  md:text-[24px] leading-relaxed tracking-wide font-semibold">Password</label>
                                <input type="text" id='password' value={values.password} name='password' register={{...register("password")}} className='p-2 border py-[10px] border-second' />
                            </div>
                            {/* phone entreprise*/}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="" className="text-[20px]  md:text-[24px] leading-relaxed tracking-wide font-semibold">Numéro de l'entreprise</label>
                               <span className=""></span> <input type="number" value={values.phone} name='phone' register={{...register("phone")}} id="phone" className='p-2 border py-[10px] border-second' />
                            </div>
                            {/* adresse de l'entreprise*/}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="" className="text-[20px]  md:text-[24px] leading-relaxed tracking-wide font-semibold">Adresse de l'entreprise</label>
                                <input type="text" value={values.adresse} name='adresse' register={{...register("adresse")}} id="adresse" className='p-2 border py-[10px] d border-second' />
                            </div>
                            {/* logo de l'entreprise*/}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="" className="text-[20px]  md:text-[24px] leading-relaxed tracking-wide font-semibold">Logo de l'entreprise</label>
                                <input type="file" value={values.logo} name='logo' register={{...register("logo")}} id="logo" className='p-2 border py-[10px] border-second' />
                            </div>
                            {/* nom du propriétaire*/}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="" className="text-[20px]  md:text-[24px] leading-relaxed tracking-wide font-semibold">Nom du propriétaire</label>
                                <input type="text" value={values.name} name='name' register={{...register("name")}} id="" className='p-2 border py-[10px] d border-second' />
                            </div>
                            {/*prénom du propriétaire*/}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="" className="text-[20px]  md:text-[24px] leading-relaxed tracking-wide font-semibold">Prénom du propriétaire</label>
                                <input type="text" value={values.surname} name='surname' register={{...register("surname")}} id="surname" className='p-2 border py-[10px] d border-second' />
                            </div>
                            {/* sexe du propriétaire*/}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="sexe" className="text-[2 0px] md:text-[24px] leading-relaxed tracking-wide font-semibold">Sexe du propriétaire</label>
                                <select id="sexe" value={values.sexe} name='sexe' className='p-2 border py-[10px] border-second'>
                                    <option value="féminin" className='text-[20px] md:text-[24px] leading-relaxed tracking-wide font-medium'>Féminin</option>
                                    <option value="masculin" className='text-[20px] md:text-[24px] leading-relaxed tracking-wide font-medium select-text:text-[24px]' selected>Masculin</option>
                                </select>
                            </div>
                            {/* type d'activité de l'entreprise*/}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="activity" className="text -[20px] md:text-[24px] leading-relaxed tracking-wide font-semibold">Type d'activité</label>
                                <select id="activity" value={values.activity} name='activity' className='p-2 border py-[10px] d border-second'>
                                    <option value="pharmacie" className='text-[20px] md:text-[24px] leading-relaxed tracking-wide font-medium'>Pharmacie</option>
                                    <option value="hopital" className='text-[20px] md:text-[24px] leading-relaxed tracking-wide font-medium' selected>Hopital</option>
                                    <option value="restaurant" className='text-[20px] md:text-[24px] leading-relaxed tracking-wide font-medium' >Chef Restaurant</option>
                                </select>
                            </div>
                            {/* pourcentage pour l'entreprise*/}
                            <div className="flex flex-col gap-5">
                                <label htmlFor="pourcent" className="text-[20px] md:text-[24px] leading-relaxed tracking-wide font-semibold">Pourcentage de l'entreprise</label>
                                <input type='text' value={values.pourcent} name='pourcent' register={{...register("pourcent")}} id="pourcent" className='p-2 border py-[10px] d' />
                                {/* <select id="pourcent" value={values.pourcent} name='pourcent' className='p-2 border py-[10px] d border-second'>
                                    <option value="1" className='text-[20px] md:text-[24px] leading-relaxed tracking-wide font-medium'>1%</option>
                                    <option value="2" className='text-[20px] md:text-[24px] leading-relaxed tracking-wide font-medium'>2%</option>
                                    <option value="3" className='text-[20px] md:text-[24px] leading-relaxed tracking-wide font-medium'>3%</option>
                                    <option value="4" className='text-[20px] md:text-[24px] leading-relaxed tracking-wide font-medium'>4%</option>
                                    <option value="5" className='text-[20px] md:text-[24px] leading-relaxed tracking-wide font-medium'>5%</option>
                                    <option value="6" className='text-[20px] md:text-[24px] leading-relaxed tracking-wide font-medium' selected>6%</option>
                                </select> */}
                            </div>                       
                            
                        </div>
                        <div className="flex flex-col gap-2 pt-5">
                            {/*lien facebook*/}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="facebook" className='text-[20px] md:text-[24px] leading-relaxed tracking-wide font-semibold'>Lien facebook </label>
                                <input type='text' value={values.facebook} name='facebook' register={{...register("facebook")}} id="facebook" className='p-2 border py-[10px] d' />
                            </div>
                            {/*lien whatsap*/}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="whatsapp" className='text-[20px] md:text-[24px] leading-relaxed tracking-wide font-semibold'>Lien whatsapp  </label>
                                <input type='text' value={values.whatsapp} name='whatsapp' register={{...register("whatsapp")}} id="whasapp" className='p-2 border py-[10px] d' />
                            </div>
                            {/*lien de l'itinéraire*/}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="itineraire" className='text-[20px] md:text-[24px] leading-relaxed tracking-wide font-semibold'>Lien itinéraire </label>
                                <input type='text' value={values.itineraire} name='itineraire' register={{...register("iteneraire")}} id="itineraire" className='p-2 border py-[10px] d' />
                            </div>

                        </div>
                        <div className="py-10">
                            <button type='submit' className='btn1 w-full'>Envoyez</button>
                        </div>
                    </form>
                </div>
                

            </div>
        </div>
    </div>
)}

export default Formulaire
