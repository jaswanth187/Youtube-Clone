import React, { useEffect } from "react";
import "./SidebarRow.css";
const SidebarRow = ({ title, Icon, selected, setSelected }) => {
  return (
    <div
      onClick={() => setSelected(title)}
      className={`sidebarRow ${selected === title && "selected"}`}
    >
      <Icon className="sidebarRow__icon" />
      <h2 className="sidebarRow__title">{title}</h2>
    </div>
  );
};

export default SidebarRow;
