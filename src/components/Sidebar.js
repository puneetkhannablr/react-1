import React from "react";
import "../App.css";
import { sidebarlist } from "./SideBarData";
function Sidebar(props) {
  return (
    <div className="sidebar">
      {
        <ul>
          {sidebarlist.map((val, key) => {
            return (
              <li
                key={key}
                onClick={() => {
                  window.location.pathname = val.link;
                }}
              >
                <div>{val.icon}</div>
                <div>{val.title}</div>
              </li>
            );
          })}
        </ul>
      }
    </div>
  );
}

export default Sidebar;
