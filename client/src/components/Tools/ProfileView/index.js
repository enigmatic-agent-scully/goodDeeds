import React from 'react';
import { Row, Col, Button, Input } from 'react-materialize';
import './style.css';

// Rewrite as Class with State passing using ID and Handler with calls /api/needs/ POST request


function ProfileView(props) {
  return (
    <Row>
      <Row>
        <Col s={2}>
          <img id="profile-picture" src={props.imageurl} alt='user-pic' />
        </Col>
      </Row>
      <Row>
        <Col s={4}>
          <div className="labels">Profile Pic: </div>
        </Col>
        <Col s={8}>
          <Input
            onChange={props.uploadHandler}
            name='imageurl'
            type="file"
            label="Add Photo"
            s={12}
            placeholder="JPG, PNG, or GIFs only" />
        </Col>
      </Row>
      <Row>
        <Col s={4}>
          <div className="labels">First Name: </div>
        </Col>
        <Col s={8}>
          <Input className="profile-input" name="firstName" value={props.firstName} onChange={props.handleInputChange}></Input>
        </Col>
      </Row>
      <Row>
        <Col s={4}>
          <div className="labels">Last Name: </div>
        </Col>
        <Col s={8}>
          <Input className="profile-input" name="lastName" value={props.lastName} onChange={props.handleInputChange}></Input>
        </Col>
      </Row>
      <Row>
        <Col s={4}>
          <div className="labels">Username: </div>
        </Col>
        <Col s={8}>
          <Input className="profile-input" name="userName" value={props.userName} onChange={props.handleInputChange}></Input>
        </Col>
      </Row>
      <Row>
        <Col s={4}>
          <div className="labels">Email: </div>
        </Col>
        <Col s={8}>
          <Input className="profile-input" name="email" value={props.email} onChange={props.handleInputChange}></Input>
        </Col>
      </Row>
      <Button onClick={props.handleSaveToExistingProfile}>Save</Button>
    </Row >
  );
}

export default ProfileView;
