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
      hoverID: ''
    };

    this.getNeeds = this.getNeeds.bind(this);
    this.getHoverID = this.getHoverID.bind(this);

  }


  getNeeds() {
    API.getNeeds()
      .then(res => this.setState({ needs: res.data}))
      .catch(err => console.log(err));
  }

  getHoverID(event) {
    // event.preventDefault();
    console.log(event.target);
    this.setState({
      hoverID: '5c4d1c2f7fec955eb2dcbd2a'
    });
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
                <NeedList
                  getHoverID={this.getHoverID} 
                  className="list-view" 
                  needs={this.state.needs}/>
              </CollapsibleItem>
            </Collapsible>
          </Col>
          <Col s="8">
            <MapView 
              needs={this.state.needs}
              hoverID={this.state.hoverID}>
              <Preloader flashing/>
            </MapView>
          </Col>
        </Row>
      </div>
    );
  }
}

export default GiveHelp;