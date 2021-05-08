import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/footer/Footer";
import Container from "./components/Container";




function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Container>
          <Switch>
            <Route exact path={["/", "/portfolio-react"]} component={Main} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </Container>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
