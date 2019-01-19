import React from 'react';
import { Navbar, NavItem, Chip, Dropdown } from 'react-materialize';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GetHelp from '../../Wrappers/GetHelp';
import GiveHelp from '../../Wrappers/GiveHelp';
import './style.css';

// Rewrite as Class with User state

function Main() {
  return(
    <div className='Main-Page'>
      <Navbar brand='goodDeeds'right>
        <Dropdown trigger={
          <Chip className="user-badge">
            <img src='https://openclipart.org/download/216413/coniglio_rabbit_small.svg' alt='Contact Person' />
            Username</Chip>}>
          <NavItem>View Profile</NavItem>
          <NavItem>Logout</NavItem>
        </Dropdown>
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

