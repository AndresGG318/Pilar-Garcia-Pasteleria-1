import "./App.css";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Footer/Footer";
import { FloatingWhatsApp } from 'react-floating-whatsapp'



function App() {
  return (
    <div className="app-container sulphur-point-bold">
      <div className="font-size: 20px">
        <Header />
      </div>
      <div className="content">
        <Home />
      </div>
      <div>
        <Footer />
      </div>

      <FloatingWhatsApp 
      phoneNumber="+573162397143" 
      accountName="Pilar García" 
      statusMessage="En Línea" 
      chatMessage="Hola, Como puedo ayudarte?"
      />
    </div>
  );
}

export default App;
