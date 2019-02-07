import React, { Component } from 'react';
import { Row, Col, Button, Chip, Icon } from 'react-materialize';
// , Collapsible, CollapsibleItem
import './style.css';
// import { debug } from 'util';

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
      professionalAssistance: false,
      // scrolled: false
    };
  }

  componentDidMount() {
    this.setCategoryState();
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


  render() {

    return (
      // <div className={this.state.scrolled ? '' : 'needview-fixed'}>
      <Row>
        <Col s={12} m={6}>
          {/* <h4 className='category'>{this.props.category}</h4> */}

          <Col className='category-icon's={12} m={2}>
            {this.state.gettingAround ? (
              <Icon medium>directions_car</Icon>
            ) : null}
            {this.state.cleaningUp ? (
              <Icon medium>delete_sweep</Icon>
            ) : null}
            {this.state.fixingSomething ? (
              <Icon medium>settings</Icon>
            ) : null}
            {this.state.financialAssistance ? (
              <Icon medium>monitization_on</Icon>
            ) : null}
            {this.state.moving ? (
              <Icon medium>card_travel</Icon>
            ) : null}
            {this.state.professionalAssistance ? (
              <Icon medium>assignment_ind</Icon>
            ) : null}{' '}
          </Col>
          <Col className='subject-header' s={12} m={10}>
            <h3>{this.props.subject}</h3>
          </Col>
          <Col s={12}>
            <div className='need-description'>{this.props.description}</div>

          </Col>
        </Col>
        
        <Col s={12} m={6}>
          <div>
            <img src={this.props.imageurl} alt='need' />
            <Row>
              {this.props.needUser === this.props.currentUserID ? (
                <div>
                  {this.props.resolved ? (
                    <div>
                      <Row>
                        <Col  className="needview-button-divs" s={12} l={9}>
                          <Button
                            className='needview-button'
                            key={this.props.key}
                            value={this.props._id}
                            onClick={() => this.props.markUnresolved(this.props._id)}
                          >
                            Mark Unresolved
                          </Button>
                        </Col>                   
                        <Col s={12} l={2}>
                          <span className="delete-icon"
                            key={this.props.key}
                            value={this.props._id}
                            onClick={() => this.props.deleteNeed(this.props._id)}>
                            <Icon small red>
                              delete
                            </Icon>
                          </span>
                        </Col>
                      </Row>


                    </div>
                  ) : (
                    <div>
                      <Row>
                        <Col className="needview-button-divs" s={12} l={9}>
                          <Button
                            className='needview-button'
                            key={this.props.key}
                            value={this.props._id}
                            onClick={() => this.props.markResolved(this.props._id)}
                          >
                              Mark Resolved
                          </Button>
                        </Col>

                        <Col s={12} l={2}>
                          <span className="delete-icon"
                            key={this.props.key}
                            value={this.props._id}
                            onClick={() => this.props.deleteNeed(this.props._id)}>
                            <Icon small red >
                                delete
                            </Icon>
                          </span>
                        </Col>
                      </Row>

                      {this.props.goodSamaritins.map(helper => (
                        <div>
                          <Row>
                            <Chip>
                              <img src='https://gooddeedsimages.s3.amazonaws.com/goodsamaritin.PNG' alt='good samaritin badge' />
                              {helper.userName} has offered to help.
                            </Chip>
                          </Row>
                        </div>
                      ))}

                    </div>


                  )}
                </div>
              ) : (
                <div>
                  {
                    this.props.goodSamaritins.find(
                      currentGoodSamaritin => currentGoodSamaritin.id === this.props.currentUserID
                    ) ? (
                        <Button id='offer-help-button' disabled>Already Contributing</Button>
                    //need to change this to a state so button becomes disabled on set state
                    // <Button id='offer-help-button' {this.props.goodSamaritinButton}>Already Contributing</Button>
                      ) : (
                        <Button id='offer-help-button' onClick={() => this.props.offerHelp(this.props._id)}>Offer Help</Button>
                      )
                  }
                  <div>
                    <Chip className='chip'>
                      <img className='needusericon' src={this.props.needUser.imageurl} alt={this.props.needUser.userName} />
                      <strong>Need posted by {this.props.needUser.userName}</strong> @<small>{this.props.postdate}</small>
                    </Chip>
                  </div>
                </div>
              )}
            </Row>
          </div>
        </Col>
      </Row>

    );
  }
}

export default NeedView;
