import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Camera, Palette, Code, Globe, MoveLeft, MoveRight  } from 'lucide-react';



const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample portfolio items - you can replace with your own data
  const portfolioItems = [
    {
      id: 1,
      title: "Photography Portfolio",
      description: "Capturing life's precious moments with an artistic eye. Dedicated to freezing moments in time. With a keen eye for detail and a love for authentic emotions.",
      icon: <Camera className="w-16 h-16 text-[#f3fca0]" />,
      bgColor: "",
      textColor: "text-white"
    },
    {
      id: 1,
      title: "Photography Portfolio",
      description: "Capturing life's precious moments with an artistic eye. Dedicated to freezing moments in time. With a keen eye for detail and a love for authentic emotions.",
      icon: <Camera className="w-16 h-16 text-gray-600" />,
      bgColor: "",
      textColor: "text-white"
    },
    
  
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === portfolioItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? portfolioItems.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index:any) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto rounded-lg shadow-lg overflow-hidden">
      {/* Main carousel container */}
      <div className="relative h-96 overflow-hidden">
        {portfolioItems.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
              index === currentIndex ? 'translate-x-0' : 
              index < currentIndex ? '-translate-x-full' : 'translate-x-full'
            }`}
          >
            <div className={`w-full h-full ${item.bgColor} flex  relative`}>
              {/* Circular badge with icon */}
              <div className="absolute  top-[15%] left-1/2 transform -translate-x-1/2">
                <div className="w-64 h-64  rounded-full flex items-center justify-center shadow-lg">
                  {item.icon}
                </div>
              </div>
              
              {/* Content */}
              
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-opacity-0 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200 "
        aria-label="Previous slide"
      >
                <ChevronLeft className="w-6 h-6 text-[#f3fca0]" />

      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-transparent hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-all duration-200"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-[#f3fca0]" />
      </button>


    </div>
  );
};

export default Carousel;