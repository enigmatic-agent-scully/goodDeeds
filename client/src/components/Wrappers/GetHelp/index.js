import React, { Component } from 'react';
import { Col, Row, Card } from 'react-materialize';
import NeedInput from '../../Tools/NeedInput';
import NeedList from '../../Tools/NeedList';
import ResolvedList from '../../Tools/ResolvedList';
import './style.css';
import { uploadFile } from 'react-s3';
import API from '../../../utils/API';
import { config } from '../../../config/Config';

class GetHelp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      needdate: '',
      address: '',
      description: '',
      imageurl: '',
      lat: '',
      lng: '',
      needs: []
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
  
    this.loadNeeds();

  }

  handleGeoCode(suggest) {
    // const addressInput = event.target.value
    // console.log(suggest.location);
    if(suggest) {
      this.setState({
        lat: suggest.location.lat,
        lng: suggest.location.lng,
        address: ''
      });
    }

  }

  onHoverEvent(id) {
    console.log(id)
  }

  loadNeeds() {
    API.getNeedsbyUser()
      .then(res => this.setState({ needs: res.data }))
      .catch(err => console.log(err));
  }

  uploadHandler(event) {
    const imagefile = event.target.files[0];
    console.log(imagefile);
    uploadFile(imagefile, this.reactS3config)
      .then(data => {
        console.log(data.location);
        this.setState({ imageurl: data.location });
      })
      .catch(err => console.error(err));
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    // console.log(event.target);
    this.setState({
      [name]: value
    });
  }

  SubmitHandler(event) {
    event.preventDefault();
    const NeedInfo = this.state;
    console.log(NeedInfo);
    API.postNeed({
      category: NeedInfo.category,
      needdate: NeedInfo.needdate,
      description: NeedInfo.description,
      imageurl: NeedInfo.imageurl,
      lat: NeedInfo.lat,
      lng: NeedInfo.lng
    }).then(this.loadNeeds());
  }

  render() {
    return (
      <div className='Get-Help-Wrapper'>
        <Row>
          <Col m='12' l="4">
            <NeedInput
              category={this.state.category}
              address={this.state.address}
              needdate={this.state.needdate}
              description={this.state.description}
              imageurl={this.state.imageurl}
              uploadHandler={this.uploadHandler}
              handleInputChange={this.handleInputChange}
              SubmitHandler={this.SubmitHandler}
              handleGeoCode={this.handleGeoCode}
            />
          </Col>
          <Col id='need-list' m='12' l="4">
            <Card>
              <h4>List of Needs</h4>
              <NeedList
                onHoverEvent={this.onHoverEvent}
                needs={this.state.needs} />
            </Card>
          </Col>
          <Col m='12' l="4">
            <ResolvedList />
          </Col>
        </Row>
      </div>
    );
  }
}

export default GetHelp;
