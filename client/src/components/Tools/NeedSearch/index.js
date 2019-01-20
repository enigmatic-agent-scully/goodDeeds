import React from 'react';
import { Row, Input, Button, Autocomplete } from 'react-materialize';
import './style.css';


function NeedSearch() {

  const keyword =           
    {
      'raking leaves': null,
      'drive to doctor': null,
      'used stroller': null
    };
    
  return(
    <Row>
      <h5>Keyword</h5>
      <Autocomplete
        s = {12}
        title='Type here'
        data={keyword}/>
      <h5>Type</h5>
      <Input s={12} label="Select Need Type" type='select' defaultValue='0'>
        <option value='0'>-Pick One-</option>
        <option value='1'>Getting Around</option>
        <option value='2'>Cleaning Up</option>
        <option value='3'>Fixing Something</option>
      </Input>
      <h5>Date</h5>
      <Input s={12} label="What's a preferred date?" name='on' type='date' onChange={function(e, value) {}} />
      <Button waves='light'>submit</Button>
    </Row>
  );
}

export default NeedSearch;