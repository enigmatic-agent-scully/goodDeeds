import React, { Component } from 'react';
import { Navbar, NavItem, Chip, Dropdown, Modal } from 'react-materialize';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GetHelp from '../../Wrappers/GetHelp';
import GiveHelp from '../../Wrappers/GiveHelp';
import ProfileView from '../../Tools/ProfileView';
import './style.css';

// Rewrite as Class with User state

class Main extends Component {
  state = {
    user: {}
  };

  render() {
    return (
      <div className='Main-Page'>
        <div className='navbar-wrapper'>
          <Navbar id='navbar' brand='goodDeeds' fixed right>
            <Dropdown
              trigger={
                <Chip className='user-badge'>
                  <img
                    src='https://via.placeholder.com/50'
                    alt='Contact Person'
                  />
                  Username
                </Chip>
              }>
              <Modal header='Profile' trigger={<NavItem>View Profile</NavItem>}>
                <ProfileView />
              </Modal>
              <NavItem>Logout</NavItem>
            </Dropdown>
            <NavItem href='/main/get-help'>Get Help</NavItem>
            <NavItem href='/main/give-help'>Give Help</NavItem>
          </Navbar>
        </div>
        <Router>
          <div>
            <Route exact path='/main/get-help' component={GetHelp} />
            <Route exact path='/main/give-help' component={GiveHelp} />
          </div>
        </Router>
      </div>
    );
  }
}

export default Main;
