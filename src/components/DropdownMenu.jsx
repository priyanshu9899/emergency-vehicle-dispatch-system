import React, { useState } from "react";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import list from "../list.json";

function DropdownMenu({ setSelectedService }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleServiceSelection = (service) => {
    setSelectedService(service);
    setSelectedOption(service);
    setIsOpen(false);
  };

  return (
    <div className="relative flex flex-col items-center w-[340px] h-[340px] rounded-lg m-10 left-60 top-10">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-blue-400 p-4 w-full flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white"
      >
        {selectedOption || "Our Services"}
        {!isOpen ? (
          <FaCaretDown className="h-8" />
        ) : (
          <FaCaretUp className="h-8" />
        )}
      </button>

      {isOpen && (
        <div className="bg-blue-400 absolute top-20 flex flex-col items-start rounded-lg p-2 w-full">
          {list
            .filter((item) => item.service && item.service.trim() !== "")
            .map((item, i) => (
              <div
                onClick={() => handleServiceSelection(item.service)}
                className="flex w-full justify-between p-4 hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4"
                key={i}
              >
                <h3 className="font-bold">{item.service}</h3>
                <h3>
                  <span className="text-2xl">{item.emoticon}</span>
                </h3>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
