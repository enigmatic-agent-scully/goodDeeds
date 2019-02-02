import React from 'react';
import { Card, Row, Col, Modal } from 'react-materialize';
import './style.css';
import NeedView from '../NeedView';
import Messages from './../Messages/index';
// import NeedSearch from '../NeedSearch';


function NeedList(props) {
  // console.log(props.needs);
  return (
    <Row>
      {props.needs.length ? (
        <Row>
          {props.needs.map(need => (
            <Modal
              open={props.isModalOpen}
              trigger={
                <div>
                  <Card
                    className='need-card'
                    onMouseEnter={() => props.onHoverEvent(need._id)}
                    key={need._id}
                    value={need._id}
                    // title={need.category}
                  >
                    <Row>
                      <Col s={6}>
                        <h5>{need.category}</h5>
                        <p>{need.description}</p>
                        {/* <p>Posted by {need.user.username} ({need.user._id})</p> */}
                      </Col>
                      <Col s={6}>
                        <img src={need.imageurl} alt='need' />
                      </Col>
                    </Row>
                  </Card>
                </div>
              }
            >
              <Card
                key={need._id}
                // title={need.category}
              >
                <NeedView
                  markResolved={props.markResolved}
                  markUnresolved={props.markUnresolved}
                  resolved={need.resolved}
                  category={need.category}
                  description={need.description}
                  imageurl={need.imageurl}
                  _id={need._id}
                  key={need._id}
                  user={need.user}
                />
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
