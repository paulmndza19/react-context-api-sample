import React from 'react'
import { LastNameContext } from './context'

const firstName = 'John Paul'

export default class Child extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  static contextType = LastNameContext

  handleChange(event) {
    this.props.handleChange(event)
  }

  render() {
    return (
      <div>
        <h4> Child: {firstName} {this.props.lastName} </h4>
        <label> Change Last Name: </label>
        <input type="text" onChange={evt => this.handleChange(evt)}></input>
      </div>
    )
  }
}
