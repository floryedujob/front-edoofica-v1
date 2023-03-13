import React from 'react'
import { IReactNode } from '@types'

export function AuthLayout({ children }: IReactNode) {
  return (
    <div>
      <h1>Auth</h1>
      {children}
    </div>
  )
}