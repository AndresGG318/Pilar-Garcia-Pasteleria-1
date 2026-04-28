import "./App.css";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Footer/Footer";
import Tortas from "./Pages/Cakes/Cakes";
import Cupcakes from "./Pages/Cupcakes/Cupcakes";
import Galletas from "./Pages/Cookies/Cookies";
import Amasijos from "./Pages/Amasijos/Amasijos";
import Sabores from "./Pages/Flavors/Flavors";
import Blog from "./Pages/Blog/Blog";
import Nosotros from "./Pages/AboutUS/AboutUs";
import Contacto from "./Pages/Contact/Contact";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import LogoSimbolo from "./Img/simbolocolor.png";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app-container sulphur-point-bold">

        {/* HEADER SIEMPRE VISIBLE */}
        <Header />

        {/* CONTENIDO DINÁMICO */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Tortas" element={<Tortas />} />
            <Route path="/Cupcakes" element={<Cupcakes />} />
            <Route path="/Galletas" element={<Galletas />} />
            <Route path="/Amasijos" element={<Amasijos />} />
            <Route path="/Sabores" element={<Sabores />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Nosotros" element={<Nosotros />} />
            <Route path="/Contacto" element={<Contacto />} />
          </Routes>
        </div>

        {/* FOOTER SIEMPRE VISIBLE */}
        <Footer />

        {/* WHATSAPP */}
        <FloatingWhatsApp
          className="floating-whatsapp header"
          phoneNumber="+573162397143"
          accountName="Pilar García"
          statusMessage="En Línea"
          chatMessage="Hola, Como puedo ayudarte?"
          avatar={LogoSimbolo}
        />

      </div>
    </Router>
  );
}

export default App;