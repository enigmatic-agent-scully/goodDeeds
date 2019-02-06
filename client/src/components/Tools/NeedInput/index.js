import React from 'react';
import { Card, Row, Input, Button } from 'react-materialize';
import Geosuggest from 'react-geosuggest';
import './style.css';

// Rewrite as Class with State passing using ID and Handler with calls /api/needs/ POST request

function NeedInput(props) {
  return (
    <Card id='need-input-card'>
      <Row>
        <h5>Type</h5>
        <Input
          name='category'
          onChange={props.handleInputChange}
          s={12}
          value={props.category}
          label='Select the type of need'
          type='select'
          // defaultValue='0'
        >
          <option value='0'>-Pick One-</option>
          <option value='Getting Around'>Getting Around</option>
          <option value='Cleaning Up'>Cleaning Up</option>
          <option value='Fixing Something'>Fixing Something</option>
          <option value='Financial Assistance'>Financial Assistance</option>
          <option value='Moving'>Moving</option>
          <option value='Professional Assistance'>
            Professional Assistance
          </option>
        </Input>
        <h5>Address</h5>
        <Geosuggest
          name='address'
          onSuggestSelect={props.handleGeoCode}
          value={props.address}
          clear={props.clearGeoSuggest}
        />
        <h5>Image</h5>
        <Input
          onChange={props.uploadHandler}
          type='file'
          label='Add Photo'
          s={12}
          placeholder={props.imagefile}
        />
        <h5>Date</h5>
        <Input
          name='needdate'
          s={12}
          placeholder="What's a preferred date?"
          type='date'
          value={props.needdate}
          onChange={props.handleInputChange}
        />
        <h5>Subject</h5>
        <Input
          onChange={props.handleInputChange}
          name='subject'
          s={12}
          type='textarea'
          value={props.subject}
          placeholder='Enter a subject for your need.'
        />
        <h5>Description</h5>
        <Input
          onChange={props.handleInputChange}
          name='description'
          s={12}
          type='textarea'
          value={props.description}
          placeholder='Describe your need.'
        />
        <Button onClick={props.SubmitHandler} waves='light'>
          submit
        </Button>
      </Row>
    </Card>
  );
}

export default NeedInput;
