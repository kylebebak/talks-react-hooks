import React from 'react'

import { Locality } from 'types'

export interface Props {
  locality: Locality
}

const LocalityCard = ({ locality }: Props) => {
  const { name, municipality_name, state_name } = locality

  return (
    <div>
      <div style={{ fontSize: 40 }}>name: {name}</div>
      <div style={{ fontSize: 20 }}>municipality_name: {municipality_name}, state_name: {state_name}</div>
    </div>
  )
}

export default LocalityCard
