import React from 'react';
import logo from './logo.svg';
import './App.css';
import Body from './Components/Body';
import Navbar from './Components/Navbar';
import Paginate2 from './Components/Body/Paginates/Paginate2';
import Paginate3 from './Components/Body/Paginates/Paginate3';
import Nextpaginate from './Components/Body/Paginates/Nextpaginate';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Body/>
       <Footer/>
    </div>
  );
}

export default App;
