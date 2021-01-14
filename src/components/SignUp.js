import React from 'react';
import Checkbox from './Checkbox';
import { withRouter } from "react-router-dom";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      skills: [
        { id: 1, value: "Electronique", isChecked: false },
        { id: 2, value: "Biologie", isChecked: false },
        { id: 3, value: "Robotique", isChecked: false },
      ],
      interests: [
        { id: 4, value: "Electronique", isChecked: false },
        { id: 5, value: "Biologie", isChecked: false },
        { id: 6, value: "Robotique", isChecked: false },
      ],
    };
  }

  handleCheckElement = (e) => {
    const skills = this.state.skills;
    const interests = this.state.interests;
    skills.forEach((skill) => {
      if (skill.value === e.target.value)
        skill.isChecked = e.target.checked;
    });
    interests.forEach((interest) => {
      if (interest.value === e.target.value)
        interest.isChecked = e.target.checked;
    });
    this.setState({ skills: skills, interests: interests });
  };

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
    alert(`Welcome ${this.state.username}`);
    this.props.history.push('/profile');
  };

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <label htmlFor="username">
          Nom d'utilisateur :
          <input
            id="username"
            name="username"
            type="text"
            minLength="4"
            required
            checked={this.state.firstname}
            onChange={this.handleInputChange} />
        </label>
        <br />
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
        <legend>
          Vos compétences: 
          <Checkbox
            value="Electronique"
            label="Electronique"
            id="1"
            name="skills"
            onChange={this.handleCheckElement}
          />
          <Checkbox
            value="Biologie"
            label="Biologie"
            id="2"
            name="skills"
            onChange={this.handleCheckElement}
          />
          <Checkbox
            value="Robotique"
            label="Robotique"
            id="3"
            name="skills"
            onChange={this.handleCheckElement}
          />
        </legend>
        <br />
        <legend>
          Vos centres d'intérêts: 
          <Checkbox
            value="Electronique"
            label="Electronique"
            id="4"
            name="interests"
            onChange={this.handleCheckElement}
          />
          <Checkbox
            value="Biologie"
            label="Biologie"
            id="5"
            name="interests"
            onChange={this.handleCheckElement}
          />
          <Checkbox
            value="Robotique"
            label="Robotique"
            id="6"
            name="interests"
            onChange={this.handleCheckElement}
          />
        </legend>
        <br />
        <input type="submit" value="Valider"/>
      </form>
    );
  }
}

export default withRouter(SignUp);