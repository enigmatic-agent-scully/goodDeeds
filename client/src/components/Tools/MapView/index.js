import React, { Component } from 'react';
import { Row, Card, Modal } from 'react-materialize';
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
                    <Card
                      className='need-card'
                      key={need._id}
                      value={need._id}
                    >
                      <Row>
                        <h5>{need.subject}</h5>
                        <div className='description-text'>{need.description}</div>
                        <img src={need.imageurl} alt='need' />
                      </Row>
                    </Card>
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
                      subject={need.subject}
                      _id={need._id}
                      key={need._id}
                      needUser={need.user}
                      offerHelp={this.props.offerHelp}
                      goodSamaritins={need.contributor}
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
