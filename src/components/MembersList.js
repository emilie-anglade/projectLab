import React from 'react';
import axios from 'axios';
import {
  Card, CardImg, CardBody,
  CardText, CardSubtitle, Button, CardDeck, CardTitle
} from 'reactstrap';
import CardProject from './Card';

class MembersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      makers: []
    };
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const makers = res.data;
        this.setState({ makers });
      })
  }

  render() {
  const cardDeck = {
    "margin": "4em", 
    "padding":"4em",
    "width": "100%",
    "border-radius": "0.5em",
    "box-shadow": "0px 4px 4px rgba(0,0,0,.125)",
    }

  const cardText = {
    "margin":"4em",
    }

  const {makers} = this.state; 

    return (
      <div>
      <CardDeck style = {cardDeck}>
      <Card>
        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{makers.map(maker => maker.name)}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Compétences:</CardSubtitle>
          <CardText>Robotique / Programmation / Design</CardText>
          <Button>Rencontrez votre coMaker !</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{this.makers}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Compétences:</CardSubtitle>
          <CardText>Mécanique / Robotique</CardText>
          <Button>Rencontrez votre coMaker !</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{this.makers}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Compétences:</CardSubtitle>
          <CardText>Couture / Design</CardText>
          <Button>Rencontrez votre coMaker !</Button>
        </CardBody>
      </Card>
    </CardDeck>
    </div> 
    )
  }
};
    
export default MembersList;