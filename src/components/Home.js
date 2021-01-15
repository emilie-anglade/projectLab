import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Button } from "reactstrap";
import logo from "./img/proje-lab.svg";
import collab from './img/collab.svg';
import { assertUserWhitespacable } from '@babel/types';

const Home = () => {

  const link = {
    textDecoration: "none",
    color: "white",
  }

  const home = {
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "5em",
    width: "40%",
    border: "1px solid rgba(0,0,0,.125)",
    "border-radius": "0.5em",
    "box-shadow": "0px 4px 4px rgba(0,0,0,.125)",
    "background-color": "#FFFFFF",
    "opacity":"100%",
    "object-fit":"cover",
  }

  const bodyHome = {
    "width":"100%",
    "opacity": "100%",
    "height":"100%",
  }

  const title = {
    fontSize: "72px",
    marginTop: "1em",
  }

  const buttonHome = {

    marginTop: "1em",
    marginBottom: "2em",
    width: "6em",
    marginTop: "4em",
    marginBottom: "4em",
    width: "16em",
    backgroundColor: "#33658A"

  }

  const flex = {
    display: "flex",
    "flex-wrap": "wrap",
    "justify-content": "space-evenly",

  }

  const divHome = {
    "height": "100%",
    "width": "100%",
    "background-image":"url(http://marc-andre-dubout.org/vigie/technique/machine/plan/plan06.jpg)"
  }


  return (
  <body style= {bodyHome}>  
   <div style ={divHome}>
    <div style={home}>
      <h1 style={title}><img src={logo} alt="logo" /></h1>
      <section style={flex}>
      <Link style={link} to="/signup">
       <Button style={buttonHome}>Inscription</Button>
      </Link>
      <Link style={link} to="/signin">
        <Button style={buttonHome}>Connexion</Button>
      </Link>
      </section>
    </div>
   </div> 
  </body>  
  )
}

export default Home;