import React from 'react'
import Footer from '../components/Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import {Focus} from './Focus'
import {Qrcode} from './Qrcode'

const Main = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <Focus></Focus>
    <Qrcode></Qrcode>
  </div>
)

export default Main
