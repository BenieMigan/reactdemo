import React from "react";
import "./style.css";

const Navbar: React.FC = () => {
  return (
    <div className="navbar-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="#">
            <img
              src={"https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/Interior-logo4-free-img.png"}
              alt=""
            />
          </a>
        </div>
        
        <ul className="navbar-links">
          <li><a href="#about-us">About Us</a></li>
          <li><a href="#living-room">Living Room</a></li>
          <li><a href="#kitchen">Kitchen</a></li>
          <li><a href="#outdoors">Outdoors</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Main Section */}
      <header className="main-header">
        <h1>Coming Home Never <br /> Felt So Good!</h1>
        <p>Quam a diamlorem explicabo quos fugit, ut aliquam modi.</p>
        <button className="main-button">Find Your Style</button>
      </header>
    </div>
  );
};

export default Navbar;
