import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import Aboutus from './Components/Navbar/Aboutus';
import Contact from './Components/Navbar/Contact';
import Kitchen from './Components/Navbar/Kitchen';
import Livingroom from './Components/Navbar/Livingroom';
import Outdoors from './Components/Navbar/Outdoors';
import Navbar from './Components/Navbar';
import Paginate2 from './Components/Body/Paginates/Paginate2';
import Paginate3 from './Components/Body/Paginates/Paginate3';

function App() {
  return (
    <div>
      <Router>
          <Routes>
            <Route path="/"  element={<Navbar/>} />
            <Route path="/aboutus"  element={<Aboutus/>} />
            <Route path="/contact"  element={<Contact/>} />
            <Route path="/kitchen"  element={<Kitchen/>} />
            <Route path="/livingroom"  element={<Livingroom/>} />
            <Route path="/outdoors"  element={<Outdoors/>} />

            <Route path="/Paginate2"  element={<Paginate2
            mytitle1="Consectuer vehicula ab Consectuer vehicula ab"
            title1="November 21, 2017 / Kitchen, Lifestyle"
            description1="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that;"
            mytitle2="Sunt doloremque blandit inven"
            title2="November 20, 2017 / Living Room"
            image2="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/sofa-with-pot.jpg" 
            image3="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/pic26-free-img-150x150.jpg" 
            image4="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/pic20-free-img-150x150.jpg"
            description2="Nisl vel urna debitis morbi fringilla malesuada maiores optio! Ratione, facilis. Illum accusantium eros sed tristique, cubilia? Vel eu cupiditate. Habitasse urna molestie hendrerit, animi eros"
            image5="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/pic04-free-img.jpg" 
            image6="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/pic06-free-img.jpg" 
            image7="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/10/pic07-free-img.jpg" 
            image8="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/08/pic08-free-img.jpg" 
            image9="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/06/pic09-free-img.jpg" 

          />} />        
            <Route path="/Paginate3"  element={<Paginate3/>} />
            
          </Routes>
        </Router> 
    </div>
  );
}

export default App;
