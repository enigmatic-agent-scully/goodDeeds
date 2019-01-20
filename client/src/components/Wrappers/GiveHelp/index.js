import React from 'react';
import { Col, Row, Preloader } from 'react-materialize';
import NeedSearch from '../../Tools/NeedSearch';
import MapView from '../../Tools/MapView';
import ListView from '../../Tools/ListView';
import './style.css';

function GiveHelp() {
  return(
    <div className='Give-Help-Wrapper'>
      <Row>
        <Col s="4">
          <NeedSearch />
          <ListView>
            <Preloader flashing/>
          </ListView>
        </Col>
        <Col s="8">
          <MapView>
            <Preloader flashing/>
          </MapView>
        </Col>
      </Row>
    </div>
  );
}

export default GiveHelp;