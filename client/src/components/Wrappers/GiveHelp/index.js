import React, { Component } from 'react';
import { Col, Row, Preloader, CollapsibleItem } from 'react-materialize';
import NeedSearch from '../../Tools/NeedSearch';
import MapView from '../../Tools/MapView';
import ListView from '../../Tools/ListView';
import './style.css';
import Collapsible from 'react-materialize/lib/Collapsible';
import API from '../../../utils/API';

class GiveHelp extends Component {

  state = {
    needs: []
  }

  getNeeds() {
    API.getNeeds()
    .then(res => this.setState({ needs: res.data}))
    .catch(err => console.log(err));
  }

  componentDidMount() {
    this.getNeeds();
  }

  render() {
    return(
      <div className='Give-Help-Wrapper'>
        <Row>
          <Col id="left-column" s="4">
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
            <MapView 
              needs={this.state.needs}>
              <Preloader flashing/>
            </MapView>
          </Col>
        </Row>
      </div>
    );
  }
}

export default GiveHelp;