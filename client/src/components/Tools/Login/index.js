import React from 'react';
import { Input, Row, Button} from 'react-materialize';
import './style.css';

function Login() {
  return(
    <Row>
      <h2>Already a member?</h2> 
      <Input type="email" label="Email" s={12} />
      <Input type="password" label="password" s={12} />
      <Button waves='light'>Login</Button>
      <p>
        <a href="/main/get-help">Create an account if not already a member.</a>
      </p>
    </Row>
  );
}

export default Login;