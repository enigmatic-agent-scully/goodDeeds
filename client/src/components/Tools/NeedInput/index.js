import React from 'react';
import { Card, Row, Input, Button } from 'react-materialize';
import './style.css';

// Rewrite as Class with State passing using ID and Handler with calls /api/needs/ POST request

function NeedInput(props) {
  return(
    <Card>
      <Row>
        <h5>Type</h5>
        <Input 
          name="category"
          onChange={props.handleInputChange} 
          s={12} 
          label="Select the type of need" 
          type='select' 
          defaultValue='0'>
          <option value='0'>-Pick One-</option>
          <option value='Getting Around'>Getting Around</option>
          <option value='Cleaning Up'>Cleaning Up</option>
          <option value='Fixing Something'>Fixing Something</option>
        </Input>
        <h5>Image</h5>
        <Input
          onChange={props.uploadHandler} 
          type="file" 
          label="Add Photo" 
          s={12}  
          placeholder="JPG, PNG, or GIFs only" />
        <h5>Date</h5>
        <Input 
          name="needdate" 
          s={12} 
          placeholder="What's a preferred date?" 
          type='date' 
          onChange={props.handleInputChange} />
        <h5>Description</h5>
        <Input 
          onChange={props.handleInputChange}
          name="description" 
          s="12" 
          type='textarea'
          placeholder='Describe your need.' />
        <Button 
          onClick={props.SubmitHandler} 
          waves='light'>
          submit
        </Button>
      </Row>
    </Card>  
  );
}

export default NeedInput;