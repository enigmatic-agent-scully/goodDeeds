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
import { uploadFile } from 'react-s3';
import { config } from '../../../config/Config';


class Main extends Component {

  constructor() {
    super();

    this.state = {
      user: {},
      userInfo: []
    };

    this.reactS3config = {
      bucketName: 'gooddeedsimages',
      region: 'us-east-1',
      accessKeyId: config.awsKey,
      secretAccessKey: config.awsSecret
    };

    this.uploadHandler = this.uploadHandler.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSaveToExistingProfile = this.handleSaveToExistingProfile.bind(this);

    Auth.session().then(user => {
      this.setState({
        user: user,
        authenticated: user.authenticated
      });
      this.getProfileInfo(this.state.user.user);
    });
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    const userInfo = this.state.userInfo;
    userInfo[name] = value;
    // console.log(userInfo);
    this.setState({
      userInfo
    });
  }

  uploadHandler(event) {
    const imagefile = event.target.files[0];
    console.log(imagefile);
    const userInfo = this.state.userInfo;
    uploadFile(imagefile, this.reactS3config)
      .then(res => {
        console.log(res);
        userInfo.imageurl = res.location;
        console.log('res.location after returning from uploadHandler promise' + res.location);
        console.log('userInfo before the state is set' + userInfo);
        this.setState({ userInfo });
      })
      .catch(err => console.error(err));
  }

  handleSaveToExistingProfile(event) {
    event.preventDefault();
    const SignUpInfo = this.state.userInfo;
    console.log(SignUpInfo);
    Auth.updateUserInfo(SignUpInfo)
      .then(res => {
        // this.getProfileInfo(this.state.user);
        console.log('res after returning from hadnleSavetoExistingProfile promise' + res);

      }).catch(err => {
        console.log(err);
      });

  }


  getProfileInfo(user) {
    // console.log(user.id);
    API.getUserInfo(user.id)
      .then(res => this.setState({
        userInfo: res.data
      }))
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
              }
            >
              <Modal trigger={<NavItem>View Profile</NavItem>}>
                <ProfileView
                  firstName={this.state.userInfo.firstName}
                  lastName={this.state.userInfo.lastName}
                  imageurl={this.state.userInfo.imageurl}
                  email={this.state.userInfo.email}
                  userName={this.state.userInfo.userName}
                  handleInputChange={this.handleInputChange}
                  uploadHandler={this.uploadHandler}
                  handleSaveToExistingProfile={this.handleSaveToExistingProfile}
                />
              </Modal>
              <NavItem onClick={this.logoutFunction}>Logout</NavItem>
            </Dropdown>
            <NavItem href='/main/get-help' className="hover-over-nav">Get Help</NavItem>
            <NavItem href='/main/give-help' className="hover-over-nav">Give Help</NavItem>
          </Navbar>
        </div>
        <Router>
          <div>
            <Route
              exact path='/main/get-help'
              render={props => (
                <GetHelp
                  {...props}
                  user={this.state.userInfo} />
              )}
            />
            <Route
              exact path='/main/give-help'
              render={props => (
                <GiveHelp
                  {...props}
                  user={this.state.userInfo} />
              )}
            />
            {/* <Route 
          exact path='/main/give-help' 
          component={GiveHelp} /> */}
          </div>
        </Router>
      </div>
    );
  }
}

export default Main;
