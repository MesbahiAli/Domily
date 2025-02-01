import Client_Nav from "./Components/Client_Nav";
import { Navbar } from "flowbite-react";
import { useState } from "react";
import Category from "./Components/Category";
import HomeCard from "./Components/HomeCard";
import HomeCard1 from "./Components/HomeCard1";
import HomeCard2 from "./Components/HomeCard2";
import HomeCard3 from "./Components/HomeCard3";
import Footer from "./Components/Footer";


const Cindex = () => {

  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);

  return (
    <div className="flex flex-col w-full bg-gray-50">
      <Client_Nav />

      <Navbar fluid className="fixed flex flex-col justify-center items-center top-20 -mt-2 z-50 w-full shadow-md">
        <Navbar.Toggle />
        <div className="flex justify-center items-center w-full">
          <div className="relative">
            <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-300 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-800 px-2 peer-focus:px-2 peer-focus:text-orange-600 peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Que rechercher-vous?</label>
          </div>

          <button type="submit" className="inline-flex items-center justify-center py-3.5 px-3 text-sm font-medium text-white bg-orange-500 rounded-r-full rounded-l-lg border border-orange-50 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-500 dark:hover:bg-orange-700 dark:focus:ring-blue-800">
            <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>Rechercher
          </button>
        </div>
      </Navbar>


        <Category />
        <HomeCard />
        <HomeCard1 />
        <HomeCard2 />
        <HomeCard3 />
        <Footer />
      </div>
  )
};

export default Cindex;
