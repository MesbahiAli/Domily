import React from "react";
import categorie from "/src/img/bg-client.png";


export default function Users() {
  return (
    <div className="py-4 bg-white" style={{
      backgroundImage: `url(${categorie})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
  }}>

      <div className="w-2/3 mt-4 py-4 mx-auto rounded-xl flex flex-col items-center">
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
           
          ].map((item, index) => (
            <div key={index} className="w-1/5 p-4 text-center">
              <a href={item.link}>
                <img
                  src={item.src}
                  alt={item.label}
                  className="mx-auto w-2/3 hover:opacity-80 hover:p-1 bg-orange-500 rounded-full shadow-md transition-opacity"
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
