import React from "react"

const counterStyle = {
  /* styles skipped for brevity */
}

export default class Counter extends React.Component {
  static defaultProps = {
    initialvalue: 0,
  }

  state = {
    value: Number(this.props.initialvalue),
  }

  handleIncrement = () => {
    this.setState(state => {
      return {
        value: state.value + 1,
      }
    })
  }

  handleDecrement = () => {
    this.setState(state => {
      return {
        value: state.value - 1,
      }
    })
  }

  render() {
    return (
      <span style={counterStyle}>
        <strong className='button' style={{ flex: `1 1` }}>{this.state.value}</strong>
        <button className='button' onClick={this.handleDecrement}>-1</button>
        <button className='button' onClick={this.handleIncrement}>+1</button>
      </span>
    )
  }
}