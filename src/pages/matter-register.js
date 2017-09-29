import React from 'react'
import InputField from '../components/input-field';
import SelectField from '../components/select-field';
import * as Util from '../util.js'

export default class MatterRegister extends React.Component{

  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addSchedule = this.addSchedule.bind(this);
    this.state = {
      matter: {
        name: '',
        teacher: '',
        course_load: 0,
        schedule: []
      },
      schedule: {
        day: '1'
      }
    }
  }

  addSchedule(event) {
    event.preventDefault()
    let { schedule } = this.state
    let { matter } = this.state

    if (Util.isEmpty(schedule.start_time) || Util.isEmpty(schedule.end_time)) {
      return;
    }

    matter.schedule.push(schedule)
    this.setState({
      matter: matter,
      schedule: {}
    })

    console.log(this.state.matter)
  }

  handleSubmit(event) {
    console.log(this.state)
    event.preventDefault()
  }

  updateField(event, objName) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    let obj = this.state[objName]
    obj[name] = value
    this.setState({ [objName] : obj} )
  }

  render() {
    return(
      <div>
        <h1>Cadastro de Matérias</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="row">
            <div className="col-xs-12 col-md-8 col-lg-6">

            <InputField
              label="Nome"
              name="name"
              required="true"
              placeholder="Nome da Matéria"
              value={this.state && this.state.test}
              onChange={ event => { this.updateField(event, 'matter') } }/>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-md-8 col-lg-6">

            <InputField
              label="Professor"
              name="teacher"
              placeholder="Nome do Professor"
              value={this.state && this.state.name}
              onChange={ event => { this.updateField(event, 'matter') } }/>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-md-8 col-lg-6">

            <InputField
              label="Carga horária"
              name="course_load"
              type="number"
              placeholder="Carga horária"
              value={this.state && this.state.name}
              onChange={ event => { this.updateField(event, 'matter') } }/>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-md-6 col-lg-2">
              <SelectField name="day"
                value={this.state.schedule.day}
                list={Util.daysOfWeek}
                idField="id"
                label="Dia da Semana"
                nameField="name"
                onChange={event => this.updateField(event, 'schedule')}/>
            </div>

            <div className="col-xs-12 col-md-3 col-lg-2">
              <InputField
                label="Hora Início"
                required="true"
                name="start_time"
                type="text"
                placeholder="Ex: 19:15"
                value={this.state && this.state.name}
                onChange={ event => { this.updateField(event, 'schedule') } }/>
            </div>

            <div className="col-xs-12 col-md-3 col-lg-2">
              <InputField
                label="Hora Fim"
                required="true"
                name="end_time"
                type="text"
                placeholder="Ex: 19:15"
                value={this.state && this.state.name}
                onChange={ event => { this.updateField(event, 'schedule') } }/>
            </div>
            <div className="col-xs-12 col-md-3 col-lg-2">
              <button style={ {marginTop: '30px'} } className="btn btn-default" onClick={ this.addSchedule }>Adicionar</button>
            </div>

          </div>


          <div className="row">
            <div className="col-xs-12 col-md-8 col-lg-6">
              <input className="btn btn-primary " type="submit" value="Salvar" />
            </div>
          </div>
        </form>
      </div>
    )
  }
 }