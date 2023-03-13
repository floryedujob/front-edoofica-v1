"use client"

import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { IAutoComplete } from './d'

export const AutoComplete = ({ 
    onClick
 }: IAutoComplete) => {

    const fakeData = [
        {
            id: 1,
            name: 'Aprendendo a Usar o Word'
        },
        {
            id: 2,
            name: 'A Sociedade e suas Diversidades'
        },
        {
            id: 3,
            name: 'Aprendizado para a Vida'
        },
        {
            id: 4,
            name: 'Resolvendo Problemas com Design Thinking'
        }
    ]

  return (
    <div className='w-full h-200px overflow-y-auto gap-3 flex flex-col font-semibold shadow-lg bg-white p-4 absolute rounded-br-md rounded-bl-md scrollbar scrollbar-w-1 scrollbar-thumb-primary-dark scrollbar-track-gray-100'>
        {fakeData.map(({ id, name }, index) => (
            <div 
                onClick={onClick}
                className={`pb-3
                    active:text-primary-grayDark hover:text-primary-grayDark400 cursor-pointer ${index === fakeData.length - 1 ? '' : 'border-b border-primary-gray'}
                `} 
                key={id}
            >
                {name}
            </div>
        ))}
    </div>
  )
}
