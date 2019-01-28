import React from 'react';
import { Row, Col, Card, Button, Input } from 'react-materialize';
import './style.css';

// Rewrite as Class with State passing using ID and Handler with calls /api/needs/ POST request

function NeedView(props) { 
  return (
    <Card key={props._id} title={props.category}>
      <Row>
        <Col s="6">
          <p>{props.description}</p>
        </Col>
        <Col s="6">
          <img src={props.imageurl} alt="need"/>
        </Col>
        <Input
          name="message"
          className="message-input"
          // value={this.state.message}
          // onChange={this.handleInputChange}
          s={12}
          label="type your message"
          type="textarea" >
        </Input>
        <Button 
          waves='light'
          // onClick={this.submitPost}
        >
        Post Message </Button>
        {/* {this.state.retunedMessageArray.map((message) =>
            <p key={message._id}>
            {message.user.userName}: {message.message}
            </p>)} */}
      </Row>
    </Card>
  );
}

export default NeedView;
