import React from 'react'

class Qrcode extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
    }
  }

  handleClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log(!this.state.active)

    this.setState({
      active: !this.state.active,
    })
  }

  handleClickQr = (e) => {
    e.preventDefault()
  }

  handleActive = (e) => {
    console.log(1111)

    this.setState({
      active: false,
    })
  }

  componentDidMount() {
    document.body.addEventListener('click', this.handleActive)
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.handleActive)
  }

  render() {
    return (
      <div className="qr-wrapper">
        <button className="qr" onClick={this.handleClick}>
          二维码
        </button>
        <div
          className="code"
          style={{
            display: this.state.active ? 'block' : 'none',
            height: 200,
            width: 200,
            backgroundColor: 'pink',
          }}
          onClick={this.handleClickQr}
        ></div>
      </div>
    )
  }
}

export { Qrcode }
