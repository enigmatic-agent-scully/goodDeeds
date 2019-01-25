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
      description: '',
      imageurl: '',
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
    this.SubmitHandler = this.SubmitHandler.bind(this);
  }

  componentDidMount() {
    this.loadNeeds();
  }

  loadNeeds() {
    API.getNeeds()
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
    // console.log(this.reactS3config);
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
      imageurl: NeedInfo.imageurl
    })
      .then(this.loadNeeds());
  }

  render() {
    return (
      <div className='Get-Help-Wrapper'>
        <Row>
          <Col s='4'>
            <NeedInput
              category={this.state.category}
              needdate={this.state.needdate}
              description={this.state.description}
              imageurl={this.state.imageurl}
              uploadHandler={this.uploadHandler}
              handleInputChange={this.handleInputChange}
              SubmitHandler={this.SubmitHandler}
            />
          </Col>
          <Col id="need-list" s='4'>
            <Card>
              <h4>List of Needs</h4>
              <NeedList
                needs={this.state.needs} />
            </Card>
          </Col>
          <Col s='4'>
            <ResolvedList />
          </Col>
        </Row>
      </div>
    );
  }
}

export default GetHelp;