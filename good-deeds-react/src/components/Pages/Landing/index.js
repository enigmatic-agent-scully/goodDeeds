import React from 'react';
import { Col, Row, Slide, Slider } from 'react-materialize';
import Login from '../../Tools/Login';
import './style.css';

function Landing() {
  return(
    <div className='Landing-Page'>
      <Row>
        <Col s="8">
          <Slider>
            <Slide
              src="https://assets.trabiancdn.com/api/file/29QNOSugRqICIdZkNEBM+cu_101.png/convert?format=jpg&quality=85&compress=true&w=1500&h=600&fit=crop&align=faces"
              title="">
              <h1>Welcome to GoodDeeds</h1>
              The place where good deeds meet real needs.
            </Slide>
            <Slide
              src="http://lorempixel.com/580/250/nature/2"
              title="Are you in need?"
              placement="left">
              This site will help you find the help you're looking for from people wishing to do good deeds in your city and neighborhood.
            </Slide>
            <Slide
              src="http://lorempixel.com/580/250/nature/3"
              title="Looking to do good deeds?"
              placement="right">
              This site will help you find people in your city and neighborhood in need of the type of assistance you have to offer.
            </Slide>
          </Slider>
        </Col> 
        <Col s="4">
          <Login />
        </Col>
      </Row>
    </div>

  );
}

export default Landing;

