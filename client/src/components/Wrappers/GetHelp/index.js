import React, { Component } from 'react';
import { Col, Row, Card } from 'react-materialize';
import NeedInput from '../../Tools/NeedInput';
import NeedList from '../../Tools/NeedList';
// import ResolvedList from '../../Tools/ResolvedList';
import './style.css';
import { uploadFile } from 'react-s3';
import API from '../../../utils/API';
import { config } from '../../../config/Config';
// import { timingSafeEqual } from 'crypto';

class GetHelp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'No Category',
      subject: '',
      needdate: '',
      address: '',
      description: '',
      imageurl: '',
      lat: '',
      lng: '',
      needs: [],
      isModalOpen: false,
      clearGeoSuggest: false
    };

    this.reactS3config = {
      bucketName: 'gooddeedsimages',
      region: 'us-east-1',
      accessKeyId: config.awsKey,
      secretAccessKey: config.awsSecret
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.loadNeeds = this.loadNeeds.bind(this);
    this.uploadHandler = this.uploadHandler.bind(this);
    this.handleGeoCode = this.handleGeoCode.bind(this);
    this.SubmitHandler = this.SubmitHandler.bind(this);
    this.markResolved = this.markResolved.bind(this);
    this.markUnresolved = this.markUnresolved.bind(this);
    this.deleteNeed = this.deleteNeed.bind(this);

    this.loadNeeds();
  }

  handleGeoCode(suggest) {
    if (suggest) {
      this.setState({
        lat: suggest.location.lat,
        lng: suggest.location.lng,
        address: suggest.location.description
      });
    }
  }

  markResolved(needId) {
    API.markResolved(needId)
      .then(this.loadNeeds())
      .catch(err => console.log(err));
  }

  markUnresolved(needId) {
    API.markUnresolved(needId)
      .then(this.loadNeeds())
      .catch(err => console.log(err));
  }

  deleteNeed(needId) {
    API.deleteNeed(needId)
      .then(this.loadNeeds())
      .catch(err => console.log(err));
  }
  onHoverEvent(id) {
    console.log(id);
  }

  handleCloseModal() {
    this.setState({
      isModalOpen: false
    });
  }

  loadNeeds() {
    API.getNeedsCurrentUser()
      .then(res => {
        this.handleCloseModal();
        this.setState({
          category: 'No Category',
          subject: '',
          description: '',
          needdate: '',
          needs: res.data,
          address: 'what'
        });
      })
      .catch(err => console.log(err));
  }

  handleClearGeoSuggest() {
    this.setState({
      clearGeoSuggest: true
    });
  }

  uploadHandler(event) {
    const imagefile = event.target.files[0];
    uploadFile(imagefile, this.reactS3config)
      .then(data => {
        this.setState({ imageurl: data.location });
      })
      .catch(err => console.error(err));
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  SubmitHandler(event) {
    event.preventDefault();
    const NeedInfo = this.state;
    API.postNeed({
      category: NeedInfo.category,
      subject: NeedInfo.subject,
      needdate: NeedInfo.needdate,
      description: NeedInfo.description,
      imageurl: NeedInfo.imageurl,
      lat: NeedInfo.lat,
      lng: NeedInfo.lng,
      user: this.props.user._id
    })
      .then(() => {
        this.loadNeeds();
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className='Get-Help-Wrapper'>
        <Row>
          <Col s={12} l={4}>
            <NeedInput
              subject={this.state.subject}
              imagefile={this.state.imagefile}
              category={this.state.category}
              address={this.state.address}
              needdate={this.state.needdate}
              description={this.state.description}
              imageurl={this.state.imageurl}
              uploadHandler={this.uploadHandler}
              handleInputChange={this.handleInputChange}
              SubmitHandler={this.SubmitHandler}
              handleGeoCode={this.handleGeoCode}
              clearGeoSuggest={this.state.clearGeoSuggest}
            />
          </Col>
          <Col s={12} l={4}>
            <Card className='list-headers' title='Unresolved Needs' />
            <div id='need-list'>
              <NeedList
                deleteNeed={this.deleteNeed}
                currentUserID={this.props.user._id}
                isModalOpen={this.state.isModalOpen}
                markResolved={this.markResolved}
                onHoverEvent={this.onHoverEvent}
                needs={this.state.needs.filter(need => !need.resolved)}
              />
            </div>
          </Col>
          <Col s={12} l={4}>
            <Card className='list-headers ' title='Resolved Needs' />
            <div id='resolved-list'>
              <NeedList
                deleteNeed={this.deleteNeed}
                currentUserID={this.props.user._id}
                isModalOpen={this.state.isModalOpen}
                markUnresolved={this.markUnresolved}
                onHoverEvent={this.onHoverEvent}
                needs={this.state.needs.filter(need => need.resolved)}
              />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default GetHelp;
