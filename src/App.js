import "./App.css";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Footer/Footer";



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
    </div>
  );
}

export default App;
