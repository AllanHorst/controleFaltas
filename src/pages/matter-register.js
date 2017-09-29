import React from 'react'
import InputField from '../components/input-field';

export default class MatterRegister extends React.Component{

  constructor(props) {
    super(props)
    this.onTestChange = this.onTestChange.bind(this)
    this.state = {
      matter: {
        name: '',
        teacher: '',
        course_load: 0,
        schedule: []
      }
    }
  }

  onTestChange(value) {
    this.setState({test: value})
  }

  validate(value) {
    if (value != null && value.length == 0) {
      return 'Campo Obrigatório'
    }

    return '';
  }

  render() {
    return(
      <div>
        <h1>Cadastro de Matérias</h1>
        <div className="row">
          <div className="col-xs-12 col-md-8 col-lg-6">

          <InputField validate={this.validate} label="Nome" placeholder="Nome da Matéria" value={this.state && this.state.test} onChange={ this.onTestChange }/>
          </div>
        </div>
      </div>
    )
  }
 }