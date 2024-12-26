import React, { useEffect, useRef, useState } from "react";

const Slider = () => {
  const [idx, setIdx] = useState(0);
  const intervalRef = useRef(null);
  const images = [
    "https://plus.unsplash.com/premium_photo-1734275012690-6d3006fba036?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
    "https://plus.unsplash.com/premium_photo-1733514691599-d4a2eb3ca7ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1730577836014-0689bfc83670?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
    "https://plus.unsplash.com/premium_photo-1681584472258-6ef06bfa771c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1732740674513-63afb262a988?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1733077151425-67af89045a9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1733514691461-f5a7efbe316b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1608086042577-50e786b68c84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D",
  ];

  const handleNext = () => {
    setIdx((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (idx) => {
    setIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setIdx((prev) => (prev + 1) % images.length);
    }, 3000);
  };

  const clearintervalRef = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleEnter = () => {
    clearintervalRef();
    console.log("i am inside");
  };

  const handleLeave = () => {
    startInterval();
  };

  useEffect(() => {
    startInterval();

    return () => clearintervalRef();
  }, []);

  return (
    <div>
      <h1 className="text-center text-2xl font-bold underline mb-5">
        IMAGE-SLIDER
      </h1>
      <div
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="flex items-center justify-between gap-4 "
      >
        <button
          onClick={() => handlePrev()}
          className="text-4xl font-bold bg-yellow-200 px-3 py-1 rounded"
        >
          &lt;
        </button>
        <img
          src={images[idx]}
          key={idx}
          className="h-[350px] w-[600px] object-cover transition-opacity duration-700 ease-in-out"
        />
        <button
          onClick={() => handleNext()}
          className="text-4xl font-bold bg-yellow-200 px-3 py-1 rounded"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Slider;
