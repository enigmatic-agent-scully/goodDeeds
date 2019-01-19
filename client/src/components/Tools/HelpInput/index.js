import React from 'react';
import { Card, Row, Input, Button, Autocomplete } from 'react-materialize';
import './style.css';


function HelpInput() {

  const keyword =           
    {
      'raking leaves': null,
      'drive to doctor': null,
      'used stroller': null
    };
    
  return(
    <Card>
      <h3>Search Needs</h3>
      <Row>
        <h4>Keyword</h4>
        <Autocomplete
          s = {12}
          title='Type here'
          data={keyword}/>
        <h4>Type</h4>
        <Input s={12} label="Pick One" type='select' defaultValue='2'>
          <option value='2'>Getting Around</option>
          <option value='3'>Cleaning Up</option>
          <option value='4'>Fixing Something</option>
        </Input>
        <h4>Date</h4>
        <Input s={12} label="What's a preferred date?" name='on' type='date' onChange={function(e, value) {}} />
        <Button waves='light'>submit</Button>
      </Row>
    </Card>  
  );
}

export default HelpInput;