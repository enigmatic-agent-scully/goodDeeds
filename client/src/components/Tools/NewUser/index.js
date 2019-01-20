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
        <Input s={6} label="First Name" />
        <Input s={6} label="Last Name" />
        <Input name="email" type="email" label="Email" s={12} />
        <Input name="username" type="text" label="Username" s={12} />
        <Input type="password" label="Password" s={12} />
        <Input name="password" label="Confirm Password" s={12} />
      </Row>
      {/* <Row>
        <h4>Need Profile</h4>
        <Input s={12} label="Choose Income Bracket" type='select' defaultValue='0'>         
          <option value='0'>-Pick One-</option>
          <option value='1'>Less than $10K/year</option>
          <option value='2'>$10K to $15K/year</option>
          <option value='3'>$15K to $20K/year</option>
          <option value='4'>$20K to $30K/year</option>
          <option value='5'>$20K to $30K/year</option>
        </Input>
        <Input s={12} label="Choose Race Category" type='select' defaultValue='0'>         
          <option value='0'>-Pick One-</option>
          <option value='1'>Black</option>
          <option value='2'>White</option>
          <option value='3'>Asian</option>
          <option value='4'>More than one race</option>
          <option value='5'>Other</option>
        </Input>
      </Row>       */}
      <Button waves='light'>submit</Button>
    </Card>  
  );
}

export default NewUser;