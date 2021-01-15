import React from 'react';
import NavbarProject from './Navbar';
import Footer from './Footer';
import CardProject from './Card';
import PopupProject from './Popup';
import { 
  Button, 
  Media,
  Card,
  CardText, 
  CardBody,
  CardTitle,
} from 'reactstrap';
import wrench from './img/wrench.png';
import engrenage from './img/engrenage.png';
import pinceau from './img/pinceau.png';
import tournevis from './img/tournevis.png';
import machine from './img/machine.png';
import crayon from './img/crayon.png';


const Profile = () => {

  const [modalShow, setModalShow] = React.useState(false);

  const clc = {
    minHeight: "100vh",
    position: "relative"
  }
  const styleButton = {
    margin: "3em",
  }
  const avatarContainer = {
    display: 'flex',
    justifyContent: 'flex-end',
  }

  const headerContainer = {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: "start",
    flexWrap: 'wrap',
    marginTop: "2em",
    padding: "1em"
  }
  const skillsContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: "0 2em",
  }

  const icons = {
    margin: "0.5em"
  }

  const titleProject = {
    margin: '0.5em 1em'
  }

  const cardFriends = {
    maxWidth: "420px",
    maxHeight: '350px',
    "box-shadow": "0px 4px 4px rgba(0,0,0,.125)"
  }

  const flexFriends = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "no-wrap",
    maxHeight: "70px",
    minWidth: "400px"
  }

  const plus = {
    marginTop: "1em",
    textAlign: "center",
    marginLeft: "9em"
  }

  return (
    <div style={clc}>
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
        <div>
      <Card style={cardFriends}>
        <CardBody>
          <CardTitle tag="h5">Mes amis</CardTitle>
            <hr/>
          <Card>
            <CardBody style={flexFriends}>
              <img 
                src="https://avatars.dicebear.com/api/bottts/artilect.svg?background=%2300ff00" 
                alt=""
                className="mr-3 rounded"
                width="45"
                height="45" 
              />
              <CardText>Freddy Krueger</CardText>
            </CardBody>
          </Card>
          <Card>
            <CardBody style={flexFriends}>
              <img 
                src="https://avatars.dicebear.com/api/bottts/artilect.svg?background=%23ff0000" 
                alt="" 
                className="mr-3 rounded"
                width="45"
                height="45" 
              />
              <CardText>Michael Myers</CardText>
            </CardBody>
          </Card>
          <Button style={plus}>Voir plus</Button>
        </CardBody>
      </Card>
    </div>
      </div>
      <h2 style={titleProject}>Mes projets</h2>
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