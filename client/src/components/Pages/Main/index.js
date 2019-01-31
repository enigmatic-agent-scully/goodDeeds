import React, { Component } from 'react';
import { Navbar, NavItem, Dropdown, Modal } from 'react-materialize';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GetHelp from '../../Wrappers/GetHelp';
import GiveHelp from '../../Wrappers/GiveHelp';
import ProfileView from '../../Tools/ProfileView';
import './style.css';
import Auth from '../../../utils/Auth';
import Button from 'react-materialize/lib/Button';
import API from '../../../utils/API';
// import { threadId } from 'worker_threads';
// import Navbar from '../../Tools/Navbar/Navbar';
// Rewrite as Class with User state

class Main extends Component {
  state = {
    user: {},
    userInfo: []
  };

  constructor() {
    super();
    Auth.session().then(user => {
      // console.log(user);
      this.setState({
        user: user,
        authenticated: user.authenticated
      });
      // console.log(this.state.user.user)
      this.getProfileInfo(this.state.user.user);
    });
  }

  getProfileInfo(user) {
    // console.log(user.id);
    API.getUserInfo(user.id)
      .then(res => this.setState({ userInfo: res.data }))
      .catch(err => console.log(err));
  }

  //logout function
  logoutFunction(event) {
    console.log('inside logout func');
    Auth.logout()
      .then(res => {
        window.location = res.data.redirect;
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (this.state.authenticated === undefined) {
      return null; // TODO Implement loading gear
    }
    if (!this.state.authenticated) {
      window.location = '/';
      return;
    }
    return (
      <div className='Main-Page'>
        <div className='navbar-wrapper'>
          <Navbar id='navbar' brand='goodDeeds' fixed right>
            <Dropdown
              trigger={
                <Button>
                  {this.state.userInfo.firstName} {this.state.userInfo.lastName}
                </Button>
                //Chip was not working with the page authentication functions above for some reason
                // <Chip className='user-badge'>
                //   <img
                //     src='https://via.placeholder.com/50'
                //     alt='Contact Person'
                //   />
                //   Username
                // </Chip>
              }
            >
              <Modal trigger={<NavItem>View Profile</NavItem>}>
                <ProfileView
                  firstName={this.state.userInfo.firstName}
                  lastName={this.state.userInfo.lastName}
                  imageurl={this.state.userInfo.imageurl}
                  email={this.state.userInfo.email}
                  userName={this.state.userInfo.userName}
                />
              </Modal>
              <NavItem onClick={this.logoutFunction}>Logout</NavItem>
            </Dropdown>
            <NavItem href='/main/get-help'>Get Help</NavItem>
            <NavItem href='/main/give-help'>Give Help</NavItem>
          </Navbar>
        </div>
        <Router>
          <div>
            <Route
              exact
              path='/main/get-help'
              render={props => (
                <GetHelp {...props} user={this.state.userInfo} />
              )}
            />
            <Route exact path='/main/give-help' component={GiveHelp} />
          </div>
        </Router>
      </div>
    );
  }
}

export default Main;
