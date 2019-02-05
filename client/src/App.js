import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/Pages/Landing';
import Main from './components/Pages/Main';


class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/main' component={Main} />
        </Switch>
      </Router>
    );
  }
}


export default App;
