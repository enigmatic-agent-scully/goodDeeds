import React, { Component } from 'react';
import { Col, Row, Preloader, CollapsibleItem } from 'react-materialize';
import NeedSearch from '../../Tools/NeedSearch';
import MapView from '../../Tools/MapView';
import NeedList from '../../Tools/NeedList';
import './style.css';
import Collapsible from 'react-materialize/lib/Collapsible';
import API from '../../../utils/API';

class GiveHelp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      needs: [],
      cntLat: 33.785,
      cntLng: -84.385
    };

    this.getNeeds = this.getNeeds.bind(this);
    this.setCenter = this.setCenter.bind(this);
    this.filterBySearch = this.filterBySearch.bind(this);
  }


  getNeeds() {
    API.getNeeds()
      .then(res => this.setState({ needs: res.data}))
      .catch(err => console.log(err));
  }

  setCenter(id) {
    API.getNeed(id)
      .then(res => {
        this.setState({
          cntLat: res.data.lat,
          cntLng: res.data.lng
        });
      });
  }

  filterBySearch(category){
    API.getNeeds()
      .then(res => this.setState({ 
        needs: res.data.filter(
          need => need.category === category)
      }));
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
                <NeedSearch
                  filterBySearch={this.filterBySearch}
                  getNeeds={this.getNeeds} />
              </CollapsibleItem>
              <CollapsibleItem header="List of Needs" icon="list">
                <NeedList
                  onHoverEvent={this.setCenter} 
                  className="list-view" 
                  needs={this.state.needs}/>
              </CollapsibleItem>
            </Collapsible>
          </Col>
          <Col s="8">
            <MapView 
              needs={this.state.needs}
              cntLat={this.state.cntLat}
              cntLng={this.state.cntLng}>
              <Preloader flashing/>
            </MapView>
          </Col>
        </Row>
      </div>
    );
  }
}

export default GiveHelp;