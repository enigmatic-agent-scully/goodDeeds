import React, { Component } from 'react';
import { Row, Col, Card, Modal } from 'react-materialize';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import './style.css';
import NeedView from '../NeedView/index';
import Messages from '../Messages/index';
// import { StickyContainer, Sticky } from 'react-sticky';

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
                {/* <StickyContainer> */}
                <Modal
                  open={this.props.isModalOpen}
                  trigger={
                    <div>
                      <Card
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
                      </Card>
                    </div>
                  }
                >
                  <Card
                    key={need._id}
                  >
                    {/* <Sticky>
                        {({ wasSticky,calculatedHeight   }) => {
                          <div style={{   }}> */}
                    <NeedView
                      resolved={need.resolved}
                      category={need.category}
                      description={need.description}
                      imageurl={need.imageurl}
                      _id={need._id}
                      key={need._id}
                      needUser={need.user}
                      offerHelp={this.props.offerHelp}
                    />
                    {/* </div>;
                        }}
                      </Sticky> */}
                    <Messages needId={need._id} />
                  </Card>
                </Modal>
                {/* </StickyContainer> */}
              </Popup>
            </Marker>
          ))}
        </Map>
      </Card >
    );
  }
}

export default MapView;
