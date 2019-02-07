import React, { Component } from 'react';
import { Input, Row, Button, Modal, Card } from 'react-materialize';
import NewUser from '../NewUser';
import { uploadFile } from 'react-s3';
import './style.css';
import Auth from '../../../utils/Auth';
import { config } from '../../../config/Config';

// import { runInThisContext } from 'vm';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      imageurl: '',
      password: '',
      passwordConfirmed: ''
    };

    Auth.session().then(user => {
      this.setState({
        user: user,
        authenticated: user.authenticated
      });
    });

    this.reactS3config = {
      bucketName: 'gooddeedsimages',
      region: 'us-east-1',
      accessKeyId: config.awsKey,
      secretAccessKey: config.awsSecret
    };

    this.uploadHandler = this.uploadHandler.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.LoginHandler = this.LoginHandler.bind(this);
    this.handleModalFormSubmit = this.handleModalFormSubmit.bind(this);
  }

  uploadHandler(event) {
    const imagefile = event.target.files[0];
    console.log(imagefile);
    uploadFile(imagefile, this.reactS3config)
      .then(data => {
        console.log(data.location);
        this.setState({ imageurl: data.location });
      })
      .catch(err => console.error(err));
  }

  handleInputChange(event) {
    console.log(event.target);
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  // handlePasswordConfirmed(event) {
  //   if (event.target.passwordConfirmed.value === this.state.password) {
  //     this.setState({
  //       passwordIsConfirmed: true
  //     });
  //     console.log(this.state.passwordIsConfirmed);
  //   }
  // }

  //login/authentication function
  LoginHandler(event) {
    event.preventDefault();

    const loginInfo = this.state;
    console.log(loginInfo);
    if (this.state.email && this.state.password) {
      Auth.login({
        email: this.state.email,
        password: this.state.password
      })
        .then(res => {
          console.log('back from the promise');
          //after successful authentication we'll redirect to the returned address (we set this on the server side)
          window.location = res.data.redirect;
        })
        .catch(err => {
          if (err.response.data.error) {
            // Todo Show the flash message
            //I'll change this to react side flash instead of a window alert
            alert(err.response.data.error);
          }
        });
    }
  }

  handleModalFormSubmit(event) {
    event.preventDefault();
    const SignUpInfo = this.state;
    console.log(SignUpInfo);
    if (this.state.password === this.state.passwordConfirmed) {
      // console.log(event);
      console.log(SignUpInfo);
      Auth.signup({
        email: SignUpInfo.email,
        password: SignUpInfo.password,
        firstName: SignUpInfo.firstName,
        lastName: SignUpInfo.lastName,
        userName: SignUpInfo.userName,
        imageurl: SignUpInfo.imageurl
      })
        .then(res => {
          window.location = res.data.redirect;
        })
        .catch(err => {
          if (err.response.data.error) {
            // Todo Show the flash message
            //I'll change this to react side flash instead of a window alert
            alert(err.response.data.error);
          }
        });
    } else {
      return console.log('please confirm password');
    }
  }

  render() {
    //this statement is checking ot see if user is authenticated as set by the super constructor up top
    //if not authenticated they can proceed
    if (this.state.authenticated === undefined) {
      return null; // TODO Implement loading gear
    }

    return (

      <Card 
        id="login-card">
        <Modal id='new-user-modal' trigger={
          <Row>
            <Button className='new-user-button'>Create New User Account</Button>
          </Row>
        }>
          <NewUser
            header='New User'
            handleInputChange={this.handleInputChange}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            imageurl={this.state.imageurl}
            userName={this.state.userName}
            email={this.state.email}
            password={this.state.password}
            passwordConfirmed={this.state.passwordConfirmed}
            handleModalFormSubmit={this.handleModalFormSubmit}
            uploadHandler={this.uploadHandler}
          />
        </Modal>
        <Input
          // style={{textAlig: 'left'}}
          name='email'
          onChange={this.handleInputChange}
          type='email'
          label='Email'
          s={12}
        />
        <Input
          name='password'
          onChange={this.handleInputChange}
          type='password'
          label='password'
          s={12}
        />
        <Button id='login-button' waves='light' onClick={this.LoginHandler}>
          Login
        </Button>
      </Card>
    );
  }
}

export default Login;
