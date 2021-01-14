import React from 'react';
import NavbarProject from './Navbar';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import CardProject from './Card';
import PopupProject from './Popup';
import { Button } from 'reactstrap';


const Profile = () => {

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <NavbarProject />
      <h1>Profil</h1>
      <button>
        <Link to="/createproject">Créer un projet</Link>
      </button>
      <CardProject />
      <PopupProject />
      <Button variant="primary" onClick={() => setModalShow(true)}>
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