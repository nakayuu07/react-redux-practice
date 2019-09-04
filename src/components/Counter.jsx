import React, { Component } from 'react';
class Counter extends Component {
  state = { count: 1 }

  handleCountUp = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1 }
    })
  }

  handleCountDown = () => {
    this.setState(prevState => {
      return { count: prevState.count - 1 }
    })
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.handleCountUp}> +1</button>
        <button onClick={this.handleCountDown}> -1</button>
      </div>
    )
  }
}

export default Counter;
