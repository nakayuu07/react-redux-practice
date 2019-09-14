import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { getEvent, deleteEvent, updateEvent } from '../actions'

class EventsShow extends Component {

  componentDidMount = () => {
    const { getEvent, match } = this.props
    const {params: { id }}  = match
    if(id) getEvent(id)
  }

  renderField = (field) => {
    const { input, label, type, meta: { touched, error } } = field

    return (
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    )
  }

  onSubmit = async (values) => {
    const { postEvent, history } = this.props
    await postEvent(values)
    history.push('/')
  }

  handleDeleteEvent = async () => {
    const { deleteEvent, history, match } = this.props
    const { params: { id }} = match
    deleteEvent(parseInt(id))
    history.push('/')
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props
    return (
      <>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field label="Title" name="title" type="text" component={this.renderField} />
          <Field label="Body" name="body" type="text" component={this.renderField} />

          <div>
            <input type="submit" value="Submit" disable={false} disabled={pristine || submitting} />
            <Link to="/">Cancel</Link>
            <Link to="/" onClick={this.handleDeleteEvent}><p>Delete</p></Link>
          </div>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const event = state.events[ownProps.match.params.id]
  return{
    initialValues: event, event
  }
}

const mapDispatchToProps = ({ deleteEvent, getEvent })

const validate = values => {
  const errors = {}
  if (!values.title) errors.title = "タイトルを入力してください"
  if (!values.body) errors.body = "本文を入力してください"

  return errors
}

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventsShowForm', enableReinitialize: true })(EventsShow)
);