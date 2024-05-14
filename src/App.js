import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import EmployeeDetail from './components/EmployeeDetail';
import Message from './components/Message';
import Loans from './components/Loans';

function App() {
  // Información del usuario
  const userInfo = {
    name: "Juan Pérez",
    email: "juan.perez@example.com",
    message: "Este es un mensaje inicial para el usuario."
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/about-us/:employeeId" element={<EmployeeDetail />} />
        <Route path="/message" element={<Message user={userInfo} />} />
        <Route path="/loans" element={<Loans />} />
      </Routes>
    </Router>
  );
}

export default App;
