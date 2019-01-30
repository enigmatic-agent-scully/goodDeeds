import React from 'react';
import { Row, Col } from 'react-materialize';
import './style.css';

// Rewrite as Class with State passing using ID and Handler with calls /api/needs/ POST request

function NeedView(props) { 
  return (
    <Row>
      <Col s="6">
        <h4>{props.category}</h4>
        <p>{props.description}</p>
        <small>{props.resolved ? 'Resolved' : 'Not Resolved'}</small>
      </Col>
      <Col s="6">
        <img src={props.imageurl} alt="need"/>
      </Col>
    </Row>
  );
}

export default NeedView;
