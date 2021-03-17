import React from 'react'
import Parent from './parent'

export default class Grandparent extends React.Component {
  render() {
    return (
      <div>
        <h2> Grand Parent: Angel Mendoza Jr. </h2>
        <Parent/>
      </div>
    )
  }
}
