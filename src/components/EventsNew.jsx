import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { postEvent } from '../actions'

class EventsNew extends Component {

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
          </div>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = ({ postEvent })

const validate = values => {
  const errors = {}
  if (!values.title) errors.title = "タイトルを入力してください"
  if (!values.body) errors.body = "本文を入力してください"

  return errors
}

export default connect(null, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventsNew' })(EventsNew)
);