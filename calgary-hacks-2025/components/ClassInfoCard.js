import PropTypes from "prop-types";
import React from "react";
import { FaChartBar, FaClock, FaEuroSign, FaUsers } from "react-icons/fa"; // Import icons from react-icons

const ICON_MAP = {
  "ti-clock": FaClock,
  "ti-users": FaUsers,
  "ti-currency-euro": FaEuroSign,
  "ti-chart-bar": FaChartBar,
};

const ClassInfoCard = ({ icon, title, content }) => {
  const IconComponent = ICON_MAP[icon] || FaClock; // Default to FaClock if icon is missing

  return (
    <div className="p-6 bg-white rounded-lg shadow-md flex flex-col items-start text-black">
      <IconComponent className="w-6 h-6 mb-2 text-orange-500" /> {/* Renders the correct icon */}
      <h3 className="mb-2 font-semibold">{title}</h3>
      <p>{content}</p>
    </div>
  );
};

ClassInfoCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default ClassInfoCard;
