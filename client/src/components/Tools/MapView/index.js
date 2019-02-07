import React from 'react';
import { Row, Card, Modal } from 'react-materialize';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import './style.css';
import NeedView from '../NeedView/index';
import Messages from '../Messages/index';
// import { StickyContainer, Sticky } from 'react-sticky';

function MapView(props) {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     cntLat: props.cntLat,
  //     cntLng: props.cntLng,
  //     needs: [],
  //     showPopUp: false,
  //   };
  // }

<<<<<<< HEAD
  render() {
    // debugger;
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
                  className='need-modal'
                  id='need-box'
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
                        {!need.imageurl ? null : <img src={need.imageurl} alt='need' />}
                      </Row>
                    </div>
                  }
                >
=======
  // render() {
  return (
    <Card>
      <Map
        className='map-on-card'
        center={[props.cntLat, props.cntLng]}
        zoom={14}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {props.needs.map(need => (
          <Marker position={[need.lat, need.lng]}>
            <Popup>         
              {/* <StickyContainer> */}
              <Modal 
                className='need-modal'
                id='need-box'
                // open={props.isMapModalOpen}
                trigger={
>>>>>>> 8b6349d995518d41bea4217a878e8c606a599c42
                  <div
                  // onClick={props.handleOpenModal}
                    className='need-popup-card'
                    key={need._id}
<<<<<<< HEAD
                  >
                    <NeedView
                      id='need-box'
                      resolved={need.resolved}
                      category={need.category}
                      description={need.description}
                      imageurl={!need.imageurl ? 'http://vollrath.com/ClientCss/images/VollrathImages/No_Image_Available.jpg' : need.imageurl}
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
=======
                    value={need._id}>
                    <Row>
                      <h5>{need.subject}</h5>
                      <div className='description-text'>{need.description}</div>
                      { !need.imageurl ? null : <img src={need.imageurl} alt='need'/> }
                    </Row>
                  </div>
                }>
                <Card
                  key={need._id}>
                  {/* <Sticky>
                      {({ wasSticky,calculatedHeight   }) => {
                        <div style={{   }}> */}
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
                    offerHelp={props.offerHelp}
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
  // }
>>>>>>> 8b6349d995518d41bea4217a878e8c606a599c42
}

export default MapView;
