import React from 'react'
import * as ReactIcons from 'react-icons/fa'
import { IconTypes } from './d'

export const Icon = ({ 
  name='FaFacebookF',
  color,
  size
 }: IconTypes) => {

  // console.log(k);
  

  return (
    <div style={{ color: color, fontSize: size }}>
      {React.createElement(ReactIcons[name])}
    </div>
  )
}
