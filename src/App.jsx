import React, { useState } from "react";
import Heading from "./components/Heading";
import DropdownMenu from "./components/DropdownMenu";
import Dropdown from "./components/Dropdown";
import DialogueBox from "./components/DialogueBox";

function App() {
  const [selectedService, setSelectedService] = useState("");
  const [selectedPin, setSelectedPin] = useState("");

  return (
    <>
      <div className="h-screen bg-gradient-to-r from-indigo-500 via-indigo-300 to-indigo-500 relative">
        <Heading />
        <div className="flex gap-40">
          <DropdownMenu setSelectedService={setSelectedService} />
          <Dropdown setSelectedPin={setSelectedPin} />
        </div>
        {selectedService && selectedPin && (
          <div className="absolute left-80 ml-20 top-3/4">
            <DialogueBox
              selectedService={selectedService}
              selectedPin={selectedPin}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
