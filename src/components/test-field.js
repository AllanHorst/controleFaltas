import React from 'react';

export default class TestField extends React.Component {

  handleChange(event) {
    let { value } = event.target

    this.setState({
      value: value,
      message: this.validate(value)
    })
  }

  validate(text) {
    if (text.length < 5) {
      return 'Vsf o viado'
    }
    return null;
  }

  render() {
    return (
      <div>
        <input type={'text'} value={this.state ? this.state.value : ''} onChange={ (event) => this.handleChange(event) }/>
        <span>{ this.state && this.state.message ? this.state.message : ''}</span>
      </div>
    )
  }
}