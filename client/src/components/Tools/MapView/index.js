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
      showPopUp: false,
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
<<<<<<< HEAD
                <Modal
=======
                {/* <StickyContainer> */}
                <Modal 
                  className='need-modal'
                  id='need-box'
>>>>>>> 4c051a2ba1d935778032fb8c4484ce3054421f20
                  open={this.props.isModalOpen}
                  trigger={
                    <div onClick={this.props.handleOpenModal}
                      className='need-card'
                      key={need._id}
                      value={need._id}
                    >
                      <Row>
                        <h5>{need.subject}</h5>
                        <div className='description-text'>{need.description}</div>
                        { !need.imageurl ? null : <img src={need.imageurl} alt='need'/> }
                      </Row>
                    </div>
                  }
                >
                  <div
                    key={need._id}
                  >
                    <NeedView
                      id='need-box'
                      resolved={need.resolved}
                      category={need.category}
                      description={need.description}
                      imageurl={ !need.imageurl ? 'http://vollrath.com/ClientCss/images/VollrathImages/No_Image_Available.jpg' : need.imageurl }
                      subject={need.subject}
                      _id={need._id}
                      key={need._id}
                      needUser={need.user}
                      offerHelp={this.props.offerHelp}
                      goodSamaritins={need.contributor}
                    />
                    <Messages needId={need._id} />
                  </div>
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
