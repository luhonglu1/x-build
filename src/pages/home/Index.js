// import React from 'react'
// import GetDomByRef from './GetDomByRef'
// import SetStateTest from './SetStateTest'
// import Content from './Content'

// class Home extends React.Component {
//   constructor(props: any) {
//     super(props)
//     this.state = {}
//   }
//   render() {
//     return (
//       <div>
//         这里首页 <br />
//         {/* <GetDomByRef></GetDomByRef> */}
//         {/* <SetStateTest></SetStateTest> */}
//         <Content></Content>
//       </div>
//     )
//   }
// }

// export default Home

import React from 'react'
import { Layout, Menu, Breadcrumb, message, Button } from 'antd'
import {
  TableOutlined,
  SolutionOutlined,
  ProfileOutlined,
} from '@ant-design/icons'

import { AJAXmock } from '../../utils/mockajax'
import data from '../../data/sideList'

const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu

class Home extends React.Component {
  state = {
    collapsed: false,
    list: [],
    url: '',
  }

  onCollapse = (collapsed) => {
    console.log(collapsed)
    this.setState({ collapsed })
  }

  goPage(url) {
    console.log('跳转地址：', url)
    this.setState({
      url,
    })
  }

  async componentDidMount() {
    let res = await AJAXmock(data)
    if (res.success) {
      this.setState({
        list: res.data.menus,
      })
    } else {
      message.error('数据获取失败')
    }
  }

  shouldComponentUpdate(prevProp, prevState) {
    if (prevState.url === this.state.url && this.state.url !== '') {
      return false
    }
    return true
  }

  render() {
    const { collapsed } = this.state
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            {this.state.list.map((item) => {
              return (
                <SubMenu key={item.id} title={item.name}>
                  {item.children.map((item2) => {
                    return (
                      <Menu.Item
                        key={item2.id}
                        onClick={() => this.goPage(item2.url)}
                      >
                        {item2.name}
                      </Menu.Item>
                    )
                  })}
                </SubMenu>
              )
            })}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          {/* <Header className="site-layout-background" style={{ padding: 0 }} /> */}
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              跳转的地址：{this.state.url}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    )
  }
}

export default Home
