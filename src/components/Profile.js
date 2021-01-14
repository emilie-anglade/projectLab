import React from 'react';
import NavbarProject from './Navbar';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import CardProject from './Card';
import PopupProject from './Popup';
import { Button } from 'reactstrap';


const Profile = () => {

  const [modalShow, setModalShow] = React.useState(false);


  const styleButton = {
    margin: "3em",
  }
  const CardProject = {
    "margin": "auto", 
    "width": "50%",
    "border-radius": "0.5em",
    "box-shadow": "0px 4px 4px rgba(0,0,0,.125)",
  }

  return (
    <div>
      <NavbarProject />
      <CardProject style={CardProject} />
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