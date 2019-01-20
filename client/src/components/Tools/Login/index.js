import React, { Component } from 'react';
import { Input, Row, Button, Modal, Card } from 'react-materialize';
// import Auth from '../../../utils/'
import NewUser from '../NewUser';
import './style.css';
import Auth from '../../../utils/Auth';

class Login extends Component {
  
  state = {
    email: "",
    password: ""
  };

  handleInputChange = event => {
    const { name, value }  = event.target;
    this.setState({
      [name]: value
    });
  }
  
  LoginHandler = event => {
    event.preventDefault();
    const loginInfo = this.state;
    console.log(loginInfo);
    Auth.login({
      email: this.state.email,
      password: this.state.password
    })
  }
  
  render() {
    return(
      <Row>
        <Card>
        <Modal
          header='New User'
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