// User Login input /newuser

// Name, Address, Username, Password, Income, Date of Birth, Race, Ethnicity

import React from 'react';
import { Card, Row, Input, Button } from 'react-materialize';
import './style.css';

// Rewrite as Class with State passing using ID and Handler with calls /api/needs/ POST request

function NewUser() {  
  return(
    <Card>
      <Row>
        <Input name="firstname" s={6} label="First Name" />
        <Input name="lastname" s={6} label="Last Name" />
        <Input name="email" type="email" label="Email" s={12} />
        <Input name="username" type="text" label="Username" s={12} />
        <Input name="password1" type="password" label="Password" s={12} />
        <Input name="password" label="Confirm Password" s={12} />
      </Row>
      <Button waves='light'>submit</Button>
    </Card>  
  );
}

export default NewUser;