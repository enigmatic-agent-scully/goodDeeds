import React, { Component } from 'react';
// import { Row, Input, Button, Dropdown } from 'react-materialize';
import { Row, Input, Button, Card, Chip } from 'react-materialize';
import './style.css';
import API from '../../../utils/API';
import moment from 'moment-timezone';

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      returnedMessageArray: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitPost = this.submitPost.bind(this);
  }

  componentDidMount() {
    setInterval(() => this.loadPosts(), 3000);
  }

  loadPosts() {
    API.loadMessage(this.props.needId)
      .then(res => {
        this.setState({
          returnedMessageArray: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  submitPost(event) {
    event.preventDefault();
    API.postMessage({
      message: this.state.message,
      need: this.props.needId
    })
      .then(res => {
        this.setState({
          message: ''
        });
        this.loadPosts();
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <Row>
        <Input
          name='message'
          value={this.state.message}
          onChange={this.handleInputChange}
          s={12}
          label='type your message'
          type='textarea'
        />
        <Button onClick={this.submitPost}>Post Message</Button>
        {this.state.returnedMessageArray.map(message => (
          <Card key={message._id}>
            <Chip>
              <img className='messageicon' src={message.user.imageurl} alt={message.user.userName} />
            </Chip>
            <span className='date-time'>{moment(message.postdate).format('YYYY-MM-DD hh:mm:ss')}:</span>
            <span className='message-txt'>{message.message}</span>
          </Card>
        ))}
      </Row>
    );
  }
}

export default Messages;
