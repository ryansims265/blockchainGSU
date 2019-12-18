import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <ul className="nav nav-pills">
  <li className="nav-item">
    <a className="nav-link active" href="#">Active</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Link</a>
  </li>
</ul>
  );
}

export default Navbar;