import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to ProjectLab</h1>
      <section>
      <button><Link to="/inscription">Inscription</Link></button>
      <button><Link to="/connexion">Connexion</Link></button>
      </section>
    </div>
  )
}

export default Home;