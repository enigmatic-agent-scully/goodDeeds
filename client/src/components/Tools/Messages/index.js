import React, { Component } from 'react';
// import { Row, Input, Button, Dropdown } from 'react-materialize';
import { Row, Input, Button, Card } from 'react-materialize';
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

    //why does this get loaded twice???
    this.loadPosts();
    // this.props.foo(this.props.needId + '-fo');
  }

  componentDidMount() {
    setInterval(() => this.loadPosts(), 3000);
  }

  loadPosts() {
    // needId = '5c4cbb8533f08c086075a05c';
    API.loadMessage({
      need: this.props.needId
    })
      .then(res => {
        this.setState({
          returnedMessageArray: res.data
        });
        // console.log(this.state.returnedMessageArray);
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
        //upon completion of creating the post, we are
        //calling on the loadPosts func
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
            <span className='user-name'>{message.user.userName}@</span>
            <span className='date-time'>{moment(message.postdate).format('YYYY-MM-DD hh:mm:ss')}:</span>
            <span className='message-txt'>{message.message}</span>
          </Card>
        ))}
      </Row>
    );
  }
}

export default Messages;
