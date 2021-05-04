import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/Main";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Container from "./components/Container";



function App() {
  return (
    <Router>
      <div>

        <Navbar />
        <Container>
          <Route exact path="/home" component={Main} />
          <Route exact path="/portfolio" component={Portfolio} />
          {/* <Route exact path="/contact" component={Contact} /> */}
        </Container>
        {/* <Footer /> */}
      </div>
    </Router>

  );
}

export default App;
