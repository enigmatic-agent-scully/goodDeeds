import React, { Component } from 'react';
import { Card, Row, Input, Button } from 'react-materialize';
import './style.css';
import API from '../../../utils/API';

// Rewrite as Class with State passing using ID and Handler with calls /api/needs/ POST request

class NeedInput extends Component {

  state = {
    category: "",
    needdate: "",
    description: ""
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
      category: this.state.category,
      needdate: this.state.needdate,
      description: this.state.description
    })
  }


  render() {
    return(
      <Card>
        <h4>Submit Need</h4>
        <Row>
          <Input 
            name="category"
            onChange={this.handleInputChange} 
            s={12} 
            label="Choose Need Type" 
            type='select' 
            defaultValue='0'>
              <option value='0'>-Pick One-</option>
              <option value='Getting Around'>Getting Around</option>
              <option value='Cleaning Up'>Cleaning Up</option>
              <option value='Fixing Something'>Fixing Something</option>
          </Input>
          <h5>Upload Photo (optional)</h5>
          <Input 
            type="file" 
            label="File" 
            s={12} 
            multiple 
            placeholder="Upload one or more files" />
          <h5>Date</h5>
          <Input 
            name="needdate" 
            s={12} 
            label="What's a preferred date?" 
            type='date' 
            onChange={this.handleInputChange} />
          <h5>Description</h5>
          <Input 
            onChange={this.handleInputChange}
            name="description" 
            s="12" 
            type='textarea' />
          <Button 
            onClick={this.SubmitHandler} 
            waves='light'>
            submit
          </Button>
        </Row>
      </Card>  
    );
  }
}

export default NeedInput;