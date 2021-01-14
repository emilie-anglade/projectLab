import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

const Profile = () => {
  return (
    <div>
      <h1>Profil</h1>
      <button>
        <Link to="/createproject">Créer un projet</Link>
      </button>
    </div>
  )
}

export default Profile;