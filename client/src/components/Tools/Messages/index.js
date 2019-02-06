import React, { Component } from 'react';
import { Row, Input, Button, Card, Chip } from 'react-materialize';
import moment from 'moment-timezone';
import './style.css';
import API from '../../../utils/API';

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      returnedMessageArray: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitPost = this.submitPost.bind(this);
    this.loadPosts = this.loadPosts.bind(this);
    this.deleteMessage = this.deleteMessage.bind(this);

    //why does this get loaded twice???
    this.loadPosts();
    // this.props.foo(this.props.needId + '-fo');
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

  deleteMessage(messageId) {
    console.log(messageId);
    API.deleteMessage(messageId)
      .then(this.loadPosts())
      .catch(err => console.log(err));
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
        <div id='message-scroll-box'>
          {this.state.returnedMessageArray.map(message => (
            <Card key={message._id}>
              <div>
                <div id='message-body'>
                  <Chip id='author'>
                    <img className='messageicon' src={message.user.imageurl} alt={message.user.userName} />
                    <strong>{message.user.userName}</strong> wrote 
                    <span id='datetime'>@{moment(message.postdate).format('YYYY-MM-DD hh:mm')}</span>
                  </Chip>
                  <div className='message-text'>
                    {message.message}
                  </div>
                  <Row>
                    {message.user._id === this.props.currentUserID ? (
                      <Button className='delete-button' value={message._id} onClick={() => this.deleteMessage(message._id)}>
                        <i className='material-icons'>delete</i>
                      </Button>
                    ) : null}
                  </Row>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Row>

    );
  }
}

export default Messages;
