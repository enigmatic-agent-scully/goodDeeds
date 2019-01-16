import React from 'react';
import { Col, Row } from 'react-materialize';
import NeedInput from '../../Tools/NeedInput';
import NeedList from '../../Tools/NeedList';
import ResolvedList from '../../Tools/ResolvedList';
import './style.css';

function GetHelp() {
  return(
    <div className='Get-Help-Wrapper'>
      <Row>
        <Col s="4">
          <NeedInput />
        </Col>
        <Col s="4">
          <NeedList />
        </Col>
        <Col s="4">
          <ResolvedList />
        </Col>
      </Row>
    </div>
  );
}

export default GetHelp;