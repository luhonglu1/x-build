import React from 'react'
import { Button } from 'antd'

class Content extends React.Component {
  constructor(props: any) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <Button type={'primary'}>Button</Button>
      </div>
    )
  }
}

export default Content
