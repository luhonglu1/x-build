import React from 'react'
const homeStyle = require('./home.module.less')
// import homeStyle from './home.module.less'

class SetStateTest extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }
  handleClick() {
    // this.setState((prevState, prop) => {
    //   return { count: prevState.count + 1 }
    // })
    // this.setState((prevState, prop) => {
    //   return { count: prevState.count + 2 }
    // })
    // this.setState((prevState, prop) => {
    //   return { count: prevState.count + 3 }
    // })
    this.setState({
      count: this.state.count + 1,
    })
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.count !== this.state.count) return true
    return false
  }
  render() {
    return (
      <div>
        <div>count: {this.state.count}</div>
        <button className={homeStyle.btn} onClick={() => this.handleClick()}>
          改变count
        </button>
      </div>
    )
  }
}

export default SetStateTest
