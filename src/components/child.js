import React from 'react'
import { LastNameContext } from './context'

const firstName = 'John Paul'

export default class Child extends React.Component {
  static contextType = LastNameContext
  render() {
    return (
      <div>
        <h4> Child: {firstName} {this.context} </h4>
      </div>
    )
  }
}
