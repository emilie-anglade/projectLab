import React from 'react';
import NavbarProject from './components/Navbar';
import CardProject from './components/Card';
import PopupProject from './components/Popup';
import { Button } from 'reactstrap';

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="App">
      <NavbarProject />
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
  );
}

export default App;
