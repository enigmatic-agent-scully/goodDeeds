// User Login input /newuser

// Name, Address, Username, Password, Income, Date of Birth, Race, Ethnicity

import React from 'react';
import { Card, Row, Input, Button } from 'react-materialize';
import './style.css';

// Rewrite as Class with State passing using ID and Handler with calls /api/needs/ POST request

function NewUser(props) {
  return (
    <Card>
      <Row>
        <Input name="firstName" s={6} label="First Name" onChange={props.handleInputChange} required />
        <Input name="lastName" s={6} label="Last Name" onChange={props.handleInputChange} required />
        <Input name="email" type="email" label="Email" s={12} onChange={props.handleInputChange} />
        <Input name="userName" type="text" label="Username" s={12} onChange={props.handleInputChange} />
        <Input
          onChange={props.uploadHandler} 
          type="file" 
          label="Add Photo" 
          s={12}  
          placeholder="JPG, PNG, or GIFs only" />
        <Input name="password" type="password" label="Password" s={12} onChange={props.handleInputChange} />
        <Input name="passwordConfirmed" type="password" label="Confirm Password" s={12} onChange={props.handleInputChange} />
      </Row>
      <Button waves='light' onClick={props.handleModalFormSubmit} type="submit">submit</Button>
    </Card>
  );
}

export default NewUser;