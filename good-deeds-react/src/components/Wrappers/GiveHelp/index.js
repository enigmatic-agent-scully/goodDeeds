import React from 'react';
import { Col, Row } from 'react-materialize';
import HelpInput from '../../Tools/HelpInput';
import MapView from '../../Tools/MapView';
import ListView from '../../Tools/ListView';
import './style.css';

function GiveHelp() {
  return(
    <div className='Give-Help-Wrapper'>
      <Row>
        <Col s="4">
          <HelpInput />
        </Col>
        <Col s="4">
          <ListView />
        </Col>
        <Col s="4">
          <MapView />
        </Col>
      </Row>
    </div>
  );
}

export default GiveHelp;