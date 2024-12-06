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

            <Route path="/Paginate2"  element={<Paginate2/>} />
            <Route path="/Paginate3"  element={<Paginate3/>} />
            
          </Routes>
        </Router> 
    </div>
  );
}

export default App;
