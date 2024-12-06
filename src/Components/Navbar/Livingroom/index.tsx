import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function Livingroom() {
  return (
    <div>
      <div className='Livingroom'>
        <div className='Livingroom-1'>
            <div className='Livingroom-a'>
                <h1>ABOUT</h1>
                <p>Nulla quis lorem ut libero malesuada feugiat. <br /> Praesent sapien massa, convallis a pellentesque nec, <br /> egestas non nisi. Pellentesque in ipsum id orci porta <br /> dapibus. Sed porttitor lectus nibh.</p>
            </div>
            <div className='Livingroom-b'>
              <h1>SOCIAL</h1>
              <div>
                <a href=""><i className='bx bxl-facebook-square'></i></a>
                <a href=""><i className='bx bxl-twitter'></i></a>
                <a href=""><i className='bx bxl-instagram'></i></a>
                <a href=""><i className='bx bxl-pinterest'></i></a>
              </div>
            </div>
            <div className='Livingroom-c'>
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
          <div className='Livingroom-2'>
              <div className='Livingroom-d'>
                  <p>Copyright ©  Home Decor | Powered by Home Decor</p>
              </div>
              <div className='Livingroom-e'>
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

export default Livingroom;