import React, { Component } from 'react';
import { connect } from 'react-redux'
import { readEvents } from '../actions'

class Events extends Component {
  componentDidMount = () => {
    this.props.readEvents()
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchToProps)(Events);
