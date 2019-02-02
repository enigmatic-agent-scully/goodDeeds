import React, { Component } from 'react';
// import { Row, Input, Button, Dropdown } from 'react-materialize';
import { Row, Input, Button, Card } from 'react-materialize';
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
    // needId = '5c4cbb8533f08c086075a05c';
    API.loadMessage(this.props.needId)
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

  deleteMessage(e) {
    e.preventDefault();
    console.log(e.target.value);
    API.deleteMessage(e.target.value)
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
        //upon completion of creating the post, we are
        //calling on the loadPosts func
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
        <Button onClick={this.submitPost}>Post</Button>

        {this.state.returnedMessageArray.map(message => (
          <Card key={message._id}>
            <div>
              <div id='message-body'>
                <div id='author'>
                  <strong>{message.user.userName}</strong> wrote:
                </div>
                <br />
                {message.message}
                <br />
                <br />
                <div id='datetime'>at {message.postdate}</div>
                {message.user._id === this.props.currentUserID ? (
                  <div>
                    <small>
                      <Button value={message._id} onClick={this.deleteMessage}>
                        <i className='material-icons'>delete</i>
                      </Button>
                    </small>
                  </div>
                ) : null}
              </div>
            </div>
          </Card>
        ))}
      </Row>
    );
  }
}

export default Messages;
