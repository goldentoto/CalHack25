import React from "react";

function ItalianPastaMakingModal() {
  const handleClose = () => {
    // Implement close functionality
  };

  const handleConfirm = () => {
    // Implement confirmation functionality
  };

  const handleCancel = () => {
    // Implement cancellation functionality
  };

  return (
    <div className="flex justify-center items-center p-5 min-h-screen bg-black bg-opacity-50">
      <div className="relative p-8 w-full bg-white rounded-2xl max-w-[480px] max-sm:p-5">
        <button
          className="absolute top-4 right-4 p-0 cursor-pointer border-[none]"
          onClick={handleClose}
          aria-label="Close"
        >
          <i className="ti ti-x text-xl text-black" aria-hidden="true" />
        </button>

        <div className="mb-4">
          <h2 className="text-2xl font-semibold leading-none text-black">
            Italian Pasta Making
          </h2>
          <div className="mt-4">
            <div className="flex gap-2 items-center px-0 py-1">
              <i
                className="ti ti-calendar text-base text-black"
                aria-hidden="true"
              />
              <div className="text-base leading-none text-black">
                Saturday, March 15
              </div>
            </div>
            <div className="flex gap-2 items-center px-0 py-1">
              <i
                className="ti ti-clock text-base text-black"
                aria-hidden="true"
              />
              <div className="text-base leading-none text-black">
                10:00AM - 1:00 PM
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 mt-6 border-t border-solid">
          <div className="flex justify-between items-center px-0 pt-1 pb-2.5">
            <div className="text-base text-black">Credits Required</div>
            <div className="text-lg font-semibold text-black">4 Credits</div>
          </div>
        </div>

        <div className="flex gap-3 items-start p-4 mt-6 bg-orange-50 rounded-lg">
          <i
            className="ti ti-alert-triangle text-base text-orange-500"
            aria-hidden="true"
          />
          <div className="text-sm leading-4 text-black">
            Cancel 12 hours in advance to avoid a CA$13.00 late cancellation fee
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-6">
          <button
            className="px-12 py-3.5 text-base font-medium text-center text-white bg-orange-500 rounded-lg cursor-pointer border-[none] max-sm:px-5 max-sm:py-3.5"
            onClick={handleConfirm}
          >
            Confirm Reservation
          </button>
          <button
            className="px-12 py-3.5 text-base font-medium text-center text-black rounded-lg cursor-pointer border-[none] max-sm:px-5 max-sm:py-3.5"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItalianPastaMakingModal;
