import React from "react";
import "./index.css";
import NavBar from "./composents/NavBar";
import Accueil from "./pages/Accueil";
import Contact from "./pages/contact";
import Jeux from "./pages/Jeux";
import QuizzLuxe from "./pages/QuizzLuxe";
import Mentions from "./pages/MentionsLegales";
import Footer from "./composents/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Accueil />
      <Footer />
      <Jeux />
      <Contact />
      <QuizzLuxe />
      <Mentions />
    </div>
  );
}

export default App;