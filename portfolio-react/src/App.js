import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/Main";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";



function App() {
  return (
    <Router>
      <div>

        <Navbar />
        <Wrapper>
          <Route exact path={["/", "/home"]} component={Main} />
          {/* <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} /> */}
        </Wrapper>
        {/* <Footer /> */}
      </div>
    </Router>

  );
}

export default App;
