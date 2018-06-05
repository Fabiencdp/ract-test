import React from 'react';
import { Link } from 'react-router-dom';

function App() {
    return (
      <section className="hero is-warning">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Hooooo Noooo, it's a 404!!!
            </h1>
            <h2 className="subtitle">
              <p>Maybe your lost ? </p>
            </h2>
            <p>
             <Link to='/back-to-home'>Back to Home</Link>
            </p>
          </div>
        </div>
      </section>
    );
}

export default App;