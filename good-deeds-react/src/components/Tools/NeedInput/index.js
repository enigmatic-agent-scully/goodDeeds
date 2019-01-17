import React from 'react';
import { Card, Row, Input, Button } from 'react-materialize';
import './style.css';


function NeedInput() {
  return(
    <Card>
      <h3>Submit Need</h3>
      <Row>
        <h4>Type</h4>
        <Input s={12} label="Pick One" type='select' defaultValue='2'>
          <option value='2'>Getting Around</option>
          <option value='3'>Cleaning Up</option>
          <option value='4'>Fixing Something</option>
        </Input>
        <h4>Date</h4>
        <Input s={12} label="What's a preferred date?" name='on' type='date' onChange={function(e, value) {}} />
        <h4>Description</h4>
        <Input s="12" type='textarea' />
        <Button waves='light'>submit</Button>
      </Row>
    </Card>  
  );
}

export default NeedInput;