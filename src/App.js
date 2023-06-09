import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Services } from "./components/Services";
import { APropos } from "./components/APropos"; 
import { Contact } from "./components/Contact";

import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Services />
      <APropos />
      <Contact />
      
      <Footer />
    </div>
  );
}

export default App;
