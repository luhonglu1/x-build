import Main from '../pages/Main'
import Home from '../pages/home/Index'
import Error from '../pages/Error'
interface router {
  path: string
  component: any
  children?: Array<router>
  exact?: boolean
}

const routers: Array<router> = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/main',
    component: Main,
    exact: true,
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/error',
    component: Error,
  },
]

export default routers
