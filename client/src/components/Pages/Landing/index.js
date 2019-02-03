import React from 'react';
import { Card } from 'react-materialize';
import { Parallax } from 'react-parallax';
import Login from '../../Tools/Login';
import './style.css';

const insideStyles = {
  // background: "white",
  // padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};

const image1 =
  "https://assets.trabiancdn.com/api/file/29QNOSugRqICIdZkNEBM+cu_101.png/convert?format=jpg&quality=85&compress=true&w=1500&h=600&fit=crop&align=faces"

const image2 =
  'http://materializecss.com/images/parallax2.jpg'

function Landing() {
  return (
    <div className='Landing-Page'>
      <Parallax bgImage={image2} strength={500}>
        <div style={{ height: '50vh' }}>
          <div style={insideStyles} id='logo-info-overlay'>
            <Card>
              <h1>goodDeeds</h1>
              <p>
                This app aims to promote good deeds - direct, person-to-person acts of kindness, service, or financial assistance - for people who live in low-income neighborhoods. The idea began as a way to connect people in low-income neighborhoods with service providers who were willing to donate home repair services, but our group quickly saw its potential to match users with a much wider variety of personal and professional services.
              </p>
            </Card>
          </div>
        </div>
      </Parallax>
      <Parallax
        bgImage={image1}
        strength={200}
        renderLayer={percentage => (
          <div>
            <div
              style={{
                position: "absolute",
                background: `rgba(0,191,255, ${percentage * 1})`,
                left: "50%",
                top: "50%",
                borderRadius: "50%",
                transform: "translate(-50%,-50%)",
                width: percentage * 1500,
                height: percentage * 1500
              }}
            />
          </div>
        )}
      >
        <div style={{ height: '90vh' }}>
          <div style={insideStyles} id='login-overlay'>
            <Login />
          </div>
        </div>
      </Parallax>



        {/* <Parallax imageSrc="https://assets.trabiancdn.com/api/file/29QNOSugRqICIdZkNEBM+cu_101.png/convert?format=jpg&quality=85&compress=true&w=1500&h=600&fit=crop&align=faces"/>
        <div className="section">
          <Row>
            <Col s={4}>
              <Login />
            </Col>
            <Col s={8} />  
          </Row>
        </div>
        <Parallax imageSrc="http://materializecss.com/images/parallax2.jpg"/>
      </div> */}


      {/* <Row >
        <Col s={12}>
          <Slider
            id="slider"
            fullscreen="true"
          >
            <Slide
              className="slide-background"
              src='https://assets.trabiancdn.com/api/file/29QNOSugRqICIdZkNEBM+cu_101.png/convert?format=jpg&quality=85&compress=true&w=1500&h=600&fit=crop&align=faces'
              title=''
            >
              <h6 id='title'>Welcome to GoodDeeds</h6>
              The place where good deeds meet real needs.
            </Slide>
            <Slide
              className="slide-background"
              src='http://lorempixel.com/580/250/nature/2'
              title='Are you in need?'
              placement='left'
            >
              This site will help you find the help you're looking for from
              people wishing to do good deeds in your city and neighborhood.
            </Slide>
            <Slide
              className="slide-background"
              src='http://lorempixel.com/580/250/nature/3'
              title='Looking to do good deeds?'
              placement='right'
            >
              This site will help you find people in your city and neighborhood
              in need of the type of assistance you have to offer.
            </Slide>
            <div id="login-overlay">
              <Col s={4} />
              <Col s={4}>
                <Login />
              </Col>
              <Col s={4} />
            </div>
          </Slider>
        </Col>
      </Row> */}
   
    </div>
  );
}

export default Landing;
