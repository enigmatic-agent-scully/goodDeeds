import React from 'react';
import { Card } from 'react-materialize';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import API from '../../../utils/API';
import './style.css';

let lat = 33.785;
let lng = -84.385;

const setCenter = id => {
  API.getNeed(id)
    .then(res => {
      lat = res.data.lat;
      lng = res.data.lng;
    });
};

export default function MapView(props) {

  if (props.hoverID) {
    setCenter(props.hoverID);
  }

  return (
    <Card>
      <Map className='map-on-card' center={[lat, lng]} zoom={14}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {props.needs.map(need => (
          <Marker position={[need.lat, need.lng]}>
            <Popup>
              <h5>{need.category}</h5>
              <p>{need.description}</p> 
              {/* {need.needdate} */}
              <br />
              <img src={need.imageurl} alt='need' />
            </Popup>
          </Marker>
        ))}
      </Map>
    </Card>
  );
}
