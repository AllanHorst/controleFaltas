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

  validatePresence(value) {
    if (value != null && value.length == 0) {
      return 'Campo Obrigatório'
    }

    return '';
  }

  handleChange(event) {
    let { value } = event.target;
    let msg = '';

    if (this.props.required && this.props.required == 'true') {
      msg = this.validatePresence(value)
    }

    if (msg == '' && this.props.validate) {
      msg = this.props.validate(value)
    }

    this.setState({
      message: msg
    })
    this.props.onChange(event)
  }

  render() {
    return (
      <div className={`form-group has-feedback ${ this.state.message ? 'has-danger' : ''}`}>
      <label htmlFor="this.state.id">
          {this.props.label}
        </label>
          <input id={this.state.id}
            name={ this.props.name || ''}
            className={`form-control ${this.props.styleClass || ''}`}
            placeholder={this.props.placeholder}
            type={ this.props.type || 'text'}
            value={this.state.value}
            onChange={ this.handleChange }/>
        <span className="form-text text-muted">{ this.state && this.state.message ? this.state.message : ''}</span>
      </div>
    )
  }
}