import React, { useState } from "react";

function ScrollableCards() {
  const slides = [
    { image: "https://picsum.photos/200/300", title: "Title 1", description: "Description 1" },
    { image: "https://picsum.photos/600/500", title: "Title 2", description: "Description 2" },
    { image: "https://picsum.photos/700/600", title: "Title 3", description: "Description 3" },
    { image: "https://picsum.photos/400/300", title: "Title 4", description: "Description 4" },
    { image: "https://picsum.photos/500/400", title: "Title 5", description: "Description 5" },
    { image: "https://picsum.photos/800/600", title: "Title 6", description: "Description 6" },
    { image: "https://picsum.photos/900/700", title: "Title 7", description: "Description 7" },
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
    <div className="w-full flex flex-col items-center pb-6">
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
              <div
                key={index}
                className="w-1/5 flex-shrink-0 m-2 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform"
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h4 className="text-lg font-bold">{slide.title}</h4>
                  <p className="text-sm text-gray-600">{slide.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {}
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
