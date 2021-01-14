import React from 'react';
import axios from 'axios';

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
    return (
      <div>
        <h1>Recrutez des Makers!</h1>
        <ul>
          {this.state.makers.map(maker => <li>{maker.name}</li>)}
        </ul>
      </div>
    )
  }
}

export default MembersList;