import React from 'react'
import { CategoryItems } from '../../constant'
import { Card } from './Card'

export const Cards : React.FC = () => {
  return (
    <div className="grid grid-cols-1 min-[350px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {CategoryItems.map((item, i) => (
        <Card item={item} key={i}/>
      ))}
    </div>
  )
}
