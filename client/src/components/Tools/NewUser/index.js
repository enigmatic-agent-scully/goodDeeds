// User Login input /newuser

// Name, Address, Username, Password, Income, Date of Birth, Race, Ethnicity

import React from 'react';
import { Card, Row, Input, Button } from 'react-materialize';
import './style.css';

// Rewrite as Class with State passing using ID and Handler with calls /api/needs/ POST request

function NewUser({ firstName, lastName, email, userName, password, passwordConfirmed, handleModalFormSubmit }) {
  return (
    <Card>
      <Row>
        <Input name="firstname" s={6} label="First Name" value={firstName} />
        <Input name="lastname" s={6} label="Last Name" value={lastName} />
        <Input name="email" type="email" label="Email" s={12} value={email} />
        <Input name="username" type="text" label="Username" s={12} value={userName} />
        <Input name="password1" type="password" label="Password" s={12} value={password} />
        <Input name="password" label="Confirm Password" s={12} value={passwordConfirmed} />
      </Row>
      <Button waves='light' onClick={handleModalFormSubmit} type="submit">submit</Button>
    </Card>
  );
}

export default NewUser;