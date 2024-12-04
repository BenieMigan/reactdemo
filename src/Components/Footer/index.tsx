import React from 'react';
import './style.css';
import 'boxicons/css/boxicons.min.css';
function Footer() {
  return (
    <div className='Footer'>
        <div className='Footer-1'>
            <div className='Footer-a'>
                <h1>ABOUT</h1>
                <p>Nulla quis lorem ut libero malesuada feugiat. <br /> Praesent sapien massa, convallis a pellentesque nec, <br /> egestas non nisi. Pellentesque in ipsum id orci porta <br /> dapibus. Sed porttitor lectus nibh.</p>
            </div>
            <div className='Footer-b'>
                <h1>SOCIAL</h1>
                <div>
                    <a href=""><i className='bx bxl-facebook-square'></i></a>
                    <a href=""><i className='bx bxl-twitter'></i></a>
                    <a href=""><i className='bx bxl-instagram'></i></a>
                    <a href=""><i className='bx bxl-pinterest'></i></a>
                </div>
            </div>
            <div className='Footer-c'>
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
        <div className='Footer-2'>
            <div className='Footer-d'>
                <p>Copyright ©  Home Decor | Powered by Home Decor</p>
            </div>
            <div className='Footer-e'>
                <ul>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Living Room</a></li>
                    <li><a href="">Kitchen</a></li>
                    <li><a href="">Outdoors</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Footer;
