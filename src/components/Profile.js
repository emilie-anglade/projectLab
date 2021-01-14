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

  return (
    <div>
      <NavbarProject />
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