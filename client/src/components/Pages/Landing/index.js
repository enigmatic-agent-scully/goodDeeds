import React from 'react';
import { Row } from 'react-materialize';
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
  'http://materializecss.com/images/parallax2.jpg';

function Landing() {
  return (
    <div className='Landing-Page'>
     
      <Parallax bgImage={image1} strength={500}>
        <div style={{ height: '70vh' }} >
          <div id='header'><h1 id="logo">goodDeeds</h1></div>
          <Row id='top-buffer' />
          <div id='info-overlay'>
            {/* <Card> */}
            <h3 id='motto'>
              "Where good deeds meet real needs"
            </h3>
            {/* </Card> */}
          </div>

        </div>
      </Parallax>
      <Parallax
        bgImage={image2}
        strength={200}
        renderLayer={percentage => (
          <div>
            <div
              style={{
                position: 'absolute',
                background: `rgba(255,140,0, ${percentage * 1})`,
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
        <div style={{ height: '80vh' }}>
          <div style={insideStyles} id='login-overlay'>
            <Login />
          </div>
        </div>
      </Parallax>
    </div>
  );
}

export default Landing;
