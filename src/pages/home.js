import React from 'react';
import TestInput from '../components/test-field';
import InputField from '../components/input-field';

export default class Home extends React.Component {

  constructor(props) {
    super(props)
    this.onTestChange = this.onTestChange.bind(this)
    this.state = {
      test: ''
    }
  }

  onTestChange(value) {
    this.setState({test: value})
  }

  validate(value) {
    if (value != null && value.length < 5) {
      return 'VSF o viado'
    }

    return '';
  }

  render() {
    return (
      <div>
        <h1>Welcome</h1>

        <InputField validate={this.validate} label="Test" value={this.state && this.state.test} onChange={ this.onTestChange }/>
        {this.state.test}
      </div>
    )
  }
}
