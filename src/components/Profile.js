import React from 'react';
import NavbarProject from './Navbar';
import Footer from './Footer';
// import CardProject from './Card';
import PopupProject from './Popup';
import { 
  Button, 
  Media,
  Card,
  CardText, 
  CardBody,
  CardTitle,
  CardDeck,
  CardSubtitle,
  NavLink
} from 'reactstrap';
import {Link} from 'react-router-dom';
import wrench from './img/wrench.png';
import engrenage from './img/engrenage.png';
import pinceau from './img/pinceau.png';
import tournevis from './img/tournevis.png';
import machine from './img/machine.png';
import crayon from './img/crayon.png';
import dbprojects from './dbprojects.json';


const Profile = () => {

  const [modalShow, setModalShow] = React.useState(false);

  const clc = {
    minHeight: "100vh",
    position: "relative"
  }

  const navLinks = {
    "margin-right": "32px",
    color: "black"
  }

  const styleButton = {
    margin: "3em",
    float: "right",
    backgroundColor: "#33658A"
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
    marginLeft: "9em",
    backgroundColor: "#33658A"
  }

  const con = {
    display: "flex",
    flexDirection: "column"
  }

  const flute = {
    marginRight: "1em",
    marginTop: "1em",
    backgroundColor: "#33658A"
  }

  const cardgroup = {
    width: "95%",
    margin: "auto",
    "padding-top": "0.25em",
    display: "flex",
    "flex-wrap": "wrap"
  };
  const cardbodycss = {
    margin: "0.5em",
    "min-width": "340px",
    "box-shadow": "0px 4px 4px rgba(0,0,0,.125)"
  };

  const styleButtonProject = {
    float: "right",
    backgroundColor: "#33658A"
  }

  return (
    <div style={clc}>
      <NavbarProject />
      <div style={headerContainer}>
        <Media style={avatarContainer}>
          <Media left>
            <div style={con}>
            <img
              alt="x"
              className="mr-3 rounded"
              height="200"
              src="https://avatars.dicebear.com/api/bottts/artilect.svg?background=%230000ff"/>  
              <Button style={flute}>Actualiser mon profil</Button>
              <PopupProject />
      <Button style={flute} variant="primary" onClick={() => setModalShow(true)}>
        Créer un projet
      </Button>
      <PopupProject
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
            </div>         
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
          <NavLink tag={Link} to="/memberslist" style={navLinks}>
          <Button style={plus}>Voir plus</Button>
              </NavLink>
        </CardBody>
      </Card>
    </div>
    </div>
    
      <h2 style={titleProject}>Mes projets</h2>
      <CardDeck style={cardgroup}>
      <Card style={cardbodycss}>
        <CardBody>
          <CardTitle tag="h5">Figurines 3D</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Electronique
          </CardSubtitle>
          <CardText>
            Le but de ce projet est de concevoir en 3D sur un logiciel des figurines 
            d'animaux, puis de les imprimer en utilisant l'imprimante 3D.
          </CardText>
          <Button style={styleButtonProject}>Détails</Button>
        </CardBody>
      </Card>
      <Card style={cardbodycss}>
        <CardBody>
          <CardTitle tag="h5">Formation logiciel 3D</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Electronique
          </CardSubtitle>
          <CardText>
            Ce projet de formation doit m'apprendre à maîtiser le logiciel Blender, qui permet
            de réaliser des modèles 3D, ce qui va m'aider pour mes projets de création.
          </CardText>
          <Button style={styleButtonProject}>Détails</Button>
        </CardBody>
      </Card>
      <Card style={cardbodycss}>
        <CardBody>
          <CardTitle tag="h5">Formation logiciel 2D</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Electronique, Machines
          </CardSubtitle>
          <CardText>
            Ce projet de formation doit m'apprendre à maîtiser le logiciel Blender, qui permet
            de réaliser des modèles 3D, ce qui va m'aider pour mes projets de création.
          </CardText>
          <Button style={styleButtonProject}>Détails</Button>
        </CardBody>
      </Card>
    </CardDeck>

    <h2 style={titleProject}>Découvrir d'autres projets <span role="img" aria-label="rocket">🚀</span></h2>
    <CardDeck style={cardgroup}>
      {dbprojects.map((project)=>(
        <Card style={cardbodycss}>
        <CardBody>
          <CardTitle tag="h5">{project.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {project.area.join(' ')}
          </CardSubtitle>
          <CardText>
            {project.description}
            - Catégorie: {project.category}
          </CardText>
          <Button style={styleButtonProject}>Détails</Button>
        </CardBody>
      </Card>
      ))}
      </CardDeck>
    
      <Footer/>
    </div>
  )
}

export default Profile;