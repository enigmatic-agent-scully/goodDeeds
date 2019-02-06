import React, { Component } from 'react';
import { Row, Button } from 'react-materialize';
import { Parallax } from 'react-parallax';
import Login from '../../Tools/Login';
import './style.css';

const insideStyles = {

  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
};

const image1 =
  'https://assets.trabiancdn.com/api/file/29QNOSugRqICIdZkNEBM+cu_101.png/convert?format=jpg&quality=85&compress=true&w=1500&h=600&fit=crop&align=faces'

const image2 =
  'http://bgfons.com/uploads/light/light_texture2224.jpg';

class Landing extends Component {

  constructor() {
    super();
    this.myRef = React.createRef();
  }
  
  scroll(ref) {
    ref.current.scrollIntoView({behavior: 'smooth'});
  }

  render(){
    return (
      <div className='Landing-Page'>
        <div id='header'><h1 id="logo">goodDeeds</h1></div>
  
        <Parallax bgImage={image1} strength={500}>
          <div style={{ height: '100vh' }} >
            <Row id='top-buffer' />
            <div id='info-overlay'>
              {/* <Card> */}
              <h3 id='motto'>
                "Where good deeds meet real needs"
              </h3>
            </div>
            <Row id='scroll-button-row'>
              <Button floating id='scroll-button' waves='light' icon='keyboard_arrow_down' onClick={() => this.scroll(this.myRef)}></Button>
            </Row>

          </div>
        </Parallax>
        <Parallax
         
          bgImage={image2}
          strength={400}
          renderLayer={percentage => (
            <div>
              <div
                style={{
                  position: 'absolute',
                  background: `rgba(255,140,0, ${percentage * 1.2})`,
                  left: '50%',
                  top: '50%',
                  borderRadius: '50%',
                  transform: 'translate(-50%,-50%)',
                  width: percentage * 2000,
                  height: percentage * 2000
                }}
              />
            </div>
          )}
        >
          <div style={{ height: '100vh' }}>
            <div style={insideStyles} id='login-overlay'>
              <Login />
            </div>
          </div>
          <div ref={this.myRef}></div>
        </Parallax>
      </div>
    );
  }
}

export default Landing;
