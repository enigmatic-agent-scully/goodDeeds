import React from 'react';
import { Card, Row, Col, Modal } from 'react-materialize';
import './style.css';
import NeedView from '../NeedView';
import Messages from './../Messages/index';
function NeedList(props) {

  return (
    <Row>
      {props.needs.length ? (
        <Row>
          {props.needs.map(need => (
            <Modal
              trigger={
                <Card 
                  onMouseEnter={props.getHoverID}
                  key={need._id} 
                  title={need.category}>
                  <Row>
                    <Col s="6">
                      <p>{need.description}</p>
                    </Col>
                    <Col s="6">
                      <img src={need.imageurl} alt="need" />
                    </Col>
                  </Row>
                </Card>
              }>
              <Card key={need._id} title={need.category}>
                <NeedView
                  category={need.category}
                  description={need.category}
                  imageurl={need.imageurl}
                  _id={need._id} />
                <Messages needId={need._id} />
              </Card>
            </Modal>
          ))}
        </Row>
      ) : (
        <Card>
          <h4>No Results to Display</h4>
        </Card>
      )}
    </Row>
  );
}


export default NeedList;
