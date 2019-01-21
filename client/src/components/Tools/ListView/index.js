import React, { Component } from 'react';
import { Card, Row } from 'react-materialize';
import './style.css';
import API from '../../../utils/API';

class ListView extends Component {
  
  state = {
   needs: []
  };

  componentDidMount() {
    this.loadNeeds();
  };

  loadNeeds = () => {
    API.getNeeds()
      .then(res => this.setState({ needs: res.data}))
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state.needs);
    return (
      <div className="list-scroll">
        {this.state.needs.length ? (
          <Row>
            {this.state.needs.map(need => (
              <Card key={need._id}>
                <a href={"/needs/" + need._id}>
                  <h4>{need.category}</h4>
                  <p>{need.description}</p>
                </a>
              </Card>
            ))}
          </Row>
        ) : (
          <Card>
            <h4>No Results to Display</h4>
          </Card>
        )}
    </div>
    )
  }
}


export default ListView;