import React from 'react';
import { Card, Row, Input, Button } from 'react-materialize';
import './style.css';

// Rewrite as Class with State passing using ID and Handler with calls /api/needs/ POST request

function NeedInput() {
  return(
    <Card>
      <h3>Submit Need</h3>
      <Row>
        <Input s={12} label="Choose Need Type" type='select' defaultValue='0'>
          <option value='0'>-Pick One-</option>
          <option value='1'>Getting Around</option>
          <option value='2'>Cleaning Up</option>
          <option value='3'>Fixing Something</option>
        </Input>
        <h4>Upload Photo (optional)</h4>
        <Input type="file" label="File" s={12} multiple placeholder="Upload one or more files" />
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