import React from 'react';
import { Offcanvas, Button } from 'react-bootstrap';
import { useCart } from '../context/CartContext'; // Logic import kiya

const CartSidebar = () => {
  const { isOpen, toggleCart, cartItems, removeFromCart, cartTotal } = useCart();

  return (
    <Offcanvas show={isOpen} onHide={toggleCart} placement="end" style={{ borderLeft: '5px solid #e2b34a' }}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title style={{ fontFamily: 'Playfair Display', color: '#2d1b4d', fontWeight: 'bold' }}>
          Your Basket
        </Offcanvas.Title>
      </Offcanvas.Header>
      
      <Offcanvas.Body className="d-flex flex-column">
        {cartItems.length === 0 ? (
          <div className="text-center my-auto text-muted">
            <h5>Your cart is empty</h5>
            <p>Add some sweetness to your life! 🧁</p>
          </div>
        ) : (
          <>
            {/* Cart Items List */}
            <div className="flex-grow-1 overflow-auto">
              {cartItems.map((item) => (
                <div key={item.id} className="d-flex align-items-center mb-3 p-2 border-bottom">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px' }} 
                  />
                  <div className="ms-3 flex-grow-1">
                    <h6 className="mb-0" style={{ color: '#2d1b4d', fontFamily: 'Montserrat', fontWeight: '600' }}>
                      {item.title}
                    </h6>
                    <small className="text-muted">
                      {item.quantity} x {item.price}
                    </small>
                  </div>
                  <Button 
                    variant="link" 
                    className="text-danger p-0" 
                    onClick={() => removeFromCart(item.id)}
                  >
                    <i className="bi bi-trash"></i>
                  </Button>
                </div>
              ))}
            </div>

            {/* Total & Checkout */}
            <div className="mt-3 pt-3 border-top">
              <div className="d-flex justify-content-between mb-3">
                <strong style={{ fontSize: '1.2rem' }}>Total:</strong>
                <strong style={{ fontSize: '1.2rem', color: '#e2b34a' }}>${cartTotal.toFixed(2)}</strong>
              </div>
              <Button className="w-100 py-3" style={{ backgroundColor: '#2d1b4d', border: 'none', fontWeight: '600' }}>
                Checkout Now
              </Button>
            </div>
          </>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default CartSidebar;