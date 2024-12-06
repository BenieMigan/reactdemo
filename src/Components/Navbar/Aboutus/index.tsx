import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function Aboutus() {
  return (
    <div>
        <div className="navba-container">
        <nav className="navba">
          <div>
              <img src="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/Interior-logo4@2x-free-img.png" alt="" />
          </div>
          <div>
            <ul className="navba-links">
              <li><Link to ="/aboutus">About Us</Link></li>
              <li><Link to ="/livingroom">Living Room</Link></li>
              <li><Link to ="/kitchen">Kitchen</Link></li>
              <li><Link to ="/outdoors">Outdoors</Link></li>
              <li><Link to ="/contact">Contact</Link></li>
            </ul>
          </div>
        </nav>
        <div className='navba-2'>
          <p>Know More</p>
          <h1>About Us</h1>
        </div>
      </div>
    
        <div className='Body'>
            <div className='Body-1'>
                <div className='Body-a'> 
                    <img src="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2020/02/pic14-free-img.png" alt="" width="3800"/>
                </div>
                <div className='Body-b'>
                    <h1 >Working Since 1995</h1>
                    <hr />
                    <p>Taciti alias conubia, senectus, soluta nisl interdum vitae eius habitant metus dapibus quis eos, risus, vehicula! Egestas qui interdum habitant! Laoreet, placeat maxime Suspendisse.Taciti alias conubia, senectus, soluta nisl interdum vitae eius habitant metus.</p>
                    <h4><em>Design is a funny word</em></h4>
                    <p>Taciti alias conubia, senectus, soluta nisl interdum vitae eius habitant metus dapibus quis eos, risus, vehicula! Egestas qui interdum habitant! Laoreet, placeat maxime Suspendisse.Taciti alias conubia, senectus, soluta nisl interdum vitae eius habitant metus.</p>
                </div>
            </div>
            <div className='Body-c'>
                <img src="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2021/03/client-logo-1.png" alt="" />
                <img src="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2021/03/client-logo-3.png" alt="" />
                <img src="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2021/03/client-logo-5.png" alt="" />
                <img src="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2021/03/client-logo-4.png" alt="" />
                <img src="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2021/03/client-logo-3.png" alt="" />
            </div>
        </div>

        <div className='Aboutus'>
        <div className='Aboutus-1'>
            <div className='Aboutus-a'>
                <h1>ABOUT</h1>
                <p>Nulla quis lorem ut libero malesuada feugiat. <br /> Praesent sapien massa, convallis a pellentesque nec, <br /> egestas non nisi. Pellentesque in ipsum id orci porta <br /> dapibus. Sed porttitor lectus nibh.</p>
            </div>
            <div className='Aboutus-b'>
                <h1 className='bbb'>SOCIAL</h1>
                <div>
                    <a href=""><i className='bx bxl-facebook-square'></i></a>
                    <a href=""><i className='bx bxl-twitter'></i></a>
                    <a href=""><i className='bx bxl-instagram'></i></a>
                    <a href=""><i className='bx bxl-pinterest'></i></a>
                </div>
            </div>
            <div className='Aboutus-c'>
                <h1>CONTACT US</h1>
                <p>500 Terry Francois St. <br />
                    San Francisco,<br />
                    CA 94158<br />
                    +1-410-555-0134 |<br />
                    info@example.com<br />
                    contact@example.com
                </p>
            </div>
        </div>
        <hr />
        <div className='Aboutus-2'>
            <div className='Aboutus-d'>
                <p>Copyright ©  Home Decor | Powered by Home Decor</p>
            </div>
            <div className='Aboutus-e'>
                <ul>
                    <li><Link to ="/aboutus">About Us</Link></li>
                    <li><Link to ="/livingroom">Living Room</Link></li>
                    <li><Link to ="/kitchen">Kitchen</Link></li>
                    <li><Link to ="/outdoors">Outdoors</Link></li>
                    <li><Link to ="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    </div>
    </div>
  );
}

export default Aboutus;