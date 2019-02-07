import React, { Component } from 'react';
import { Row, Col, Card, Modal, Tab, Tabs } from 'react-materialize';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import './style.css';
import NeedView from '../NeedView/index';
import Messages from '../Messages/index';

class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cntLat: props.cntLat,
      cntLng: props.cntLng,
      needs: [],
      showPopUp: false
    };
  }


  render() {
    return (
      <Card>
        <Map
          className='map-on-card'
          center={[this.props.cntLat, this.props.cntLng]}
          zoom={14}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          {this.props.needs.map(need => (
            <Marker position={[need.lat, need.lng]}>
              <Popup>
                <Modal
                  open={this.props.isModalOpen}
                  trigger={
                    <div

                      className='need-card'
                      key={need._id}
                      value={need._id}
                    >
                      <Row>
                        <Col s={6}>
                          <h5>{need.category}</h5>
                          <p>{need.description}</p>
                        </Col>
                        <Col s={6}>
                          <img src={need.imageurl} alt='need' />
                        </Col>
                      </Row>

                    </div>
                  }
                >
                  <Tabs className='tab-demo z-depth-1'>
                    <Tab title='need' active>
                      <Card id='need-box' key={need._id}>
                        <NeedView
                          resolved={need.resolved}
                          category={need.category}
                          description={need.description}
                          imageurl={need.imageurl}
                          _id={need._id}
                          key={need._id}
                          needUser={need.user}
                          offerHelp={this.props.offerHelp}
                          goodSamaritins={need.contributor}
                        />
                      </Card>
                    </Tab>
                    <Tab title='Messages'>
                      <Card id='message-box'>
                        <Messages needId={need._id} />
                      </Card>
                    </Tab>
                  </Tabs>
                </Modal>
              </Popup>
            </Marker>
          ))}
        </Map>
      </Card >
    );
  }
}

export default MapView;