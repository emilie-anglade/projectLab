import React from 'react';
import NavbarProject from './Navbar';
import Footer from './Footer';
import db from './db.json';
import './MembersList.css';

class MembersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      makers: []
    };
  }
  
  render() {
    const avatarCss = {
      width: "300px",
      height: "300px"
    }
    return (
      <div>
      <NavbarProject />
        <div>
        <h1 className="title1CardMakers">Recrutez des Makers <span role="img" aria-label="rocket">🚀</span></h1>
          <div className="membersList">
          {db.map((item) => (
            <div className="cardMakers">
            <img src={item.AvatarUrl} alt="Avatar" style={avatarCss}></img>
            <div className="bodyCardMakers">
              <h2 className="titleCardMakers">{item.userName}</h2>
              <h4 className="titleSkills">Mes compétences:</h4>
              <p className="skillsCardMakers">{item.skills.join(', ')}</p>
              <h4 className="titleSkills">Mes centres d'intérêts:</h4>
              <p className="skillsCardMakers">{item.interests.join(', ')}</p>
              <h4 className="titleSkills">Mon projet de rêve:</h4>
              <p className="skillsCardMakers">{item.dreamProject}</p>
            </div>
            <p><button className="buttonCardMakers">Me contacter</button></p>
            </div>
          ))}
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default MembersList;