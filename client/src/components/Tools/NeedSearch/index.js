import React, { Component } from 'react';
import { Row, Input, Button } from 'react-materialize';
import './style.css';
// import { throws } from 'assert';
// import { isNullOrUndefined } from 'util';

class NeedSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keywords: {
        'raking leaves' : null,
        'drive to doctor' : null,
        'used stroller' : null
      },
      category: '',
      needdate: '',
      keyword: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleAutoCompChange = this.handleAutoCompChange.bind(this);
    // this.getNeedsbySearch = this.getNeedsbySearch.bind(this);
    // this.handleAutoCompleteSelect = this.handleAutoCompleteSelect.bind(this);

  }

  // handleAutoCompChange(event) {
  //   // console.log(name);
  //   const value = event.target.value;
  //   console.log(value);
  //   this.setState({
  //     searchtext: value
  //   });
  // }

  // handleAutoCompleteSelect(value) {
  //   console.log(value)
  //   this.setState({
  //     searchtext: value
  //   })
  // }

  handleInputChange(event) {
    const { name, value } = event.target;
    console.log(value);
    this.setState({
      [name]: value
    });
  }

  // getNeedsbySearch() {
  //   console.log(this.state);
  // }

  render() {
    return (
      <Row>
        {/* <h5>Keyword</h5>
        <Autocomplete
          onChange={this.handleAutoCompChange}
          name='keyword'
          s={12}
          title='Type here'
          data={this.state.keywords}
        /> */}
        <h5>Type</h5>
        <Input
          onChange={this.handleInputChange}
          name="category" 
          s={12} 
          label="Select Need Type" 
          type='select'
          // value={this.props.category} 
          defaultValue='0'>
          <option value='0'>-Pick One-</option>
          <option value='Getting Around'>Getting Around</option>
          <option value='Cleaning Up'>Cleaning Up</option>
          <option value='Fixing Something'>Fixing Something</option>
          <option value='Financial Assistance'>Financial Assistance</option>
          <option value='Moving'>Moving</option>
          <option value='Professional Assistance'>
            Professional Assistance
          </option>        
        </Input>
        {/* <h5>Date</h5>
        <Input
          name='needdate'
          s={12}
          label="What's a preferred date?"
          type='date'
          onChange={this.handleInputChange}
        /> */}
        <Row>
        <Button
          className='search-button'
          waves='light'
          onClick={() => this.props.filterBySearch(this.state.category, this.state.keyword, this.state.needdate)}>
        Search
        </Button>
        </Row>

        <Button
          className='cancel-button' 
          waves='light' 
          onClick={this.props.getNeeds}>
          Clear
        </Button>
      </Row>
    );
  }
}

export default NeedSearch;
