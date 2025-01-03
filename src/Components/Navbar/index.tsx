
import React from 'react';
import './style.css';
import Body from '../Body';
import Footer from '../Footer';
import { Link } from 'react-router-dom';


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
        <li><Link to ="/aboutus">About Us</Link></li>
                    <li><Link to ="/livingroom">Living Room</Link></li>
                    <li><Link to ="/kitchen">Kitchen</Link></li>
                    <li><Link to ="/outdoors">Outdoors</Link></li>
                    <li><Link to ="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Main Section */}
      <header className="main-header">
        <h1>Coming Home Never <br /> Felt So Good!</h1>
        <p>Quam a diamlorem explicabo quos fugit, ut aliquam modi.</p>
        <button className="main-button">Find Your Style</button>
      </header>
      <Body
            mytitle="Consectuer vehicula ab"
            title="November 21,2017/ kitchen ,Lifestyle"
            image="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/pic26-free-img.jpg" 
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eos dolores amet ut voluptas iure tenetur reiciendis accusamus perferendis. Repellendus, quasi. Soluta nobis distinctio nulla? Inventore harum molestiae cum rerum!"
            mytitle1="Consectuer vehicula ab Consectuer vehicula ab"
            title1="November 21, 2017 / Kitchen, Lifestyle"
            image1="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/pic26-free-img.jpg" 
            description1="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that;"
            mytitle2="Sunt doloremque blandit inven"
            title2="November 20, 2017 / Living Room"
            image2="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/sofa-with-pot.jpg" 
            image3="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/pic26-free-img-150x150.jpg" 
            image4="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/pic20-free-img-150x150.jpg"
            description2="Nisl vel urna debitis morbi fringilla malesuada maiores optio! Ratione, facilis. Illum accusantium eros sed tristique, cubilia? Vel eu cupiditate. Habitasse urna molestie hendrerit, animi eros"
          />
      <Footer/>
    </div>
  );
};

export default Navbar;
