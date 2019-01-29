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
  }

  loadNeeds = () => {
    API.getNeeds()
      .then(res => this.setState({ needs: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state.needs);
    return (
      <div>
        {props.needs.length ? (
          <Row>
            {props.needs.map(need => (
              <Modal
                trigger={
                  <Card key={need._id} title={need.category}>
                    <Row>
                      <Col s="6">
                        <p>{need.description}</p>
                      </Col>
                      <Col s="6">
                        <img src={need.imageurl} alt="need"/>
                      </Col>
                    </Row>
                  </Card>
                }>
                <NeedView
                  category={need.category}
                  description={need.description} 
                  imageurl={need.imageurl}
                  _id={need._id} />
              </Modal>
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
