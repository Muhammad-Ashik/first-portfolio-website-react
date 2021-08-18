import React, { Component } from "react";
import Navbar from "./NavBarSection/Navbar.js";
import Portfolio from "./PortfolioSection/Portfolio";
import ContactForm from "./ContactForm/ContactForm";
import HeaderSection from "./HeaderSection/HeaderSection";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <HeaderSection />
        <Portfolio />
        <ContactForm />
      </div>
    );
  }
}

export default App;
