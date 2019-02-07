import React from 'react';
import { Card, Row, Col, Modal, Tabs, Tab } from 'react-materialize';
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
                        <h5>{need.category}</h5>
                      </Col>
                      <Col s={6}>
                        <img src={!need.imageurl ? 'http://vollrath.com/ClientCss/images/VollrathImages/No_Image_Available.jpg' : need.imageurl} alt='need' />
                      </Col>
                    </Row>
                  </Card>
                </div>
              }
            >
              <Tabs className='tab-demo z-depth-1'>

                <Tab title='need' active>
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
                      imageurl={!need.imageurl ? 'http://vollrath.com/ClientCss/images/VollrathImages/No_Image_Available.jpg' : need.imageurl}
                      _id={need._id}
                      key={need._id}
                      needUser={need.user}
                      currentUserID={props.currentUserID}
                      offerHelp={props.offerHelp}
                      goodSamaritins={need.contributor}
                    />
                  </Card>
                </Tab>

                <Tab title='Messages'>
                  <Card id='message-box'>
                    <Messages
                      needId={need._id}
                      currentUserID={props.currentUserID}
                      deleteMessage={props.deleteMessage}
                    />
                  </Card>
                </Tab>

                <Tab title='Details'>
                  <Card >
                    <div>{need.description}</div>
                  </Card>
                </Tab>

              </Tabs>
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
