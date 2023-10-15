import React, { useEffect } from "react";
import {
  AdjustmentsHorizontal,
  ChevronDown,
  ChevronUp,
} from "tabler-icons-react";
import { useState } from "react";

const Navbar = ({
  selectedOption,
  setSelectedOption,
  orderedValue,
  setOrderedValue,
}) => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown((prev) => {
      return !prev;
    });
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const handleOrderedOptionChange = (e) => {
    setOrderedValue(e.target.value);
  };

  return (
    <>
      <div className="navbar">
        <div className="display-button" onClick={toggleDropdown} id="buttonId">
          <AdjustmentsHorizontal size={14} color="gray" />
          <h3>Display</h3>
          {dropdown ? (
            <>
              <ChevronUp size={14} color="gray" />
            </>
          ) : (
            <>
              <ChevronDown size={14} color="gray" />
            </>
          )}
        </div>
        <div className="dropdown" style={{ display: dropdown ? "" : "none" }}>
          <div className="dropdown-row">
            <h3>Grouping</h3>
            <div className="dropdown-main">
              <select value={selectedOption} onChange={handleOptionChange}>
                <option value="status">Status</option>
                <option value="priority">Priority</option>
                <option value="user">User</option>
              </select>
            </div>
          </div>
          <div className="dropdown-row">
            <h3>Ordering</h3>
            <div className="dropdown-main">
              <select value={orderedValue} onChange={handleOrderedOptionChange}>
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
