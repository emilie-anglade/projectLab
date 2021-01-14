import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

const CreateProject = () => {
  return (
    <div>
      <h1>
        Mon projet
      </h1>
      <Link to="/memberslist">Recrutez des Makers</Link>
    </div>
  );
}

export default CreateProject;