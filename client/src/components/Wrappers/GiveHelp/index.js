import React from 'react';
import { Col, Row, Preloader, CollapsibleItem } from 'react-materialize';
import NeedSearch from '../../Tools/NeedSearch';
import MapView from '../../Tools/MapView';
import ListView from '../../Tools/ListView';
import './style.css';
import Collapsible from 'react-materialize/lib/Collapsible';

function GiveHelp() {
  return(
    <div className='Give-Help-Wrapper'>
      <Row>
        <Col s="4">
          <Collapsible defaultActiveKey={0}>
            <CollapsibleItem header="Search Needs" icon="search">
              <NeedSearch />
            </CollapsibleItem>
            <CollapsibleItem header="List of Needs" icon="list">
              <ListView className="list-view" />
            </CollapsibleItem>
          </Collapsible>
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