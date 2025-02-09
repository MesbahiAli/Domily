import React from "react";
import { Label, Select, HR } from "flowbite-react";
import { useParams, Link } from "react-router-dom"; // Import useParams
import Client_Nav from "./Components/Client_Nav";
import HomeCard from "./Components/HomeCard";
import HomeCard1 from "./Components/HomeCard1"; 
import HomeCard2 from "./Components/HomeCard2";
import HomeCard3 from "./Components/HomeCard3"; 
import HomeCard4 from "./Components/HomeCard4";
import HomeCard5 from "./Components/HomeCard5"; 
import HomeCard6 from "./Components/HomeCard6";
import HomeCard7 from "./Components/HomeCard7"; 
import HomeCard8 from "./Components/HomeCard8";
import HomeCard9 from "./Components/HomeCard9"; 


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