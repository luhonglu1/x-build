import React, { createRef } from 'react'

class GetDomByRef extends React.Component<any, any> {
  public state = {}
  public refTitle = createRef() as any
  public refEle = null as any

  changeText() {
    this.refTitle.current.innerHTML = 'This is createRef'
    // this.refs.refStr.innerHTML = 'This is refStr'
    this.refEle.innerHTML = 'This is refEle'
  }

  render() {
    return (
      <div>
        <div ref={this.refTitle}>This is Demo</div>
        <div ref="refStr">This is Demo</div>
        <div ref={(ref) => (this.refEle = ref)}>This is Demo</div>
        <button onClick={() => this.changeText()}>change text</button>
      </div>
    )
  }
}

export default GetDomByRef
