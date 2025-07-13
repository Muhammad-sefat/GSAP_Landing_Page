import React from "react";
import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <nav>
      <div>
        <a href="#home">
          <img src="" alt="image" />
          <p>Velvet Pour</p>
        </a>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
