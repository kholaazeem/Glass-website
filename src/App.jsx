import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Ensure icons work
import './App.css';

// Context Import
import { CartProvider } from './context/CartContext'; // <-- Import

// Components
import GlassNavbar from './components/GlassNavbar';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar'; // <-- Import

// Pages
import Home from './pages/Home';
import OurPastries from './pages/OurPastries';
import ContactUs from './pages/ContactUs';
import Collections from './pages/Collections';
import AllPastries from './pages/AllPastries';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    // 1. Provider se wrap kiya
    <CartProvider> 
      <Router>
        <div className="App">
          <GlassNavbar />
          
          {/* 2. Sidebar yahan rakh diya taaki wo hamesha available ho */}
          <CartSidebar /> 

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pastries" element={<OurPastries />} />
            <Route path="/menu" element={<AllPastries />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;