// User Login input /newuser

// Name, Address, Username, Password, Income, Date of Birth, Race, Ethnicity

import React from 'react';
import { Card, Row, Input, Button } from 'react-materialize';
import './style.css';

// Rewrite as Class with State passing using ID and Handler with calls /api/needs/ POST request

function NewUser({ handleModalFormSubmit, handleInputChange }) {
  return (
    <Card>
      <Row>
        <Input name="firstName" s={6} label="First Name" onChange={handleInputChange} required />
        <Input name="lastName" s={6} label="Last Name" onChange={handleInputChange} required />
        <Input name="email" type="email" label="Email" s={12} onChange={handleInputChange} />
        <Input name="userName" type="text" label="Username" s={12} onChange={handleInputChange} />
        <Input name="password" type="password" label="Password" s={12} onChange={handleInputChange} />
        <Input name="passwordConfirmed" type="password" label="Confirm Password" s={12} onChange={handleInputChange} />
      </Row>
      <Button waves='light' onClick={handleModalFormSubmit} type="submit">submit</Button>
    </Card>
  );
}

export default NewUser;