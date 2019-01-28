import React, { Component } from 'react';
// import { Row, Input, Button, Dropdown } from 'react-materialize';
import { Row, Input, Button } from 'react-materialize';
import './style.css';
import API from '../../../utils/API';
// import Input from 'react-materialize/lib/Input';


class Messages extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message: '',
      retunedMessageArray: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitPost = this.submitPost.bind(this);

    //why does this get loaded twice???
    this.loadPosts();
    // this.props.foo(this.props.needId + '-fo');
  }

  componentDidMount() {
    // debugger;


  }


  loadPosts() {
    // needId = '5c4cbb8533f08c086075a05c';
    API.loadMessage({
      need: this.props.needId
    })
      .then(res => {
        this.setState({
          retunedMessageArray: res.data
        });
        console.log(this.state.retunedMessageArray);

      }).catch(err => {
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
      }).catch(err => {
        console.log(err);
      });
  }

  render() {
    /*
                <Row>
                  <Dropdown trigger={<button className="message-button">Messages </button>}>
                    <Input
                      name="message"
                      value={this.state.message}
                      onChange={this.handleInputChange}
                      s={6}
                      label="type your message"
                      type="textarea"
                    >
                    </Input>
                    <Button onClick={this.submitPost}>
                                  Post Message
                    </Button>
          
                    {this.state.retunedMessageArray.map((message) =>
                      <p key={message._id}>
                        {message.user}: {message.message}
                      </p>)}
                  </Dropdown>
                </Row>
                */
    return (
      <Row>
        <Input
          name="message"
          value={this.state.message}
          onChange={this.handleInputChange}
          s={6}
          label="type your message"
          type="textarea"
        >
        </Input>
        <Button onClick={this.submitPost}>
          Post Message
        </Button>

        {this.state.retunedMessageArray.map((message) =>
          <p key={message._id}>
            {message.user.userName}: {message.message}
          </p>)}
      </Row>
    );
  }

}

export default Messages;
