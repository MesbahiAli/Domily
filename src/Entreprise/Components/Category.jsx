import React from "react";
import { Link } from "react-router-dom";
import categorie from "/src/img/bg-caterogies.png";

export default function Category() {
  return (
    <div className="rounded-xl shadow-md" style={{
      backgroundImage: `url(${categorie})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
  }}>
      <div className="w-2/3 mt-4 py-4 mx-auto flex flex-col items-center">
      
        <h1 className="mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
          Toutes les{" "}
          <span className="underline underline-offset-3 decoration-8 decoration-orange-400 dark:decoration-blue-600">
            catégories
          </span>
        </h1>
        <div className="flex flex-wrap justify-around items-center mt-8">
          {[
            {
              src: "/src/img/clean.png",
              label: "Services Ménagers",
              link: "/Eservice/menagers",
            },
            {
              src: "/src/img/brico.png",
              label: "Services de Bricolage",
              link: "/Eservice/bricolage",
            },
            {
              src: "/src/img/edu.png",
              label: "Soutien Scolaire et Coaching",
              link: "/Eservice/scolaire",
            },
            {
              src: "/src/img/garden.png",
              label: "Services de Jardinage",
              link: "/Eservice/jardinage",
            },
            {
              src: "/src/img/well.png",
              label: "Services de Bien-Être",
              link: "/Eservice/bien-etre",
            },
            {
              src: "/src/img/kid.png",
              label: "Services pour Enfants",
              link: "/Eservice/enfants",
            },
            {
              src: "/src/img/oold.png",
              label: "Services pour Personnes Âgées",
              link: "/Eservice/personnes-agees",
            },
            {
              src: "/src/img/elect.png",
              label: "Services Technologiques",
              link: "/Eservice/technologiques",
            },
            {
              src: "/src/img/livraison.png",
              label: "Transport et Livraison",
              link: "/Eservice/transport",
            },
            {
              src: "/src/img/pett.png",
              label: "Services Animaliers",
              link: "/Eservice/animaliers",
            },
          ].map((item, index) => (
            <div key={index} className="w-1/5 p-4 text-center">
              <Link to={item.link}>
                <img
                  src={item.src}
                  alt={item.label}
                  className="mx-auto w-2/3 hover:opacity-80 hover:p-1 bg-orange-500 rounded-full shadow-md transition-opacity"
                />
                <p className="mt-2 font-bold text-gray-900">{item.label}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
