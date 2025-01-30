import React from "react";
import { Label, Select, HR, Rating } from "flowbite-react";
import Client_Nav from "./Components/Client_Nav";
import { Link } from "react-router-dom";

const Cservice = () => {
  return (

    <>
      <Client_Nav />
      <div className="w-2/3 mt-24 py-4 mx-auto rounded-xl flex flex-col ">

        <div className="">
          <h1 className="text-4xl mb-8 text-center font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">Services <span class="underline underline-offset-3 decoration-8 decoration-orange-400 dark:decoration-blue-600">Ménagers</span></h1>
          <div className="grid grid-cols-7 gap-4">

            <div className="w-full mb-4 col-span-2">
              <div className="mb-2 block">
                <Label htmlFor="Services" value="Services" />
              </div>
              <Select id="Services" required>
                <option>Service</option>
                <option>Services Ménagers</option>
                <option>Services de Bricolage</option>
                <option>Soutien Scolaire et Coaching</option>
                <option>Services de Jardinage</option>
                <option>Services de Bien-Être</option>
                <option>Services pour Enfants</option>
                <option>Services pour Personnes Âgées</option>
                <option>Services Technologiques</option>
                <option>Transport et Livraison</option>
                <option>Services Animaliers</option>
              </Select>
            </div>

            <div className="w-full mb-4 col-span-2">
              <div className="mb-2 block">
                <Label htmlFor="secteur" value="Secteur" />
              </div>
              <Select id="secteur" required>
                <option>Meknes</option>
                <option>Ancienne Medina</option>
                <option>Belle vue</option>
                <option>Berrima</option>
                <option>Bourj Moulay Omar</option>
                <option>Dar Kebira</option>
                <option>El Bassatine</option>
                <option>El Mechouar Stinia</option>
                <option>Hamria</option>
                <option>Hay Salam</option>
              </Select>
            </div>

            <div className="w-full mb-4 col-span-2">
              <div className="mb-2 block">
                <Label value="Prix(DH)" />
              </div>
              <div className="relative">
                <input type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="100" required />
              </div>
            </div>

            <div className="w-full mb-4 flex items-end">

              <button type="submit" class="inline-flex items-center py-2.5 px-3 text-sm font-medium text-white bg-orange-500 rounded-lg border border-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-orange-700 dark:focus:ring-yellow-800">
                <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>Recherche
              </button>
            </div>

          </div>

          <HR.Trimmed />

          <div className="grid grid-cols-3 gap-4">

            <Link to="/servicedetails" className="hover:bg-gray-50 rounded-xl p-4 border shadow-md">
              
              <div className="flex flex-row justify-between px-4 mb-4">
                  <h5 className="text-xl text-center font-bold text-gray-900 dark:text-white">
                    Ali Misbahi
                  </h5>

                  <Rating>
                    <Rating.Star />
                    <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">4.95</p>
                  </Rating>
              </div>

              
              <hr />

              <p className="font-normal my-4 text-justify text-gray-700 dark:text-gray-400">
                Dépoussiérage et nettoyage des meubles, étagères, tables, et autres surfaces.
                Essuyage des vitres, miroirs et fenêtres pour un résultat impeccable.
                Nettoyage des murs (si nécessaire) pour éliminer les tâches ou traces.
              </p>

              <hr />


              <h5 className="text-xl mt-4 font-semibold text-center text-gray-900 dark:text-white">
                200DH
              </h5>

            </Link>

          </div>

        </div>

      </div>
    </>
  );
}

export default Cservice;

