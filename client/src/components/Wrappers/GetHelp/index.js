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
      category: '0',
      needdate: '',
      address: '',
      description: '',
      imageurl: '',
      lat: '',
      lng: '',
      needs: [],
      isModalOpen: false
    };

    this.reactS3config = {
      bucketName: 'gooddeedsimages',
      region: 'us-east-1',
      // dirName: `${this.prop}`
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
    this.deleteMessage = this.deleteMessage.bind(this);

    this.loadNeeds();
  }

  handleGeoCode(suggest) {
    // const addressInput = event.target.value
    // console.log(suggest.location);
    if (suggest) {
      this.setState({
        lat: suggest.location.lat,
        lng: suggest.location.lng,
        address: ''
      });
    }
  }

  markResolved(e) {
    e.preventDefault();
    API.markResolved(e.target.value)
      .then(this.loadNeeds())
      .catch(err => console.log(err));
  }

  markUnresolved(e) {
    e.preventDefault();
    API.markUnresolved(e.target.value)
      .then(this.loadNeeds())
      .catch(err => console.log(err));
  }

  onHoverEvent(id) {
    // console.log(id);
  }

  handleCloseModal() {
    this.setState({
      isModalOpen: false
    });
  }

  deleteMessage(e) {
    e.preventDefault();
    console.log(e.target.value);
    API.deleteMessage(e.target.value)
      .then(this.loadNeeds())
      .catch(err => console.log(err));
  }

  loadNeeds() {
    console.log(this.props.user);
    API.getNeedsCurrentUser()
      .then(res =>
        this.setState({
          category: '0',
          description: '',
          needdate: '',
          address: '',
          needs: res.data
        })
      )
      .catch(err => console.log(err));
    this.handleCloseModal();
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
    console.log(this.props.user._id);
    API.postNeed({
      category: NeedInfo.category,
      needdate: NeedInfo.needdate,
      description: NeedInfo.description,
      imageurl: NeedInfo.imageurl,
      lat: NeedInfo.lat,
      lng: NeedInfo.lng,
      user: this.props.user._id
    }).then(this.loadNeeds());
  }

  render() {
    // console.log(this.state.needs);
    return (
      <div className='Get-Help-Wrapper'>
        <Row>
          <Col s={12} m={4}>
            <NeedInput
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
            />
          </Col>
          <Col id='need-list' s={12} m={4}>
            <Card>
              <h4>List of Needs</h4>
              <NeedList
                deleteMessage={this.deleteMessage}
                currentUserID={this.props.user._id}
                isModalOpen={this.state.isModalOpen}
                markResolved={this.markResolved}
                onHoverEvent={this.onHoverEvent}
                needs={this.state.needs.filter(need => !need.resolved)}
              />
            </Card>
          </Col>
          <Col id='need-list' s={12} m={4}>
            <Card>
              <h4>Resolved Needs</h4>
              <NeedList
                deleteMessage={this.deleteMessage}
                currentUserID={this.props.user._id}
                isModalOpen={this.state.isModalOpen}
                markUnresolved={this.markUnresolved}
                onHoverEvent={this.onHoverEvent}
                needs={this.state.needs.filter(need => need.resolved)}
              />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default GetHelp;
