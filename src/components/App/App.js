import React from 'react';
import { Link } from 'react-router-dom'

import './app.css';

function App({children}) {
  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to='/'>Home</Link>
        </div>
      </nav>
      <nav className="nav-bar">

      </nav>
      <div className="container main">
        { children }
      </div>
    </div>
  );
}

export default App;