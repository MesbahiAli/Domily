import Client_Nav from "./Components/Client_Nav";
import { Navbar } from "flowbite-react";
import { useState } from "react";
import Category from "./Components/Category";
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
import Footer from "./Components/Footer";
import ServiceCard from "./Components/ServiceCard";


const Cindex = () => {

  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    try {
      const response = await fetch(`http://localhost:8081/api/services/search?query=${searchQuery}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error(error);
    }
    setIsSearching(false);
  };

  
  const categories = [
    { id: 1, title: "Services Ménagers" },
    { id: 2, title: "Services de Bricolage" },
    { id: 3, title: "Soutien Scolaire et Coaching" },
    { id: 4, title: "Services de Jardinage" },
    { id: 5, title: "Services de Bien-Être" },
    { id: 6, title: "Services pour Enfants" },
    { id: 7, title: "Services pour Personnes Âgées" },
    { id: 8, title: "Services Technologiques" },
    { id: 9, title: "Transport et Livraison" },
    { id: 10, title: "Services Animaliers" }
  ];
  return (
    <div className="flex flex-col w-full bg-gray-50">
      <Client_Nav />

      <Navbar fluid className="fixed flex flex-col justify-center items-center top-20 -mt-2 z-50 w-full shadow-md">
       <div className="flex justify-center items-center w-full">
         <div className="relative">
           <input 
             value={searchQuery}
             onChange={(e) => setSearchQuery(e.target.value)}
             onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
             className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1"
             placeholder="Que rechercher-vous?"
           />
         </div>
         <button onClick={handleSearch} className="inline-flex items-center py-3.5 px-3 bg-orange-500 rounded-r-full">
           <svg className="w-4 h-4 me-2" fill="none" viewBox="0 0 20 20">
             <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
           </svg>
           {isSearching ? 'Recherche...' : 'Rechercher'}
         </button>
       </div>
     </Navbar>


      <div className="mt-40">
      {searchResults.length > 0 ? (
         <div className="w-full px-8">
           <h2 className="text-2xl font-bold mb-6">Résultats de recherche</h2>
           <div className="grid grid-cols-3 gap-4">
             {searchResults.map(service => (
               <ServiceCard key={service.id} service={service} />
             ))}
           </div>
         </div>
       ) : (
         <>
           <Category />
           <hr className="w-48 h-1 mx-auto mb-4 bg-orange-200" />
           {categories.map(category => (
             <HomeCard key={category.id} categoryId={category.id} title={category.title} />
           ))}
         </>
       )}
        <Footer />
      </div>
    </div>
  )
};

export default Cindex;