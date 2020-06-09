import React from "react";
import "./App.css";
import {Link} from 'react-router-dom';

function  Nav(){
  return(
    <nav>
     <h2> Eindopdracht: React Lil' playlist</h2>
      <ul className="nav-links">
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
          </Link>
      </ul>
    </nav>
  )
}

export default Nav;