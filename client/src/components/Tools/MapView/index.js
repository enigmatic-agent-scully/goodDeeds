import React, { Component } from 'react';
import { Card } from 'react-materialize';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import './style.css';
import API from '../../../utils/API';


export default class MapView extends Component {
    
  state = {
    needs: []
  }


  componentDidMount() {
    API.getNeeds()
    .then(res => this.setState({ needs: res.data}))
    .catch(err => console.log(err));
  }

  render() {
    return (
    <Card>
        <Map className="map-on-card"center={[51.505, -0.09]} zoom={16}>
        <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {this.state.needs.map(need => (
          <Marker position={[need.lat, need.lng]}>
          <Popup>
            {need.category} <br /> 
            {need.description} <br /> 
            {need.needdate}
          </Popup>
          </Marker>
        ))}
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