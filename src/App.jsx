import React, { useState } from "react";
import Heading from "./components/Heading";
import ServiceButtons from "./components/DropdownMenu";
import Dropdown from "./components/Dropdown";
import DialogueBox from "./components/DialogueBox";

function App() {
  const [selectedService, setSelectedService] = useState("");
  const [selectedPin, setSelectedPin] = useState("");

  return (
    <>
      <div className="h-screen bg-gradient-to-b from-amber-100 via-amber-50 to-red-400 relative pt-2">
        <Heading />
        <div className="flex flex-col items-center w-full">
          <div className="flex gap-10">
            <ServiceButtons setSelectedService={setSelectedService} />
          </div>
          <Dropdown setSelectedPin={setSelectedPin} />
        </div>
        {selectedService && selectedPin && (
          <div className="absolute left-80 ml-20 bottom-10">
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