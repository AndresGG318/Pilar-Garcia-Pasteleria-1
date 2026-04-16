import "./App.css";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Footer/Footer";
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import LogoSimbolo from './Img/simbolocolor.png'



function App() {
  return (
    <div className="app-container sulphur-point-bold">
      <div className="font-size: 20px">
        <Header />
      </div>
      <div className="content" id="Inicio">
        <Home />
      </div>
      <div>
        <Footer />
      </div>

      <FloatingWhatsApp className="floating-whatsapp header"
      phoneNumber="+573162397143" 
      accountName="Pilar García" 
      statusMessage="En Línea" 
      chatMessage="Hola, Como puedo ayudarte?"
      avatar={LogoSimbolo}
      />
    </div>
  );
}

export default App;
