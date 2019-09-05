import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Event from './Event'
import { readEvents } from '../actions'

class Events extends Component {
  componentDidMount = () => {
    this.props.readEvents()
  }

  render() {
    const { events } = this.props

    return (
      <>
        {events.map(event => {
          return (
            <Event
              key={event.id}
              event={event}
            />
          )
        })}
        <Link to="events/new" >new events</Link >
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    events: state.events
  }
}

const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchToProps)(Events);
