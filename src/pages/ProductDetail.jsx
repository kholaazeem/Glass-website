import React from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // 1. Hook Import kiya
import './OurPastries.css';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart(); // 2. addToCart function nikala

  const allPastries = [
    {
      id: 1,
      title: "Velvet Cream Puff",
      price: "$4.50",
      desc: "Our signature creation, filled with silky vanilla cream using our secret low-calorie formula.",
      longDesc: "Experience the cloud-like texture of our signature choux pastry. Filled with a Madagascar vanilla bean cream that is surprisingly low in sugar but high in indulgence.",
      calories: "85 cal",
      ingredients: "Almond flour, Stevia, Vanilla Bean, Egg Whites, Skimmed Cream",
      img: "/assets/pastry-cream-puff.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Lavender Macaron",
      price: "$3.50",
      desc: "Delicate French macarons infused with Provence lavender.",
      longDesc: "Transport yourself to the purple fields of Provence. These delicate macarons are crafted with precision, balancing the floral notes of lavender with a hint of honey sweetness.",
      calories: "65 cal",
      ingredients: "Almond meal, Egg whites, Dried Lavender, Natural Honey",
      img: "/assets/pastry-macaron.jpg",
      featured: false 
    },
    {
      id: 3,
      title: "Midnight Éclair",
      price: "$5.00",
      desc: "Rich chocolate glaze adorned with edible gold.",
      longDesc: "A masterpiece of mystery. Dark chocolate ganache (70% cocoa) coats a crisp pastry shell filled with our secret coffee-infused cream.",
      calories: "95 cal",
      ingredients: "Dark Chocolate, Gold Dust, Espresso, Whole Wheat Pastry Flour",
      img: "/assets/pastry-eclair.jpg",
      featured: true
    },
    // --- New Items (From Full Menu) ---
    {
      id: 4,
      title: "Rose Petal Tart",
      price: "$6.00",
      desc: "Infused with organic rose water and topped with edible petals.",
      longDesc: "A romantic treat designed for special occasions. The crust is buttery and crumbly, holding a fragrant rose-infused custard.",
      calories: "110 cal",
      ingredients: "Organic Rose Water, Butter, Flour, Cane Sugar",
      img: "/assets/pastry-cream-puff.jpg", 
      featured: false
    },
    {
      id: 5,
      title: "Dark Forest Cake",
      price: "$7.50",
      desc: "Low-sugar dark chocolate layers with fresh cherries.",
      longDesc: "A lighter take on the classic Black Forest cake. Layers of airy chocolate sponge, fresh cherries, and whipped cream.",
      calories: "140 cal",
      ingredients: "Cocoa Powder, Fresh Cherries, Heavy Cream, Stevia",
      img: "/assets/pastry-eclair.jpg", 
      featured: false
    },
    {
      id: 6,
      title: "Lemon Zest Drop",
      price: "$3.00",
      desc: "Zesty lemon curd in a delicate meringue shell.",
      longDesc: "A burst of sunshine in every bite. Tangy lemon curd nestled in a crisp, sweet meringue cloud.",
      calories: "55 cal",
      ingredients: "Lemon Juice, Zest, Egg Whites, Sugar",
      img: "/assets/pastry-macaron.jpg", 
      featured: true
    }
  ];

  const product = allPastries.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="text-center mt-5 pt-5">
        <h2>Product Not Found!</h2>
        <Link to="/menu" className="btn btn-outline-dark mt-3">Back to Menu</Link>
      </div>
    );
  }

  return (
    <div className="product-detail-wrapper" style={{ marginTop: '76px', minHeight: '100vh', backgroundColor: '#fcfcfc' }}>
      <Container className="py-5">
        
        {/* Back Button */}
        <Link to="/menu" className="text-decoration-none text-muted mb-4 d-inline-block">
           ← Back to Menu
        </Link>

        <Row className="align-items-center g-5">
          
          {/* Left Side: Large Image */}
          <Col lg={6}>
            <div className="detail-img-box shadow-lg rounded overflow-hidden">
               <img src={product.img} alt={product.title} className="img-fluid w-100" style={{ objectFit: 'cover', height: '500px' }} />
            </div>
          </Col>

          {/* Right Side: Details */}
          <Col lg={6}>
            {product.featured && <Badge bg="warning" text="dark" className="mb-2">★ Signature Item</Badge>}
            
            <h1 className="display-4 fw-bold text-purple" style={{ fontFamily: 'Playfair Display', color: '#2d1b4d' }}>
              {product.title}
            </h1>
            
            <h3 className="text-gold mt-2 mb-4" style={{ color: '#e2b34a', fontFamily: 'Montserrat', fontWeight: '700' }}>
              {product.price}
            </h3>

            <p className="lead text-muted" style={{ fontFamily: 'Montserrat' }}>
              {product.desc}
            </p>
            
            <div className="p-4 bg-white rounded shadow-sm border mt-4 mb-4">
              <h5 className="mb-3" style={{ color: '#2d1b4d' }}>Chef's Note</h5>
              <p className="small text-secondary mb-0">
                {product.longDesc}
              </p>
            </div>

            <div className="mb-4">
               <strong>Calories:</strong> <span className="badge bg-light text-dark border">{product.calories}</span>
               <br />
               <strong className="mt-2 d-inline-block">Ingredients:</strong> <span className="text-muted small">{product.ingredients}</span>
            </div>

            <div className="d-flex gap-3">
              
              {/* 3. BUTTON FUNCTIONALITY ADDED */}
              <Button 
                className="btn-purple px-4 py-2"
                onClick={() => addToCart(product)} // <-- Yahan click par item add hoga
              >
                Add to Cart
              </Button>
              
              <Button variant="outline-dark" className="px-4 py-2">❤ Save</Button>
            </div>

          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetail;