import React from 'react';
import { Navbar, NavItem } from 'react-materialize';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GetHelp from '../../Wrappers/GetHelp';
import GiveHelp from '../../Wrappers/GiveHelp';
import './style.css';

function Main() {
  return(
    <div className='Main-Page'>
      <Navbar brand='User Badge Here' left>
        <NavItem href='/main/get-help'>Get Help</NavItem>
        <NavItem href='/main/give-help'>Give Help</NavItem>
      </Navbar>
      <Router>
        <div>
          <Route exact path="/main/get-help" component={GetHelp}/>
          <Route exact path="/main/give-help" component={GiveHelp}/>
        </div>
      </Router>
    </div>
  );
}

export default Main;

