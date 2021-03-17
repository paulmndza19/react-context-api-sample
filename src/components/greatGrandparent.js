import React from 'react'
import GrandParent from './grandparent'
import { LastNameContext } from './context'

const firstName = 'Angel'
const lastName = 'Mendoza'

export default class GreatGrandparent extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      lastName: lastName
    }
  }

  handleChange(event) {
    this.setState( { lastName: event.target.value } )
  }

  render() {
    return (
      <LastNameContext.Provider value={this.state.lastName}>
        <div>
          <h1> Great Grand Parent: {firstName} {this.state.lastName} Sr. </h1>
          <GrandParent
            handleChange = { this.handleChange }
            lastName = { this.state.lastName }
          />
        </div>
      </LastNameContext.Provider>
    )
  }
}
