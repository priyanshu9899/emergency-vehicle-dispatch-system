import React, { useState } from "react";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import list from "../list.json";

function Dropdown({ setSelectedPin }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handlePinSelection = (pin) => {
    setSelectedPin(pin);
    setSelectedOption(pin);
    setIsOpen(false);
  };

  return (
    <div className="relative flex flex-col items-center w-[340px] h-[340px] rounded-lg m-10 left-60 top-10">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-blue-400 p-4 w-full flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white"
      >
        {selectedOption || "Our Availability"}
        {!isOpen ? (
          <FaCaretDown className="h-8" />
        ) : (
          <FaCaretUp className="h-8" />
        )}
      </button>

      {isOpen && (
        <div className="bg-blue-400 absolute top-20 flex flex-col items-start rounded-lg p-2 w-full">
          {list.map((item, i) => (
            <div
              onClick={() => handlePinSelection(item.pin)}
              className={`flex w-full justify-between p-4 hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4 ${selectedOption === item.pin ? "bg-blue-300" : ""}`}
              key={i}
            >
              <h3 className="font-bold">{item.pin}</h3>
              {selectedOption === item.pin && <span className="text-2xl">✓</span>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;