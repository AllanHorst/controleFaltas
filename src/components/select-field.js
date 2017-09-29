import React from 'react';
import * as Util from '../util'

export default class SelectField extends React.Component {

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
    if (this.props.validate) {
      this.setState({
        message: this.props.validate(value)
      })
    }

    this.props.onChange(event)
  }

  render() {
    return (
      <div className="form-group">
        <div>
          <label>{this.props.label}</label>
        </div>
        <select style={{width: '100%'}} className="custom-select" name={this.props.name}
          value={this.props.value}
          onChange={this.handleChange } >

          { this.props.list && this.props.list.map( obj =>
            <option key={obj[this.props.idField || 'id']} value={obj[this.props.idField || 'id']} >
              {obj[this.props.nameField || 'name']}
            </option>
          ) }
        </select>
      </div>
    )
  }
}