import React from 'react'
import Child from './child'

export default class Parent extends React.Component {
  render() {
    return (
      <div>
        <h3> Parent: Rowena Mendoza </h3>
        <Child/>
      </div>
    )
  }
}
