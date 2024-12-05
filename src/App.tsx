import React from 'react';
import logo from './logo.svg';
import './App.css';
import Body from './Components/Body';
import Navbar from './Components/Navbar';
import Paginate2 from './Components/Body/Paginates/Paginate2';
import Paginate3 from './Components/Body/Paginates/Paginate3';
import Nextpaginate from './Components/Body/Paginates/Nextpaginate';
import Footer from './Components/Footer';
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import Aboutus from './Components/Navbar/Aboutus';
import Contact from './Components/Navbar/Contact';
import Kitchen from './Components/Navbar/Kitchen';
import Livingroom from './Components/Navbar/Livingroom';
import Outdoors from './Components/Navbar/Outdoors';

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
          </Routes>
        </Router> 
    </div>
  );
}

export default App;
