import React from 'react';
import { Dropdown, Modal } from 'react-materialize';
import ProfileView from '../ProfileView/index';

const Navbar = props => {
  return (
    <div className='navbar-fixed'>
      <nav id='navbar'>
        <div className='nav-wrapper'>
          <a href='/' className='brand-logo left'>
            goodDeeds
          </a>
          <ul className='right hide-on-sm-and-down'>
            <li>
              <a href='/get-help'>Get Help</a>
            </li>
            <li>
              <a href='/give-help'>Give Help</a>
            </li>
            <li>
              <Dropdown
                trigger={
                  <button className='bnt'>
                    {props.firstName} {props.lastName}
                  </button>
                }
              >
                <Modal
                  trigger={
                    <li>
                      <button className='btn'>View Profile</button>
                    </li>
                  }
                >
                  <ProfileView
                    firstName={props.firstName}
                    lastName={props.lastName}
                    imageurl={props.imageurl}
                    email={props.email}
                    userName={props.userName}
                  />
                </Modal>
                <li>
                  <button onClick={props.logoutFunction}>Logout</button>
                </li>
              </Dropdown>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
