import React, { Component } from 'react';
import { Input, Row, Button, Modal, Card } from 'react-materialize';
import NewUser from '../NewUser';
import './style.css';
import Auth from '../../../utils/Auth';

class Login extends Component {

  state = {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    passwordConfirmed: ''
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

  //login/authentication function
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
        //after successful authentication we'll redirect to the returned address (we set this on the server side)
        window.location = res.data.redirect
      }).catch(err => {
        if (err.response.data.error) {
          // Todo Show the flash message
          //I'll change this to react side flash instead of a window alert
          alert(err.response.data.error)
        }
      });
    }
  }

  handleModalFormSubmit = event => {
    console.log('form is submitted')
  }

  //function handles logout, but does not belong on this page...it needs to move to nav bar section shown on main page
  //when function is executed in current form it'll redirect us back to the landing page
  // logoutHandler = (event) => {
  //   Auth.logout()
  //     .then(res => {
  //       debugger
  //       console.log('you successfully got logged out and came back to the promise')
  //       //
  //       Auth.main().then(res => console.log(res))
  //     }).catch(err => {
  //       console.log(err)
  //     });
  // }

  render() {

    //this statement is checking ot see if user is authenticated as set by the super constructor up top
    //if not authenticated they can proceed 
    if (this.state.authenticated === undefined) {
      return null; // TODO Implement loading gear
    }

    //this statement is checking ot see if user is authenticated as set by the super constructor up top
    //if authenticated they'll be re-directed to the main page
    // if (this.state.authenticated) {
    //   window.location = "/main"
    //   return <p>Rredirecting</p>
    // }

    return (
      <Row>
        <Card>
          <Modal
            header='New User'
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            userName={this.state.userName}
            email={this.state.email}
            password={this.state.password}
            passwordConfirmed={this.state.passwordConfirmed}
            handleModalFormSubmit={this.handleModalFormSubmit}
            trigger={<Button>Create New User Account</Button>}>
            <NewUser />
          </Modal>
          <h2>Already a member?</h2>
          <Input name="email" onChange={this.handleInputChange} type="email" label="Email" s={12} />
          <Input name="password" onChange={this.handleInputChange} type="password" label="password" s={12} />
          <Button waves='light' onClick={this.LoginHandler} >Login</Button>
        </Card>
      </Row>
    );
  }
}

export default Login;