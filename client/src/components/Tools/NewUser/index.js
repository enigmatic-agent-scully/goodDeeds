// User Login input /newuser

// Name, Address, Username, Password, Income, Date of Birth, Race, Ethnicity

import React from 'react';
import { Row, Input, Button } from 'react-materialize';
import './style.css';

// Rewrite as Class with State passing using ID and Handler with calls /api/needs/ POST request

function NewUser(props) {
  return (
    <div>
      <Row>
        <Input
          name='firstName'
          s={12} l={6}
          label='First Name'
          onChange={props.handleInputChange}
          required
        />
        <Input
          name='lastName'
          s={12} l={6}
          label='Last Name'
          onChange={props.handleInputChange}
          required
        />
        <Input
          name='email'
          type='email'
          label='Email'
          s={12}
          onChange={props.handleInputChange}
        />
        <Input
          name='userName'
          type='text'
          label='Username'
          s={12}
          onChange={props.handleInputChange}
        />
        <Input
          onChange={props.uploadHandler}
          name='imageurl'
          type='file'
          label='Add Photo'
          s={12}
          placeholder='JPG, PNG, or GIFs only'
        />
        <Input
          name='password'
          type='password'
          label='Password'
          s={12}
          onChange={props.handleInputChange}
        />
        <Input
          name='passwordConfirmed'
          type='password'
          label='Confirm Password'
          s={12}
          onChange={props.handleInputChange}
        />
      </Row>
      <Button id='submit-new-user-button' className='blue' waves='light' onClick={props.handleModalFormSubmit} type='submit'>
        Submit
      </Button>
    </div>
  );
}

export default NewUser;
