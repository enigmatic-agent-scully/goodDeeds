import React, { Component } from 'react';
import { Row, Col, Button, Chip } from 'react-materialize';
import './style.css';

// Rewrite as Class with State passing using ID and Handler with calls /api/needs/ POST request

class NeedView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gettingAround: false,
      cleaningUp: false,
      fixingSomething: false,
      financialAssistance: false,
      moving: false,
      professionalAssistance: false
    };
  }

  setCategoryState() {
    switch (this.props.category) {
    case 'Getting Around': {
      this.setState({
        gettingAround: true
      });
      break;
    }
    case 'Cleaning Up': {
      this.setState({
        cleaningUp: true
      });
      break;
    }
    case 'Fixing Something': {
      this.setState({
        fixingSomething: true
      });
      break;
    }
    case 'Financial Assistance': {
      this.setState({
        financialAssistance: true
      });
      break;
    }
    case 'Moving': {
      this.setState({
        moving: true
      });
      break;
    }
    case 'Professional Assistance': {
      this.setState({
        professionalAssistance: true
      });
      break;
    }
    default: {
      break;
    }
    }
  }

  componentDidMount() {
    this.setCategoryState();
  }
  render() {
    return (
      <div>
        <Row>
          <Col s={12} m={6}>
            <h4>{this.props.subject}</h4>
            {this.state.gettingAround ? (
              <i className='material-icons'>directions_car</i>
            ) : null}
            {this.state.cleaningUp ? (
              <i className='material-icons'>delete_sweep</i>
            ) : null}
            {this.state.fixingSomething ? (
              <i className='material-icons'>settings</i>
            ) : null}
            {this.state.financialAssistance ? (
              <i className='material-icons'>monitization_on</i>
            ) : null}
            {this.state.moving ? (
              <i className='material-icons'>card_travel</i>
            ) : null}
            {this.state.professionalAssistance ? (
              <i className='material-icons'>assignment_ind</i>
            ) : null}{' '}
            <p>{this.props.description}</p>
          </Col>
          <Col s={12} m={6}>
            <img src={this.props.imageurl} alt='need' />
            <Row>
              {this.props.needUser === this.props.currentUserID ? (
                <div>
                  {this.props.resolved ? (
                    <div>
                      <Button
                        className='needview-button'
                        key={this.props.key}
                        value={this.props._id}
                        onClick={() => this.props.markUnresolved(this.props._id)}
                      >
                        Mark Unresolved
                      </Button>
                      <Button
                        className='delete-button'
                        key={this.props.key}
                        value={this.props._id}
                        onClick={() => this.props.deleteNeed(this.props._id)}
                      >
                        <i className='material-icons'>delete</i>
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <Button
                        className='needview-button'
                        key={this.props.key}
                        value={this.props._id}
                        onClick={() => this.props.markResolved(this.props._id)}
                      >
                        Mark Resolved
                      </Button>
                      <Button
                        className='delete-button'
                        key={this.props.key}
                        value={this.props._id}
                        onClick={() => this.props.deleteNeed(this.props._id)}
                      >
                        <i className='material-icons'>delete</i>
                      </Button>
                    </div>
                  )}


                </div>
              ) : (
                <div>
                  <Button id='offer-help-button' onClick={this.props.offerHelp}>Offer Help  
                  </Button>
                  <Chip className='chip'>
                    <img className='needusericon' src={this.props.needUser.imageurl} alt={this.props.needUser.userName} />
                    
                    <strong>Need posted by {this.props.needUser.userName}</strong> @<small>{this.props.postdate}</small>
                    
                  </Chip> 

                </div>

              //   {this.props.resolved ? (
              // //   <Icon key={this.props.key} value={this.props._id}>
              // //       done_outline
              // //   </Icon>
              // // ) : (
              // //   <Icon key={this.props.key} value={this.props._id}>
              // //         stars
              // //   </Icon>
              // )}
              // </div>
              )}
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default NeedView;
