import HariniImage from "../assets/images/testpic.jpg";
import "../styles/developer.css";
import React, { useState, useEffect } from "react";
import img1 from "../assets/images/sivani.jpg"
import img2 from "../assets/images/visvess.jpg"
import img3 from "../assets/images/harini.jpg"


const developers = [
  {
    name: "Harini",
    role: "//Frontend Developer",
    src: img3,
    linkedin: "https://linkedin.com/in/harini",
  },
  {
    name: "Sivanipriya",
    role: "//Frontend Developer",
    src: img1,
    linkedin: "https://linkedin.com/in/sivanipriya",
  },
  {
    name: "Visvesswar",
    role: "//Backend Developer",
    src: img2,
    linkedin: "https://linkedin.com/in/visvesswaram",
  },
  {
    name: "Lakshay",
    role: "//Backend Developer",
    src: HariniImage,
    linkedin: "https://linkedin.com/in/lakshay",
  },
];

const Developers = () => {
  const [visibleDevelopers, setVisibleDevelopers] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCarousel, setShowCarousel] = useState(false);
  const currentDevelopers = [];
  for (let i = 0; i < visibleDevelopers; i++) {
    currentDevelopers.push(developers[(currentIndex + i) % developers.length]);
  }
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + developers.length) % developers.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % developers.length);
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width > 1200) {
        setVisibleDevelopers(4); // Desktop view
        setShowCarousel(false);
      } else if (width > 768) {
        setVisibleDevelopers(3); // Tablet view
        setShowCarousel(true); // Show carousel buttons
      } else if (width > 480) {
        setVisibleDevelopers(2); // Smaller tablet
        setShowCarousel(true); // Show carousel buttons
      } else {
        setVisibleDevelopers(1); // Mobile view
        setShowCarousel(true); // Show carousel buttons
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="developers" id="developers">
        <h2 className="text-5xl font-bold text-[#fcfcfc] text-center mb-8 overflow-hidden [text-shadow:6px_2px_4px_#c03e3e]">developers</h2>
        <div className="developers-carousel">
          {/* Map through currentDevelopers */}
          {currentDevelopers.map((developer, index) => (
            <div key={index} className="developer-card ">
              <img
                src={developer.src}
                alt={developer.name}
                className="developer-photo "
              />
              <h3 className="overflow-hidden">{developer.name}</h3>
              <p className="overflow-hidden">{developer.role}</p>
              <a
                href={developer.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="overflow-hidden "
              >
                <button className="overflow-hidden hover:!bg-[#693939]">↔ LinkedIn ↔</button>
              </a>
            </div>
          ))}

          {/* Show carousel buttons on smaller screens */}
          {showCarousel && (
            <>
              <div className="carousel-button left" onClick={handlePrev}>
                ←
              </div>
              <div className="carousel-button right" onClick={handleNext}>
                →
              </div>
            </>
          )}
        </div>
      </div>
  );
};
export default Developers;
