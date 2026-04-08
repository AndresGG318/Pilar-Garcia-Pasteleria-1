import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">

      {/* 🔥 HERO */}
      <div className="hero-section d-flex align-items-center">
        <Container>
          <Row>
            <Col md={6}>
              <h1 className="hero-title">Exquisite Cakes & Pastries</h1>
              <p className="hero-text">
                Deliciously crafted for all of your special moments.
              </p>
              <Button className="gold-btn">Explore Menu</Button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* 🔥 WELCOME */}
      <Container className="welcome-section">
        <Row className="align-items-center">
          <Col md={6}>
            <img src="/img/cupcake.png" alt="cupcake" className="img-fluid rounded"/>
          </Col>
          <Col md={6}>
            <h2>Welcome to <span>Sweet Delights</span></h2>
            <p>
              Crafting delicious moments with elegance and perfection.
            </p>
            <Button className="gold-btn">Learn More</Button>
          </Col>
        </Row>
      </Container>

      {/* 🔥 BESTSELLERS */}
      <Container className="bestsellers">
        <h2 className="section-title">Our Bestsellers</h2>
        <Row>
          <Col md={4}>
            <Card className="product-card">
              <Card.Img variant="top" src="/img/cake1.jpg" />
              <Card.Body>
                <Card.Title>Chocolate Cake</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="product-card">
              <Card.Img variant="top" src="/img/tart.jpg" />
              <Card.Body>
                <Card.Title>Fruit Tarts</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="product-card">
              <Card.Img variant="top" src="/img/cupcakes.jpg" />
              <Card.Body>
                <Card.Title>Cupcakes</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* 🔥 TESTIMONIOS */}
      <Container className="testimonials">
        <h2 className="section-title">What Our Customers Say</h2>

        <Row>
          <Col md={6}>
            <div className="testimonial-card">
              <p>
                “Absolutely the best cakes we’ve ever had! Everything is beautiful and tastes amazing.”
              </p>
              <h5>Amanda R.</h5>
            </div>
          </Col>

          <Col md={6}>
            <div className="testimonial-card">
              <p>
                “Their pastries are exquisite and the service is outstanding.”
              </p>
              <h5>John M.</h5>
            </div>
          </Col>
        </Row>
      </Container>

    </div>
  );
};

export default Home;