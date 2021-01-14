import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Button } from "reactstrap";
import logo from "./img/proje-lab.svg";

const Home = () => {

  const link = {
    textDecoration: "none",
    color: "white",
  }

  const home = {
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "12em",
    width: "70%",
    border: "1px solid rgba(0,0,0,.125)",
    "border-radius": "0.5em",
    "box-shadow": "0px 4px 4px rgba(0,0,0,.125)"
  }

  const title = {
    fontSize: "72px",
    marginTop: "1em",
  }

  const buttonHome = {
    marginTop: "4em",
    marginBottom: "4em",
    width: "16em"
  }

  const flex = {
    display: "flex",
    "flex-wrap": "wrap",
    "justify-content": "space-evenly"
  }

  return (
    <div style={home}>
      <h1 style={title}>Welcome to ProjectLab</h1>
      <section style={flex}>
      <Link style={link} to="/signup">
       <Button style={buttonHome}>Inscription</Button>
      </Link>
      <Link style={link} to="/signin">
        <Button style={buttonHome}>Connexion</Button>
      </Link>
      </section>
    </div>
  )
}

export default Home;