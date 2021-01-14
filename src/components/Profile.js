import React from 'react';
import NavbarProject from './Navbar';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import CardProject from './Card';
import PopupProject from './Popup';
import { 
  Button,
  Container, 
  Media
} from 'reactstrap';
import wrench from './img/wrench.png';
import engrenage from './img/engrenage.png';
import pinceau from './img/pinceau.png';
import tournevis from './img/tournevis.png';
import machine from './img/machine.png';
import crayon from './img/crayon.png';


const Profile = () => {

  const [modalShow, setModalShow] = React.useState(false);
  
  const styleButton = {
    margin: "3em",
  }
  const avatarContainer = {
    display: 'flex',
    justifyContent: 'flex-end',
    'margin': "3em 0",
    paddingLeft: "3em",
    flex: 1
  }
  const headerContainer = {
    display: 'flex',
    justifyContent: 'flew-end',
    flexWrap: 'wrap',
    margin: "0.5em",
    padding: "1em"
  }
  const skillsContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin: "3em 0em",
    flex: 2
  }

  const icons = {
    margin: "0.5em"
  }

  return (
    <div>
      <NavbarProject />
      <div style={headerContainer}>
        <Media style={avatarContainer}>
          <Media left>
            <img
              alt="x"
              className="mr-3 rounded"
              width="200"
              height="200"
              src="https://avatars.dicebear.com/api/bottts/artilect.svg?background=%230000ff"
            />
          </Media>
          <Media body>
            <h1>Harry Dean</h1>
            <p>
              harry@example.com
            </p>
          </Media>
        </Media>
        <Media style={skillsContainer}>
          <Media style={icons}>
            <img
              alt="x"
              className="mr-3"
              width="50"
              height="50"
              src={wrench}
            />
            <img
              alt="x"
              className="mr-3"
              width="50"
              height="50"
              src={wrench}
            />
            <img
              alt="x"
              className="mr-3"
              width="50"
              height="50"
              src={wrench}
            />
            <img
              alt="x"
              className="mr-3"
              width="50"
              height="50"
              src={wrench}
            />
          </Media>
          <Media style={icons}>
          <img
              alt="x"
              className="mr-2"
              width="50"
              height="50"
              src={engrenage}
            />
            <img
              alt="x"
              className="mr-2"
              width="50"
              height="50"
              src={machine}
            />
            <img
              alt="x"
              className="mr-2"
              width="50"
              height="50"
              src={tournevis}
            />
            <img
              alt="x"
              className="mr-2"
              width="50"
              height="50"
              src={pinceau}
            />
            <img
              alt="x"
              className="mr-2"
              width="50"
              height="50"
              src={crayon}
            />
          </Media>
        </Media>
      </div>
      <h2>Mes projets</h2>
      <CardProject />
      
      <PopupProject />
      <Button style={styleButton} variant="primary" onClick={() => setModalShow(true)}>
        Créer un projet
      </Button>
      <PopupProject
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}

export default Profile;