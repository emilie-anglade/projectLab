import React from "react";

import {
  Card,
  CardDeck,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const CardProject = (props) => {
  const cardgroup = {
    width: "95%",
    margin: "auto",
    "padding-top": "2em",
    display: "flex",
    "flex-wrap": "wrap"
  };
  const cardbodycss = {
    margin: "0.5em",
    "min-width": "340px",
    "box-shadow": "0px 4px 4px rgba(0,0,0,.125)"
  };

  const styleButton = {
    float: "right"
  }

  return (
    <CardDeck style={cardgroup}>
      <Card style={cardbodycss}>
        <CardBody>
          <CardTitle tag="h5">Mini voiture</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Electronique, Robotique
          </CardSubtitle>
          <CardText>
            Le projet est de concevoir en 3D une mini-voiture, imprimer les composants, puis la 
            rendre capable de rouler avec un petit moteur, et de pouvoir la piloter à distance.
          </CardText>
          <Button style={styleButton}>Détails</Button>
        </CardBody>
      </Card>
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
          <Button style={styleButton}>Détails</Button>
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
          <Button style={styleButton}>Détails</Button>
        </CardBody>
      </Card>
    </CardDeck>
  );
};
export default CardProject;