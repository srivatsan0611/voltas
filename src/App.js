import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Businesses from './components/Businesses'
import Sustainability from './components/Sustainability'
import Investors from './components/Investors'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about/overview/" element={<About />} />

          <Route path="businesses/products" element={<Businesses />} />

          
          <Route path="sustainability/overview" element={<Sustainability />} />

          
          <Route path="investors/stock" element={<Investors />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;


// Bonus 


/*
AI and DS Roles at Voltas:
Voltas might have AI and DS roles primarily related to optimizing energy efficiency, predictive maintenance for their products, 
and improving customer experience through data-driven insights.

Company's AI and DS Activities:
Voltas could use AI to enhance HVAC system efficiency, predict equipment maintenance, and analyze customer usage patterns 
to develop smarter, more efficient cooling and refrigeration solutions.

Requirements for AI and DS Roles:
These roles at Voltas might require skills in machine learning, data analysis, programming languages like Python, 
and domain knowledge in HVAC systems and energy management.

Future Growth of Voltas:
Voltas' growth might involve expanding its technological capabilities, incorporating AI-driven automation in product development,
and furthering sustainability efforts in the HVAC sector.

AI and DS Disruption in HVAC Sector:
AI and DS could disrupt the HVAC sector by enabling predictive maintenance, energy optimization, 
and personalized solutions, leading to more efficient and sustainable cooling systems.

AI and DS Utilization by Voltas:
If Voltas effectively adopts AI and DS, it could revolutionize the HVAC industry by creating smarter, 
more adaptable products and services that significantly disrupt traditional practices.

*/