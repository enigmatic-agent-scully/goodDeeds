import React from 'react';
import { Row, Col } from 'react-materialize';
import './style.css';

// Rewrite as Class with State passing using ID and Handler with calls /api/needs/ POST request

function ProfileView(props) {  
  return(
    <Row>
      <Col s="6">
        <img src={props.imageurl} alt="user-pic" />
      </Col>
      <Col s="6">
        <h2>{props.userName}</h2>
        <h3>{props.firstName} {props.lastName}</h3>
        <h5>{props.email}</h5>
      </Col>
    </Row>
  );
}

export default ProfileView;