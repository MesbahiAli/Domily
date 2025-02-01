import React, { useState } from "react";
import { Rating } from "flowbite-react";
import { Link } from "react-router-dom";


function ScrollableCards() {
  const slides = [
    { title: "Nom et prenom", description: "Description 1", price: "150DH" },
    { title: "Nom et prenom 2", description: "Description 2", price: "150DH" },
    { title: "Nom et prenom 3", description: "Description 3", price: "150DH" },
    { title: "Nom et prenom 4", description: "Description 4", price: "150DH" },
    { title: "Nom et prenom 5", description: "Description 5", price: "150DH" },
    { itle: "Nom et prenom 6", description: "Description 6", price: "150DH" },
    { title: "Nom et prenom 7", description: "Description 7", price: "150DH" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = 6;

  const handleScroll = (direction) => {
    const totalSlides = slides.length;
    if (direction === "right") {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    } else {
      setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    }
  };

  return (
    <div className="w-full flex flex-col items-center py-6">
      <h1 className="text-2xl font-bold mb-6 text-orange-500">Services Ménagers</h1>

      <div className="relative w-full flex items-center justify-center">

        <button
          className="absolute left-8 z-10 bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition disabled:opacity-50"
          onClick={() => handleScroll("left")}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>



        <div className="overflow-hidden w-5/6 relative">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
              width: `${(slides.length / cardsPerView) * 100}%`,
            }}
          >
            {slides.map((slide, index) => (
              <Link to="/servicedetails"
                key={index}
                className="w-1/5 flex-shrink-0 m-2 bg-white transform hover:scale-105 transition-transform hover:bg-gray-50 rounded-xl p-4 border shadow-md"
              >
                <div className="flex flex-row justify-between px-4 mb-4">
                  <h4 className="text-lg font-bold text-gray-900">
                    {slide.title}
                  </h4>
                  <Rating>
                    <Rating.Star />
                    <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">4.95</p>
                  </Rating>
                </div>
                <hr />

                <p className="font-normal my-4 text-justify text-gray-700 dark:text-gray-400">
                  {slide.description}
                </p>

                <hr />

                <h5 className="text-xl mt-4 font-semibold text-center text-gray-900 dark:text-white">
                  {slide.price}
                </h5>
              </Link>
            ))}
          </div>
        </div>

        { }
        <button
          className="absolute right-8 z-10 bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition disabled:opacity-50"
          onClick={() => handleScroll("right")}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ScrollableCards;
