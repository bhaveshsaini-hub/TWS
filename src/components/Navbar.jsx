import { useState } from "react";
import logo from "../assets/hotels/redstone/3.png";
import { Link } from "react-router-dom"; 
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      
      {/* LOGO */}
      <div className="nav-brand">
        <img src={logo} alt="TWC Logo" />
      </div>

      {/* HAMBURGER */}
      <div
        className={`hamburger ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* MENU */}
<ul className={`nav-links ${open ? "open" : ""}`}>

  <li>
    <a href="/" onClick={() => setOpen(false)}>Home</a>
  </li>

  <li>
    <a href="#about" onClick={() => setOpen(false)}>About</a>
  </li>

  <li>
    <a href="#hotels" onClick={() => setOpen(false)}>Hotels</a>
  </li>

  <li>
    <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
  </li>

</ul>




    </nav>
  );
};

export default Navbar;
