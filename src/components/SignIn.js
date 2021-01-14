import React from 'react';
import { withRouter } from "react-router-dom";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }; 

  submitForm = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.history.push('/profile');
  };

  render() {
    return (
      <div>
        <h1>Connexion</h1>
        <form onSubmit={this.submitForm}>
          <label htmlFor="email">
            E-mail :
            <input
              id="email"
              name="email"
              type="email"
              required
              checked={this.state.email}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label htmlFor="password">
            Mot de passe :
            <input
              id="password"
              name="password"
              type="password"
              minLength="6"
              required
              checked={this.state.password}
              onChange={this.handleInputChange} />
          </label>        
          <br />
          <input type="submit" value="Valider"/>
        </form>
      </div>
  
    )
  }
}

export default withRouter(SignIn);