import React, { Component } from 'react';
import { Card } from 'react-materialize';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import './style.css';


export default class MapView extends Component {
    
  state = {
    lat: "",
    lng: "",
    zoom: "",
  }

  componentDidMount() {
      this.setState ({
        lat: 51.505,
        lng: -0.09,
        zoom: 13,
      })
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    return (
    <Card>
        <Map className="map-on-card"center={position} zoom={this.state.zoom}>
        <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
            <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
        </Map>
    </Card>
    )
  }
}

// function MapView() {
  
//   return(
//     <Card>
//       <Map center={position} zoom={13}>
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
//         />
//         <Marker position={position}>
//           <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
//         </Marker>
//       </Map>
//     </Card> 
//   );
// }

// export default MapView;