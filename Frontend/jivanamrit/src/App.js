
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbarhome from './Components/Navbarhome';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Components/Homepage';
import About from './Components/About';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Aboutus from './Components/Aboutus';

function App() {
  return (

   
<BrowserRouter>
{/* <Navbarhome/> */}
 {/* <Navtwo/> */}
{/* <Gallery/> */}
    {/* <Homepage/> */}
   {/* <About/> */}
   {/* <Contact/> */}

   <Aboutus/>
   <Footer/>
    <Routes>
      <Route path='/home' element={<Homepage/>}/>

    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
