import React, { Component } from 'react';
import './Welcome.css';

class Welcome extends Component {
  render() {
    return (
      <div className="row small-up-2 medium-up-3 large-up-4">
      <div className="column">
        <h2>Welcome Component</h2>
        <a href="/login" className="button">Login</a>
        <a href="/signup" className="button success">Signup</a>
      </div>
    </div>
    );
  }
}

export default Welcome;
