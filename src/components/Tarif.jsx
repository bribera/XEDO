"use client"
import React, {useState} from 'react'
import TarifCard from './TarifCard'
import TarifTag from './TarifTag'

const tarifs = [
    
    {
      id: 2,
      categorie: "Entreprise",
      title: "Rechargement de compte",
      prix: "Tarif unique",
      // temps: "par mois",
      // image: "/protegeons.jpg",
      first: "Prélèvement de 1,2% sur chaque rechargement éffectué ",
      second: "Rechargement de portefeuille",
      third: "Envoyez monnaie et cashback",
      four: "Listes de vos clients(e)",
      five: "Statistiques",
      tag: ["All", "Entreprise"], 
    },
   
    {
      id: 4,
      categorie: "Particulier",
      title: "Abonemment de carte",
      prix: "3000 F CFA",
      temps: "par ans",
      // image: "/cas2.png",
      first: "Possibilité de payer plusieurs cartes",
      second: "Payemment",
      // third: "Listes de distributeurs partenaires",
      // four: "Statistiques",
      // five: "1% sur chaque paiement éffectué",
      tag: ["All", "Entreprise"],
    },
    // {
    //  id: 5,
    //   categorie: "Particulier",
    //   title: "Standard",
    //   image: "/japonais.jpg",
    //   first: "Rechargement de portefeuille",
    //   second: "Envoyez monnaie et cashback",
    //   third: "Listes de vos distributeurs partenaires",
    //   four: "Statistiques",
    //   five: "1% sur chaque paiement éffectué",
    //   tag: ["All", "Particulier"],
    // },
    // {
    //  id: 6,
    //   categorie: "Particulier",
    //   title: "Premium",
    //   image: "/anglais.jpg",
    //   first: "Rechargement de portefeuille",
    //   second: "Envoyez monnaie et cashback",
    //   third: "Listes de vos distributeurs partenaires",
    //   four: "Statistiques",
    //   five: "1% sur chaque paiement éffectué",
    //   tag: ["All", "Particulier"],
    // },
  ]

const Tarif = () => {
    const [tag, setTag] = useState("All")

    const handleTagChange = (newTag) => (
      setTag(newTag)
    )
  
    const filteredTarifs = tarifs.filter((tarif) => 
      tarif.tag.includes(tag)
    )
  return (
    <div>
      <div className='  overflow-auto '>
        <div className="">
         {/* title tarifs */}
        
            <div className=" justify-center flex items-center py-[50px]">
                <p className="text-[45px] xl:text-[50px] text-third">Les Tarifs</p>
            </div>
            {/* content Portofolio */}
            <div className=" flex flex-col justify-between gap-y-16 xl:gap-y-8 items-center h-full">
            
            
            {/* projets */}
            <div className=" text-white flex flex-row gap-x-2 xl:gap-x-4 ">
                <TarifTag 
                onClick={handleTagChange}
                name="All"
                isSelected={tag === "All"}
                />
                <TarifTag 
                onClick={handleTagChange}
                name="Entreprise"
                isSelected={tag === "Entreprise"}
                />
                <TarifTag 
                onClick={handleTagChange}
                name="Particulier"
                isSelected={tag === "Particulier"}
                />
            </div>
            <div className="container flex flex-col gap-y-2 md:grid md:grid-cols-2 gap-4 pb-[40px] w-full h-full ">
                {
                filteredTarifs.map((tarif, id) => (
                    <TarifCard
                    key={tarif.id} 
                    categorie={tarif.categorie}  
                    title={tarif.title} 
                    prix={tarif.prix} 
                    temps={tarif.temps} 
                    first={tarif.first} 
                    second={tarif.second} 
                    third={tarif.third} 
                    four={tarif.four} 
                    five={tarif.five} 
                    tags={tarif}
                    />
                ))
                }
            </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Tarif
