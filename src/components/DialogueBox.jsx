import React from "react";

function DialogueBox({ selectedService, selectedPin }) {
  return (
    <p className="bg-slate-800 text-white p-4 rounded-xl border-2">
      {selectedService && selectedPin ? (
        `${selectedService} with Vehicle Number ${Math.floor(
          Math.random() * 10000
        )} is Dispatched for ${selectedPin} at the distance ${
          Math.floor(Math.random() * 10) + 1
        } km`
      ) : (
        "Please select a service and a pincode."
      )}
    </p>
  );
}

export default DialogueBox;