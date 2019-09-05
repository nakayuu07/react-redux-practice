import React, { Component } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash'
import { readEvents } from '../actions'

class Events extends Component {
  componentDidMount = () => {
    this.props.readEvents()
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>title</th>
            <th>Body</th>
          </tr>
        </thead>

        <tbody>
          {this.renderEvents()}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = state => {
  return {
    events: state.events
  }
}

const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchToProps)(Events);
