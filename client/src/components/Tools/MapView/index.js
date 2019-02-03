import React, { Component } from 'react';
import { Row, Col, Card, Modal } from 'react-materialize';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
// import API from '../../../utils/API';
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
    // this.onHoverEvent = this.onHoverEvent.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
  }

  handleOpenModal(event) {
    console.log(event);
    console.log(this.state.showPopUp);

    this.setState({
      showPopUp: true
    });
  }

  handleCloseModal() {
    console.log('im in handleCloseModal');
    this.setState({
      showPopUp: false
    });
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
                    <div>
                      <Card
                        className='need-card'
                        // onMouseEnter={() => this.props.onHoverEvent(need._id)}
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
                      // markResolved={props.markResolved}
                      // markUnresolved={props.markUnresolved}
                      resolved={need.resolved}
                      category={need.category}
                      description={need.description}
                      imageurl={need.imageurl}
                      _id={need._id}
                      key={need._id}
                      needUser={need.user}
                    // currentUserID={props.currentUserID}
                    />
                    <Messages needId={need._id} />
                  </Card>
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
