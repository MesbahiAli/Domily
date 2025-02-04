import React, { useState, useEffect } from "react";
import { Rating } from "flowbite-react";
import { Link } from "react-router-dom";
import ServiceCard from './ServiceCard';

function HomeCard({ categoryId =1, title }) {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = 3;

  useEffect(() => {
    fetch(`http://localhost:8081/api/categories/${categoryId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data); // Log the API response
        if (data.services) {
          setServices(data.services);
        } else {
          console.error("No services found in the API response.");
          setServices([]); // Set services to an empty array to avoid errors
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
        setError("Failed to load services.");
        setLoading(false);
      });
  }, [categoryId]);



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
      <h1 className="text-2xl font-bold mb-6 text-orange-500">{title}</h1>

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
      width: "100%",
    }}
  >
    {services.map(service => (
      <ServiceCard key={service.id} service={service} />
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

export default HomeCard;