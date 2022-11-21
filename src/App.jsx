import React from "react";
import "./App.css";
import Header from "./components/header/";
import Hero from "./components/hero/hero";
import Accla from "./components/acclamations/accla";
import Motto from "./components/motto/motto";
import Stake from "./components/stake/stake";
import Web from "./components/web/web";
import Block from "./components/block/block";
import Class from "./components/reco/reco";
import About from "./components/about/about";
import Footer from "./components/footer/footer";
function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Accla />
      <Motto />
      <Stake />
      <Web />
      <Block />
      <Class />
      <About />
      <Footer />
    </div>
  );
}

export default App;
