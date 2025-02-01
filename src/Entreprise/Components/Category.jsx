import React from "react";
import categorie from "/src/img/bg-caterogies.png";


export default function Category() {
  return (

    <div className="rounded-xl shadow-md" style={{
      backgroundImage: `url(${categorie})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
  }}>
    <div className="w-2/3 py-8 mx-auto flex flex-col items-center"
    >

    
      <h1 class="mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">Toutes les <span class="underline underline-offset-3 decoration-8 decoration-orange-400 dark:decoration-blue-600">catégories</span></h1>
      <div className="flex flex-wrap justify-around items-center mt-8">
        {[
          {
            src: "/src/img/clean.png",
            label: "Services Ménagers",
            link: "/Cservice",
          },
          {
            src: "/src/img/brico.png",
            label: "Services de Bricolage",
            link: "/Cservice",
          },
          {
            src: "/src/img/edu.png",
            label: "Soutien Scolaire et Coaching",
            link: "/trucks",
          },
          {
            src: "/src/img/garden.png",
            label: "Services de Jardinage",
            link: "/services",
          },
          {
            src: "/src/img/well.png",
            label: "Services de Bien-Être ",
            link: "/jobs",
          },
          {
            src: "/src/img/kid.png",
            label: "Services pour Enfants",
            link: "/animals",
          },
          {
            src: "/src/img/oold.png",
            label: "Services pour Personnes Âgées",
            link: "/furniture",
          },
          {
            src: "/src/img/elect.png",
            label: "Services Technologiques ",
            link: "/fashion",
          },
          {
            src: "/src/img/livraison.png",
            label: "Transport et Livraison",
            link: "/books",
          },
          {
            src: "/src/img/pett.png",
            label: "Services Animaliers ",
            link: "/kids",
          },
        ].map((item, index) => (
          <div key={index} className="w-1/5 p-4 text-center">
            <a href={item.link}>
              <img
                src={item.src}
                alt={item.label}
                className="mx-auto hover:opacity-80 hover:p-1 bg-orange-500 rounded-full border shadow-md transition-opacity"
              />
              <p className="mt-2 font-bold text-gray-900">{item.label}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
