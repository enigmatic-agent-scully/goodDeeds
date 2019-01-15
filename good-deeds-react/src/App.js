import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './components/Pages/Landing';
import Main from './components/Pages/Main';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Landing} />
          <Route path="/main" component={Main} />
        </div>
      </Router>
    );
  }
}

export default App;
