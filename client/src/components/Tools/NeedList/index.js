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
              className='need-modal'
              open={props.isModalOpen}
              trigger={
                <div>
                  <Card
                    className='need-card'
                    onMouseEnter={() => props.onHoverEvent(need.lat, need.lng)}
                    key={need._id}
                    value={need._id}
                  >
                    <Row>
                      <Col s={6}>
                        <h5>{need.subject}</h5>
                      </Col>
                      <Col s={6}>
                        <img src={need.imageurl} alt='need' />
                      </Col>
                    </Row>
                  </Card>
                </div>
              }
            >
              <Card id='need-box' key={need._id}>
                <NeedView
                  markResolved={props.markResolved}
                  markUnresolved={props.markUnresolved}
                  deleteNeed={props.deleteNeed}
                  resolved={need.resolved}
                  subject={need.subject}
                  category={need.category}
                  description={need.description}
                  postdate={need.postdate}
                  imageurl={need.imageurl}
                  _id={need._id}
                  key={need._id}
                  needUser={need.user}
                  currentUserID={props.currentUserID}
                  offerHelp={props.offerHelp}
                  goodSamaritins={need.contributor}
                />
              </Card>
              <Card id='message-box'>
                <Messages
                  needId={need._id}
                  currentUserID={props.currentUserID}
                  deleteMessage={props.deleteMessage}
                />
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
