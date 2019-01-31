import React, { Component } from 'react';
import { Card, Icon } from 'react-materialize';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
// import API from '../../../utils/API';
import './style.css';




class MapView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cntLat: props.cntLat,
      cntLng: props.cntLng,
      needs: []
    };
  }

  render(){
    return (
      <Card>
        <Map className='map-on-card' center={[this.props.cntLat, this.props.cntLng]} zoom={14}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          {this.props.needs.map(need => (
            <Marker 
              position={[need.lat, need.lng]}>
              <Popup>
                <h5>{need.category}</h5>
                <p>{need.description}</p> 
                <small>{need.resolved ?  
                  <Icon small>checked_circle_outine</Icon>
                  : 
                  <Icon small>not_interested</Icon>
                }
                </small>
                <br />
                <img src={need.imageurl} alt='need' />
              </Popup>
            </Marker>
          ))}
        </Map>
      </Card>
    );
  }
}

export default MapView;
