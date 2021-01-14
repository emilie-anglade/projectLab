import React from 'react';
import NavbarProject from './Navbar';
import Footer from './Footer';
import CardProject from './Card';
import PopupProject from './Popup';
import { Button } from 'reactstrap';


const Profile = () => {

  const [modalShow, setModalShow] = React.useState(false);

  const clc = {
    minHeight: "100vh",
    position: "relative"
  }
  const styleButton = {
    margin: "3em",
  }

  return (
    <div style={clc}>
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
      <Footer/>
    </div>
  )
}

export default Profile;