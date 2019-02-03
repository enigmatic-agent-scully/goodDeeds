import React, { Component } from 'react';
import { Row, Col, Button } from 'react-materialize';
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
          {this.props.needUser === this.props.currentUserID ? (
            <div>
              {this.props.resolved ? (
                <div>
                  <Button
                    key={this.props.key}
                    value={this.props._id}
                    onClick={() => this.props.markUnresolved(this.props._id)}
                  >
                    Mark Unresolved
                  </Button>
                </div>
              ) : (
                <div>
                  <Button
                    key={this.props.key}
                    value={this.props._id}
                    onClick={() => this.props.markResolved(this.props._id)}
                  >
                    Mark Resolved
                  </Button>
                </div>
              )}
              <Button
                key={this.props.key}
                value={this.props._id}
                onClick={() => this.props.deleteNeed(this.props._id)}
              >
                <i className='material-icons'>delete</i>
              </Button>
            </div>
          ) : (
            <div>
              <h5>{this.props.needUser.userName}</h5>
              <Button onClick={this.props.offerHelp}>Offer help</Button>
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
        </Col>
        <Col s={12} m={6}>
          <img src={this.props.imageurl} alt='need' />
        </Col>
      </Row>
    );
  }
}

export default NeedView;
