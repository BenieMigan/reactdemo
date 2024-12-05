import React from 'react';
import logo from './logo.svg';
import Body from './Components/Body';
import Navbar from './Components/Navbar';
import Paginate2 from './Components/Body/Paginates/Paginate2';
import Paginate3 from './Components/Body/Paginates/Paginate3';
import Nextpaginate from './Components/Body/Paginates/Nextpaginate';
import Footer from './Components/Footer';
// import './App.css';
function App() {
  return (
    <div >
     <Navbar/>
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
            image2="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/pic20-free-img.jpg" 
            image3="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/sofa-with-pot.jpg" 
            image4="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
            description2="Nisl vel urna debitis morbi fringilla malesuada maiores optio! Ratione, facilis. Illum accusantium eros sed tristique, cubilia? Vel eu cupiditate. Habitasse urna molestie hendrerit, animi eros"


          />
     <Footer/>
    </div>
  );
}

export default App;
