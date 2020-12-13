import React from 'react'

class Focus extends React.Component {
  state = {}

  myTextInput = null

  handleClick = () => {
    if (this.myTextInput !== null) {
      this.myTextInput.focus()
    }
  }

  render() {
    return (
      <div>
        <input type="text" ref={(ref) => (this.myTextInput = ref)} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.handleClick}
        />
      </div>
    )
  }
}

export { Focus }
