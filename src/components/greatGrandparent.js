import React from 'react'
import GrandParent from './grandparent'
import { LastNameContext } from './context'

const firstName = 'Angel'
const lastName = 'Mendoza'

export default class GreatGrandparent extends React.Component {
  render() {
    return (
      <LastNameContext.Provider value={lastName}>
        <div>
          <h1> Great Grand Parent: {firstName} {lastName} Sr. </h1>
          <GrandParent/>
        </div>
      </LastNameContext.Provider>
    )
  }
}
