import React, { Component } from 'react';
import { connect } from 'react-redux'
import { countUp, countDown } from '../actions'
class Counter extends Component {
  render() {
    console.log(this.props)

    return (
      <div>
        <p>{this.props.count}</p>
        <button onClick={this.props.countUp}> +1</button>
        <button onClick={this.props.countDown}> -1</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    count: state.count.value
  }
}

const mapDispatchToProps = dispatch => {
  return {
    countUp: () => {
      dispatch(countUp())
    },

    countDown: () => {
      dispatch(countDown())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
