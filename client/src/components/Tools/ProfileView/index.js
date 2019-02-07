import React from 'react';
import { Row, Col, Button, Input, Card } from 'react-materialize';
import './style.css';

// Rewrite as Class with State passing using ID and Handler with calls /api/needs/ POST request


function ProfileView(props) {
  return (
    <div>
      <Row>
        <Col s="12" l="6">
          <h2>Edit Profile</h2>
          <Button 
            id='save-edits-button' 
            onClick={props.handleSaveToExistingProfile}>
            Save Edits
          </Button>
          <div id='profile-edit-form'>
            <Input 
              s= "12"
              className="profile-input" 
              name="firstName"
              label="First Name"
              placeholder={props.firstName} 
              onChange={props.handleInputChange}/>
            <Input 
              s= "12"
              className="profile-input" 
              name="lastName" 
              label='Last Name'
              placeholder={props.lastName} 
              onChange={props.handleInputChange}/>
            <Input 
              s="12"
              className="profile-input" 
              name="userName" 
              label="Username"
              placeholder={props.userName} 
              onChange={props.handleInputChange}/>
            <Input 
              s="12"
              className="profile-input" 
              name="email"
              label="Email" 
              placeholder={props.email} 
              onChange={props.handleInputChange}/>
          </div>
        </Col>
        <Col s="12" l="6">
          <Card>

            <img 
              id="profile-picture" 
              src={props.imageurl} 
              alt='user-pic' />
          </Card>
          <Input
            id='image-input'
            onChange={props.uploadHandler}
            name='imageurl'
            type="file"
            label='Update Image'
            s= "12"
            placeholder="JPG, PNG, or GIFs only" />
            
        </Col>
      </Row>
    </div>
    
  );
}

export default ProfileView;
