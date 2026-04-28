import React, { useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./Flavors.css";


function Flavors() {
  const [masa, setMasa] = useState("vainilla");
  const [relleno, setRelleno] = useState("arequipe");
  const [cubierta, setCubierta] = useState("buttercream");

  const coloresMasa = {
    vainilla: "#f3d9a3",
    naranja: "#f7a440",
    redVelvet: "#8b0000",
    chocolateBanano: "#5a3825",
    amapola: "#d6d6d6"
  };

  const coloresRelleno = {
    frutosRojos: "#d90429",
    arequipe: "#c68e17",
    nutella: "#3b1f0b",
    oreo: "#2c2c2c"
  };

  const coloresCubierta = {
    buttercream: "#fff3e0",
    merengue: "#f8ede3",
    ganacheBlanco: "#f1e4d3",
    ganacheLeche: "#8b5e3c",
    ganacheOscuro: "#3a2c2c"
  };
  return (
    <Container className="text-center mt-4" id="Sabores">
      <h2 className="mb-4">Diseña tu torta</h2>

      <Row>
        {/* 🎂 VISUAL */}
        <Col md={6}>
          <div className="cake-container">
            <div
              className="cake-top"
              style={{ backgroundColor: coloresCubierta[cubierta] }}
            ></div>

            <div
              className="cake-filling"
              style={{ backgroundColor: coloresRelleno[relleno] }}
            ></div>

            <div
              className="cake-base"
              style={{ backgroundColor: coloresMasa[masa] }}
            ></div>
          </div>
        </Col>

        {/* 🎛️ CONTROLES */}
        <Col md={6}>
          {/* MASAS */}
          <Card className="mb-3 p-3">
            <h5>Masas</h5>
            <div className="btn-group-custom">
              <Button onClick={() => setMasa("vainilla")}>Vainilla</Button>
              <Button onClick={() => setMasa("naranja")}>Naranja</Button>
              <Button onClick={() => setMasa("redVelvet")}>Red Velvet</Button>
              <Button onClick={() => setMasa("chocolateBanano")}>
                Chocolate Banano
              </Button>
              <Button onClick={() => setMasa("amapola")}>Amapola</Button>
            </div>
          </Card>

          {/* RELLENOS */}
          <Card className="mb-3 p-3">
            <h5>Rellenos</h5>
            <div className="btn-group-custom">
              <Button onClick={() => setRelleno("frutosRojos")}>
                Frutos Rojos
              </Button>
              <Button onClick={() => setRelleno("arequipe")}>Arequipe</Button>
              <Button onClick={() => setRelleno("nutella")}>Nutella</Button>
              <Button onClick={() => setRelleno("oreo")}>Oreo</Button>
            </div>
          </Card>

          {/* CUBIERTAS */}
          <Card className="p-3">
            <h5>Cubiertas</h5>
            <div className="btn-group-custom">
              <Button onClick={() => setCubierta("buttercream")}>
                Buttercream
              </Button>
              <Button onClick={() => setCubierta("merengue")}>
                Merengue Suizo
              </Button>
              <Button onClick={() => setCubierta("ganacheBlanco")}>
                Ganache Blanco
              </Button>
              <Button onClick={() => setCubierta("ganacheLeche")}>
                Ganache Leche
              </Button>
              <Button onClick={() => setCubierta("ganacheOscuro")}>
                Ganache Oscuro
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Flavors