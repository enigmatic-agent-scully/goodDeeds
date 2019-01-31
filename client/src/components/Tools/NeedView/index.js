import React from 'react';
import { Row, Col, Icon } from 'react-materialize';
import './style.css';

// Rewrite as Class with State passing using ID and Handler with calls /api/needs/ POST request

function NeedView(props) { 
  return (
    <Row>
      <Col s="6">
        <h4>{props.category}</h4>
        <p>{props.description}</p>
        <small>{props.resolved ?  
          <Icon small>checked_circle_outine</Icon>
          : 
          <Icon small>not_interested</Icon>
        }
        </small>
      </Col>
      <Col s="6">
        <img src={props.imageurl} alt="need"/>
      </Col>
    </Row>
  );
}

export default NeedView;
