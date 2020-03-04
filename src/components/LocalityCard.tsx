import React from 'react'

import { Locality } from 'types'

export interface Props {
  locality: Locality
}

const LocalityCard = ({ locality }: Props) => {
  const { name, municipality_name, state_name } = locality

  return (
    <div style={{ marginBottom: 10 }}>
      <div style={{ fontSize: 40 }}>{name}</div>
      <div style={{ fontSize: 20 }}>
        {municipality_name}, {state_name}
      </div>
    </div>
  )
}

export default LocalityCard
