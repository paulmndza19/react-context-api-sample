import React from 'react'
import Child from './child'

export default class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.handleChange(event)
  }

  render() {
    return (
      <div>
        <h3> Parent: Rowena {this.props.lastName} </h3>
        <Child
          lastName = { this.props.lastName }
          handleChange = {this.handleChange}
        />
      </div>
    )
  }
}
