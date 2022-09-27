import React from 'react';
import {Routes, Route} from 'react-router-dom';
import About from "./components/About/About";
import Gallery from "./route/gallery/Gallery1"
import Contact from "./route/contact/Contact"
function App() {
  return (
   <>
   <Routes>

  <Route path='/' element= {<About/>} />
  <Route path='/Gallery' element={<Gallery/>}/>
  <Route path='/Contact' element={<Contact/>}/>

   </Routes>
  
   </>
  );
}

export default App;
