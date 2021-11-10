import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MobileHeader from './components/MobileHeader/MobileHeader';
import './styles/foundation.min.css';
import './styles/custom.css';
import Routes from './routes';

class App extends Component {

  constructor(props) {

    super(props);
    this.state = {
      appName: 'react-login'
    }

  }

  render() {
    return (
      <div className="off-canvas-wrapper">
        <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
          <div className="off-canvas-content" data-off-canvas-content>
            <MobileHeader name={this.state.appName}/>
            <Header name={this.state.appName}/>
            <Routes />
            
            <div className="footer">
            <Footer />              
            </div>
    
          </div>
        </div>
      </div>
    );
  }
}

export default App;
