import React, { Component } from 'react';
import { Col, Row } from 'react-materialize';
import NeedInput from '../../Tools/NeedInput';
import NeedList from '../../Tools/NeedList';
import ResolvedList from '../../Tools/ResolvedList';
import './style.css';
import { uploadFile } from 'react-s3';
import API from '../../../utils/API';

const config = {
  bucketName: 'gooddeedsimages',
  region: 'us-east-1',
  accessKeyId: 'AKIAIR3HZZY25ANHTL2A',
  secretAccessKey: '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'
}


class GetHelp extends Component {
  
  state = {
    category: "",
    needdate: "",
    description: "",
    imageurl: "",
    needs: []
  };

  componentDidMount() {
    this.loadNeeds();
  };

  loadNeeds = () => {
    API.getNeeds()
      .then(res => this.setState({ needs: res.data }))
      .catch(err => console.log(err));
  };

  uploadFile = event => {
    const imagefile = event.target.files[0];
    console.log(imagefile);
    uploadFile(imagefile, config)
    .then(data => {
      console.log(data.location);
      this.setState({ imageurl: data.location});
    })
    .catch(err => console.error(err))
  };

  handleInputChange = event => {
    const { name, value }  = event.target;
    this.setState({
      [name]: value
    });
  };

  SubmitHandler = event => {
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
  };

  render() {
    return(
      <div className='Get-Help-Wrapper'>
        <Row>
          <Col s='4'>
            <NeedInput
              category={this.state.category}
              needdate={this.state.needdate}
              description={this.state.description}
              imageurl={this.state.imageurl}
              uploadFile={this.uploadFile}
              handleInputChange={this.handleInputChange}
              SubmitHandler={this.SubmitHandler}
              />
          </Col>
          <Col id="need-list" s='4'>
            <NeedList 
              needs={this.state.needs}/>
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