import React, { useState, useEffect } from "react";
import { Rating } from "flowbite-react";
import { Link } from "react-router-dom";

function ScrollableCards() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = 3;

  useEffect(() => {
    fetch("http://localhost:8081/api/categories/5")
      .then((response) => response.json())
      .then((data) => {
        setServices(data.services);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
        setError("Failed to load services.");
        setLoading(false);
      });
  }, []);

  const handleScroll = (direction) => {
    const totalSlides = services.length;
    if (direction === "right") {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    } else {
      setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    }
  };

  if (loading) {
    return <p className="text-center text-gray-500">Loading services...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="w-full flex flex-col items-center pb-6">
      <h1 className="text-2xl font-bold mb-6 text-orange-500">Services pour Enfants</h1>

      <div className="relative w-full flex items-center justify-center">
        <button
          className="absolute left-8 z-10 bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition disabled:opacity-50"
          onClick={() => handleScroll("left")}
        >
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="overflow-hidden w-5/6 relative">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
              width: `${(services.length / cardsPerView) * 100}%`,
            }}
          >
            {services.map((service) => (
             <Link to={`/servicedetails/${service.provider.id}`} key={service.id} 
                           className="w-1/5 flex-shrink-0 m-2 bg-white transform hover:scale-105 transition-transform hover:bg-gray-50 rounded-xl p-4 border shadow-md">
                             {/* Provider Name + Service Name */}
                {/* Provider Name + Service Name */}
                <div className="flex flex-row justify-between px-4 mb-4 items-center">
                  <h4 className="text-lg font-bold text-gray-900">
                    {service.provider?.nom} {service.provider?.prenom}
                  </h4>
                  <Rating>
                    <Rating.Star />
                    <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">4.95</p>
                  </Rating>
                </div>

                <hr />

                {/* Service Name */}
                <h5 className="text-lg mt-2 font-semibold text-center text-gray-900 dark:text-white">
                  {service.name}
                </h5>

                {/* Service Description */}
                <p className="font-normal my-4 text-justify text-gray-700 dark:text-gray-400">
                  {service.description}
                </p>

                <hr />

                {/* Service Price */}
                <h5 className="text-xl mt-4 font-semibold text-center text-gray-900 dark:text-white">
                  {service.price} DH
                </h5>
              </Link>
            ))}
          </div>
        </div>

        <button
          className="absolute right-8 z-10 bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition disabled:opacity-50"
          onClick={() => handleScroll("right")}
        >
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ScrollableCards;
