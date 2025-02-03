import React from "react";
import { Label, Select, HR } from "flowbite-react";
import { useParams, Link } from "react-router-dom"; // Import useParams
import Client_Nav from "./Components/Provider_Nav";
import HomeCard from "../Client/Components/HomeCard";
import HomeCard1 from "../Client/Components/HomeCard1"; 
import HomeCard2 from "../Client/Components/HomeCard2";
import HomeCard3 from "../Client/Components/HomeCard3"; 
import HomeCard4 from "../Client/Components/HomeCard4";
import HomeCard5 from "../Client/Components/HomeCard5"; 
import HomeCard6 from "../Client/Components/HomeCard6";
import HomeCard7 from "../Client/Components/HomeCard7"; 
import HomeCard8 from "../Client/Components/HomeCard8";
import HomeCard9 from "../Client/Components/HomeCard9"; 


const Cservice = () => {
  const { category } = useParams(); // Extract the category from the URL

  const renderComponent = () => {
    switch (category) {
      case "menagers":
        return <HomeCard />;
      case "bricolage":
        return <HomeCard1 />;
      case "jardinage":
        return <HomeCard2 />;
      case "bien-etre":
        return <HomeCard3 />;
      case "enfants":
        return <HomeCard4 />;
      case "personnes-agees":
        return <HomeCard5 />;
      case "technologiques":
        return <HomeCard6 />;
      case "transport":
        return <HomeCard7 />;
      case "animaliers":
        return <HomeCard8 />;
      case "scolaire":
        return <HomeCard9 />;
      default:
        return <HomeCard />; // Default component
    }
  };

  // Function to format the category name for display
  const formatCategoryName = (category) => {
    return category
      .split("-") // Split by hyphens
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
      .join(" "); // Join with spaces
  };

  return (
    <>
      <Client_Nav />
      <div className="w-2/3 mt-24 py-4 mx-auto rounded-xl flex flex-col">
        <div>
          {/* Dynamically display the category name */}
          <h1 className="text-4xl mb-8 text-center font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
            Services{" "}
            <span className="underline underline-offset-3 decoration-8 decoration-orange-400 dark:decoration-blue-600">
              {formatCategoryName(category)}
            </span>
          </h1>

          {/* Filters and search button */}
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
                <input
                  type="number"
                  id="number-input"
                  aria-describedby="helper-text-explanation"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="100"
                  required
                />
              </div>
            </div>

            <div className="w-full mb-4 flex items-end">
              <button
                type="submit"
                className="inline-flex items-center py-2.5 px-3 text-sm font-medium text-white bg-orange-500 rounded-lg border border-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-orange-700 dark:focus:ring-yellow-800"
              >
                <svg
                  className="w-4 h-4 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                Recherche
              </button>
            </div>
          </div>

          <HR.Trimmed />

          {/* Render the appropriate component */}
          <div className="hover:bg-gray-50 rounded-xl p-4 border shadow-md">
            <hr className="w-48 h-1 mx-auto mb-4 bg-orange-200 border-0 rounded md:my-10 dark:bg-gray-700" />
            {renderComponent()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cservice;