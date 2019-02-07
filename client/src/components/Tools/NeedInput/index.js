import React from 'react';
import { Card, Row, Input, Button } from 'react-materialize';
import Geosuggest from 'react-geosuggest';
import './style.css';

// Rewrite as Class with State passing using ID and Handler with calls /api/needs/ POST request

function NeedInput(props) {
  return (
    <Card id='need-input-card'>
      <Row>
        <h5 className='need-input-headers'>Type</h5>
        <Input
          name='category'
          onChange={props.handleInputChange}
          s={12}
          value={props.category}
          label='Select the type of need'
          type='select'
          className='browser-default'

          defaultValue='No Category'
        >
          <option value='No Category'>-Pick One-</option>
          <option value='Getting Around'>Getting Around</option>
          <option value='Cleaning Up'>Cleaning Up</option>
          <option value='Fixing Something'>Fixing Something</option>
          <option value='Financial Assistance'>Financial Assistance</option>
          <option value='Moving'>Moving</option>
          <option value='Professional Assistance'>
            Professional Assistance
          </option>
        </Input>
        <h5 className='address-header'>Address</h5>
        <Geosuggest
          className='test'
          name='address'
          onSuggestSelect={props.handleGeoCode}
          value={props.address}
          clear={props.clearGeoSuggest}
        />
        <h5 className='need-input-headers'>Image</h5>
        <Input
          onChange={props.uploadHandler}
          type='file'
          label='Add Photo'
          s={12}
          placeholder={props.imagefile}
        />
        <h5 className='need-input-headers'>Date</h5>
        <Input
          name='needdate'
          s={12}
          placeholder="What's a preferred date?"
          type='date'
          value={props.needdate}
          onChange={props.handleInputChange}
        />
        <h5 className='need-input-headers'>Subject</h5>
        <Input
          onChange={props.handleInputChange}
          name='subject'
          s={12}
          type='textarea'
          value={props.subject}
          placeholder='Enter a subject for your need.'
        />
        <h5 className='need-input-headers'>Description</h5>
        <Input
          onChange={props.handleInputChange}
          name='description'
          s={12}
          type='textarea'
          value={props.description}
          placeholder='Describe your need.'
        />
        <Button
          onClick={props.SubmitHandler}
          waves='light'
          id='needinput-form-submit-btn'
        >
          submit
        </Button>
      </Row>
    </Card>
  );
}

export default NeedInput;
