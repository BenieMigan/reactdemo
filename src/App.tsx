import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import Aboutus from './Components/Navbar/Aboutus';
import Contact from './Components/Navbar/Contact';
import Kitchen from './Components/Navbar/Kitchen';
import Livingroom from './Components/Navbar/Livingroom';
import Outdoors from './Components/Navbar/Outdoors';
import Navbar from './Components/Navbar';
import Paginate2 from './Components/Body/Paginates/Paginate2';
import Paginate3 from './Components/Body/Paginates/Paginate3';
import Nextpaginate from './Components/Body/Paginates/Nextpaginate';

function App() {
  return (
    <div>
      <Router>
          <Routes>
            <Route path="/"  element={<Navbar/>} />
            <Route path="/aboutus"  element={<Aboutus/>} />
            <Route path="/contact"  element={<Contact/>} />
            <Route path="/kitchen"  element={<Kitchen/>} />
            <Route path="/livingroom"  element={<Livingroom
             mytitle="Taciti hendrerit dis odit incidunt"
             title="November 21, 2017 / Kitchen, Living Room, Reading Room"
             image="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/hero01-free-img.jpg" 
             description="Cillum corrupti accumsan non cumque alias ipsa, platea! Mollis auctor, repellendus sagittis? Corporis dictumst mollis, curae. Eaque, quam per, praesent pretium eu non cumque animi dolorem […]"
             mytitle1="Sunt doloremque blandit inven"
             title1="Sunt doloremque blandit inven November 20, 2017 / Living Room"
             image1="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/pic20-free-img.jpg" 
             description1="Nisl vel urna debitis morbi fringilla malesuada maiores optio! Ratione, facilis. Illum accusantium eros sed tristique, cubilia? Vel eu cupiditate. Habitasse urna molestie hendrerit, animi eros"
             mytitle2="Fugit quaerat vulputate! Irure."
             title2="November 20, 2017 / Living Room"
             image2="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/hero01-free-img.jpg" 
             image3="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/sofa-with-pot.jpg" 
             image4="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/04/pic23-free-img.jpg"
             description2="Sodales inceptos dolorem elit molestias minima quam ipsa proident maecenas magnam massa. Hac maiores? Dis elit facilisis sapiente! Vulputate praesent esse! Hic? Possimus elit? Molestiae voluptates"
             description3="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor eu"
             description4="Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Lorem ipsum dolor"

            />} />
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
            image5="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/04/pic23-free-img.jpg" 
            image6="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/03/pic11-free-img.jpg" 
            image7="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2016/11/pic12-free-img.jpg" 
            image8="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2012/03/pic21-free-img.jpg" 
            image9="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2010/10/furnished-kitchen.jpg" 


          />} />        
            <Route path="/Paginate3"  element={<Paginate3
            mytitle1="Consectuer vehicula ab Consectuer vehicula ab"
            title1="November 21, 2017 / Kitchen, Lifestyle"
            description1="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that;"
            mytitle2="Sunt doloremque blandit inven"
            title2="November 20, 2017 / Living Room"
            image2="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/sofa-with-pot.jpg" 
            image3="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/pic26-free-img-150x150.jpg" 
            image4="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/pic20-free-img-150x150.jpg"
            description2="Nisl vel urna debitis morbi fringilla malesuada maiores optio! Ratione, facilis. Illum accusantium eros sed tristique, cubilia? Vel eu cupiditate. Habitasse urna molestie hendrerit, animi eros"
            image5="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/04/pic23-free-img.jpg" 
            image6="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/03/pic11-free-img.jpg" 
            image7="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2016/11/pic12-free-img.jpg" 
            image8="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2012/03/pic21-free-img.jpg" 
            image9="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2010/10/furnished-kitchen.jpg" 

          />} />

            <Route path="/Nextpaginate"  element={<Nextpaginate
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

          </Routes>
        </Router> 
    </div>
  );
}

export default App;
