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
      cntLng: -84.385,
    };

    this.getNeeds = this.getNeeds.bind(this);
    this.setCenter = this.setCenter.bind(this);
    this.filterBySearch = this.filterBySearch.bind(this);
  }

  getNeeds() {
    API.getNeeds()
      .then(res => {
        var returnedNeed = res.data;
        var unresolvedReturnedNeed = returnedNeed.filter(need => !need.resolved);
        this.setState({ needs: unresolvedReturnedNeed });
      })
      .catch(err => console.log(err));
  }

  setCenter(id) {
    API.getNeed(id).then(res => {
      this.setState({
        cntLat: res.data.lat,
        cntLng: res.data.lng
      });
    });
  }

  filterBySearch(category, keyword, needdate) {
    console.log(category);
    console.log(keyword);
    console.log(needdate);


    API.getNeedsBySearch(category, keyword, needdate)
      .then(res => this.setState({ needs: res.data }))
      .catch(err => console.log(err));

    // API.getNeeds()
    //   .then(res => this.setState({ 
    //     needs: res.data.filter(
    //       need => need.category === category)
    //   }));
  }

  componentDidMount() {
    this.getNeeds();
  }

  offerHelp() {
    console.log('inside Offer help');
  }

  render() {
    console.log(this.props.user._id);
    // console.log(this.state.needs);
    return (
      <div className='Give-Help-Wrapper'>
        <Row>
          <Col id='left-column' s={4}>
            <Collapsible defaultActiveKey={0}>
              <CollapsibleItem header='Search Needs' icon='search'>
                <NeedSearch
                  category={this.state.category}
                  filterBySearch={this.filterBySearch}
                  getNeeds={this.getNeeds}
                />
              </CollapsibleItem>
              <CollapsibleItem header='List of Needs' icon='list'>
                <NeedList
                  onHoverEvent={this.setCenter}
                  className='list-view'
                  needs={this.state.needs.filter(need => need.user !== this.props.user._id)}
                  currentUserID={this.props.user._id}
                  offerHelp={this.offerHelp}
                />
              </CollapsibleItem>
            </Collapsible>
          </Col>
          <Col s={8}>
            <MapView
              needs={this.state.needs.filter(need => need.user !== this.props.user._id)}
              cntLat={this.state.cntLat}
              cntLng={this.state.cntLng}
              currentUserID={this.props.user._id}
              offerHelp={this.offerHelp}
            >
              <Preloader flashing />
            </MapView>
          </Col>
        </Row>
      </div>
    );
  }
}

export default GiveHelp;
