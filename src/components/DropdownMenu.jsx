import React, { useState } from "react";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import list from "../list.json";

function ServiceButtons({ setSelectedService }) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleServiceSelection = (service) => {
    setSelectedService(service);
    setSelectedOption(service);
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex justify-center items-center space-x-5 m-10">
        {list
          .filter((item) => item.service && item.service.trim() !== "")
          .slice(0, 3) // Limit to first 3 services
          .map((item, i) => (
            <button 
              onClick={() => handleServiceSelection(item.service)}
              className={`${
                selectedOption === item.service
                  ? "bg-amber-400 text-white"
                  : "bg-yellow-600 text-white"
              } p-2 flex items-center justify-between font-bold text-base rounded-full tracking-wider border-4 border-transparent active:border-white duration-300 mb-2 `}
              key={i}
            >
              <span>{item.service}</span>
              <span className="text-xl">{item.emoticon}</span>
            </button>
          ))}
      </div>
    </div>
  );
}

export default ServiceButtons;
