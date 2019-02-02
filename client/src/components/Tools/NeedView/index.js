import React from 'react';
import { Row, Col, Button } from 'react-materialize';
import './style.css';

// Rewrite as Class with State passing using ID and Handler with calls /api/needs/ POST request

function NeedView(props) {
  return (
    <Row>
      <Col s={12} m={6}>
        <h4>{props.category}</h4>
        <p>{props.description}</p>
        <small>
          {props.resolved ? (
            <Button
              key={props.key}
              value={props._id}
              onClick={props.markUnresolved}
            >
              Mark Unresolved
            </Button>
          ) : (
            <Button
              key={props.key}
              value={props._id}
              onClick={props.markResolved}
            >
              Mark Resolved
            </Button>
          )}
        </small>
      </Col>
      <Col s={12} m={6}>
        <img src={props.imageurl} alt='need' />
      </Col>
    </Row>
  );
}

export default NeedView;
