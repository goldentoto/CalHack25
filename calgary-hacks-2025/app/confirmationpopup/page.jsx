import React from "react";
import { Modal } from "react-bootstrap"

function ReservationModal({ show, onHide, ...props}) {
  const handleClose = () => {
    // Implement close functionality
  };

  const handleConfirm = () => {
    // Implement confirmation functionality
  };

  const handleCancel = () => {
    onHide();
  };

  return (
        <Modal show={show} onHide={onHide} {...props} centered>
          <Modal.Header>
            <div>
              <Modal.Title closeButton className="text-2xl font-semibold leading-none text-black">
                Italian Pasta Making
              </Modal.Title>
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
          </Modal.Header>
          <Modal.Body>
            <div>
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
          </Modal.Body>
          <Modal.Footer className="flex justify-center">
            <div className="flex flex-col gap-3 w-full text-center">
              <button
                  className="px-12 py-3.5 text-base font-medium text-white bg-orange-500 rounded-lg"
                  onClick={handleConfirm}
              >
                Confirm Reservation
              </button>
              <button
                  className="px-12 py-3.5 text-base font-medium text-black bg-gray-200 rounded-lg"
                  onClick={onHide}
              >
                Cancel
              </button>
            </div>
          </Modal.Footer>
        </Modal>
  );
}

export default ReservationModal;
