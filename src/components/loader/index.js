import React from "react";
import "./style.scss";

const Loader = () => {
  return (
    <div className="wrapper">
      <ul className="loader-list">
        <li>
          <div className="loader-3 center">
            <span></span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Loader;
