import React from "react";

function ShareButton() {

  return (
    <div className="flex gap-2.5 px-4 py-3 bg-orange-500 rounded-full">
      <img
        src="file.svg"
        alt="Share icon"
        className="object-contain shrink-0 self-start w-3.5 aspect-[0.87]"
      />
      <div>Share Recipe</div>
    </div>
  );
}
export default ShareButton;