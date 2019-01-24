import React, { Component } from 'react';
import { Input, Row, Button, Modal } from 'react-materialize';
// import Auth from '../../../utils/'
// import NewUser from '../NewUser';
import './style.css';
import Auth from '../../../utils/Auth';

class Login extends Component {

  state = {
    email: "",
    password: ""
  };

  constructor(props) {
    super(props)
    Auth.session().then(user => {
      this.setState({
        user: user,
        authenticated: user.authenticated
      })
    })
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  LoginHandler = event => {
    event.preventDefault();

    const loginInfo = this.state;
    console.log(loginInfo)
    if (this.state.email && this.state.password) {
      Auth.login({
        email: this.state.email,
        password: this.state.password
      }).then(res => {
        console.log('back from the promise')
        console.log(res.data)
        window.location = res.data.redirect
      }).catch(err => {
        if (err.response.data.error) {
          // Todo Show the flash message
          alert(err.response.data.error)
        }
        console.log(err)
      });
    }
  }

  logoutHandler = (event) => {
    console.log('inside the logout handler')
    Auth.logout()
      .then(res => {

        console.log('you successfully got logged out and came back to the promise')
        Auth.main().then(res => console.log(res))
      }).catch(err => {
        console.log(err)
      });
  }

  render() {

    if (this.state.authenticated === undefined) {
      return null; // TODO Implement loading gear
    }

    if (this.state.authenticated) {
      window.location = "/main"
      return <p>Rredirecting</p>

    }

    return (
      <Row>
        <h2>Already a member?</h2>
        <Input name="email" onChange={this.handleInputChange} type="email" label="Email" s={12} />
        <Input name="password" onChange={this.handleInputChange} type="password" label="password" s={12} />
        <Button waves='light' onClick={this.LoginHandler} >Login</Button>
        <Button waves='light' onClick={this.logoutHandler} >Logout</Button>
        <Modal
          header='New User'
          trigger={<Button>Create New User Account</Button>}>
          {/* <NewUser /> */}
        </Modal>
        {/* <p>
        <a href="/main/get-help">Create an account if not already a member.</a>
      </p> */}
      </Row>
    );
  }
}

export default Login;