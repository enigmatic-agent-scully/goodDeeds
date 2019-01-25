import React from 'react';
import { Card, Row, Col } from 'react-materialize';
import './style.css';

function NeedList(props) {
  
  return (
    <Row>
      {props.needs.length ? (
        <Row>
          {props.needs.map(need => (
            <Card key={need._id} title={need.category}>
              <a href={'/needs/' + need._id}>
                <Row>
                  <Col s="6">
                    <p>{need.description}</p>
                  </Col>
                  <Col s="6">
                    <img src={need.imageurl} alt="need"/>
                  </Col>
                </Row>
              </a>
              {/* <Button>Delete</Button> */}
            </Card>
          ))}
        </Row>
      ) : (
        <Card>
          <h4>No Results to Display</h4>
        </Card>
      )}
    </Row>
  );
}


export default NeedList;
