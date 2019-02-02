import React from 'react';
import { Row, Col, Button, Icon } from 'react-materialize';
import './style.css';

// Rewrite as Class with State passing using ID and Handler with calls /api/needs/ POST request

function NeedView(props) {
  // console.log(props.needUser);
  // console.log(props.currentUserID);
  return (
    <Row>
      <Col s={12} m={6}>
        <h4>{props.category}</h4>
        <p>{props.description}</p>
        {props.needUser === props.currentUserID ? (
          <div>
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
          </div>
        ) : (
          <div>
            {props.resolved ? (
              <Icon key={props.key} value={props._id}>
                done_outline
              </Icon>
            ) : (
              <Icon key={props.key} value={props._id}>
                stars
              </Icon>
            )}
          </div>
        )}
      </Col>
      <Col s={12} m={6}>
        <img src={props.imageurl} alt='need' />
      </Col>
    </Row>
  );
}

export default NeedView;
