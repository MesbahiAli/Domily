import React from "react";
import { Link } from "react-router-dom";
import categorie from "/src/img/bg-client.png";

export default function Category() {
  return (
    <div
      className="mt-36 py-4 bg-white"
      style={{
        backgroundImage: `url(${categorie})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-2/3 mt-4 py-4 mx-auto rounded-xl flex flex-col items-center">
        <h1 className="mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
          Toutes les{" "}
          <span className="underline underline-offset-3 decoration-8 decoration-orange-400 dark:decoration-blue-600">
            catégories
          </span>
        </h1>
        <div className="flex flex-wrap justify-around items-center mt-8">
          {[
            {
              src: "/src/img/categories1.png",
              label: "Services Ménagers",
              link: "/Cservice/menagers", // URL-friendly
            },
            {
              src: "/src/img/categories2.png",
              label: "Services de Bricolage",
              link: "/Cservice/bricolage", // URL-friendly
            },
            {
              src: "/src/img/categories3.png",
              label: "Soutien Scolaire et Coaching",
              link: "/Cservice/scolaire", // URL-friendly
            },
            {
              src: "/src/img/categories4.png",
              label: "Services de Jardinage",
              link: "/Cservice/jardinage", // URL-friendly
            },
            {
              src: "/src/img/categories5.png",
              label: "Services de Bien-Être",
              link: "/Cservice/bien-etre", // URL-friendly
            },
            {
              src: "/src/img/categories6.png",
              label: "Services pour Enfants",
              link: "/Cservice/enfants", // URL-friendly
            },
            {
              src: "/src/img/categories7.png",
              label: "Services pour Personnes Âgées",
              link: "/Cservice/personnes-agees", // URL-friendly
            },
            {
              src: "/src/img/categories8.png",
              label: "Services Technologiques",
              link: "/Cservice/technologiques", // URL-friendly
            },
            {
              src: "/src/img/categories9.png",
              label: "Transport et Livraison",
              link: "/Cservice/transport", // URL-friendly
            },
            {
              src: "/src/img/categories10.png",
              label: "Services Animaliers",
              link: "/Cservice/animaliers", // URL-friendly
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