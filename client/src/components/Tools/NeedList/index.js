import React from 'react';
import { Card, Row, Col, Modal } from 'react-materialize';
import './style.css';
import NeedView from '../NeedView';

function NeedList(props) {
  
  return (
    <Row>
      {props.needs.length ? (
        <Row>
          {props.needs.map(need => (
            <div>
              <Modal
                className="modal-box"
                trigger={
                  <div
                    onMouseEnter={props.getHoverID}
                    id={need._id}>
                    <Card 
                      title={need.category}>
                      <Row>
                        <Col s="6">
                          <p>{need.description}</p>
                          <small>{need._id}</small>
                        </Col>
                        <Col s="6">
                          <img src={need.imageurl} alt="need"/>
                        </Col>
                      </Row>
                    </Card>
                  </div>
                }>
                <NeedView
                  category={need.category}
                  description={need.description} 
                  imageurl={need.imageurl}
                  _id={need._id} />
              </Modal>
            </div>
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
