import React from 'react'
import Parent from './parent'

export default class Grandparent extends React.Component {
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
        <h2> Grand Parent: Angel {this.props.lastName} Jr. </h2>
        <Parent
          handleChange = {this.handleChange}
          lastName = { this.props.lastName }
        />
      </div>
    )
  }
}
