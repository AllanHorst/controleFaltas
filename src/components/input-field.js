import React from 'react';
import * as Util from '../util'

export default class InputField extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      id: props.id || Util.getRandomId('textinput'),
      value: props.value,
      message: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let { value } = event.target;
    this.setState({
      value: value,
      message: this.props.validate(value)
    })
    this.props.onChange(value)
  }

  render() {
    return (
      <div>
        <label>
          {this.props.label}
        </label>
          <input id={this.state.id}
             className={`form-control ${this.props.styleClass || ''}`}
             placeholder={this.props.placeholder}
             type={ this.props.type || 'text'}
             value={this.state.value}
             onChange={ this.handleChange }/>
        <span>{ this.state && this.state.message ? this.state.message : ''}</span>
      </div>
    )
  }
}