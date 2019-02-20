import React, { Component } from 'react';
import { Row, Col, Button, Card, CardTitle } from 'react-materialize';
import { Parallax } from 'react-parallax';
import './style.css';

const image =
  'https://images.unsplash.com/photo-1541976844346-f18aeac57b06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80';

class About extends Component {
  constructor() {
    super();
    this.myRef = React.createRef();
  }

  scroll(ref) {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    return (
      <div className='Intro-Page'>
        <div id='header'>
          <h1 id='logo'>goodDeeds</h1>
        </div>
        <Parallax bgImage={image} strength={500}>
          <div style={{ height: '100vh' }}>
            <Row id='top-padding' />
            <Row>
              <Col s={1} m={2} />
              <Col s={10} m={8}>
                <Card>
                  <p>
                    goodDeeds aims to facilitate connections between skilled
                    volunteers and people in need of their help.
                  </p>
                </Card>
              </Col>
              <Col s={1} m={2} />
            </Row>
            <Row>
              <Col s={1} m={2} />
              <Col s={5} m={4}>
                <Card actions={[<a href='/main/give-help'>Help Someone</a>]}>
                  <p>
                    Are you a skilled volunteer looking to lend a helping hand
                    to someone in need?{' '}
                  </p>
                </Card>
              </Col>
              <Col s={5} m={4}>
                <Card actions={[<a href='/main/get-help'>Post a Need</a>]}>
                  <p>
                    Are you in need of a skilled volunteer willing to donate
                    their time and resources?
                  </p>
                </Card>
              </Col>
              <Col s={1} m={2} />
            </Row>
          </div>
        </Parallax>
      </div>
    );
  }
}

export default About;
