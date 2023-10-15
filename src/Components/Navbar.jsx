import React from "react";
import {
  AdjustmentsHorizontal,
  ChevronDown,
  ChevronUp,
} from "tabler-icons-react";
import { useState } from "react";

const Navbar = ({ selectedOption, setSelectedOption }) => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown((prev) => {
      return !prev;
    });
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <>
      <div className="navbar">
        <div className="display-button" onClick={toggleDropdown}>
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
        </div>
      </div>
    </>
  );
};

export default Navbar;
