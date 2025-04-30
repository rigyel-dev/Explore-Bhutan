import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Culture from '../../pages/Culture';
import Destinations from '../../pages/Destinations';
import Travel from '../../pages/Travel';
import Contact from '../../pages/Contact';



const AppRoutes = () => {
  return (
    <Routes>
      {/* The root route now shows SignIn */}
      <Route path="/" element={<Home />} />
      <Route path="/culture" element={<Culture />} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/travel" element={<Travel />} />
      <Route path="/contaatc" element={<Contact />} />

      
    </Routes>
   
  );
};

export default AppRoutes;
