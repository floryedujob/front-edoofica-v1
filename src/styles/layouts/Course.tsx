import React from 'react'
import { IReactNode } from '@types'
import { SectionFooter } from '@components'
import { HeaderPublic as Header } from '@/components/Header/Public'

export function CourseLayout({ children }: IReactNode) {
  return (
    <div className='bg-black'>
      <Header />
      {children}
      <SectionFooter />
    </div>
  )
}