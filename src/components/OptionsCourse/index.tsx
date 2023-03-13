"use client"

import React, { useState } from 'react'
import { Button, Carousel } from '@components'


interface IOptionsCourse {
    description?: any,
    dbDetalhe?: any,
    dbContents?: any,
    dbRecomend?: any
}

const OptionsCourse = ({
    description, 
    dbContents=[],
    dbDetalhe,
    dbRecomend=[]
}: IOptionsCourse) => {

    const dbOptions = ['DETALHES', 'CONTÉUDOS', 'SUGESTÕES'] as const
    // const { slug, id } = navigation.

    type IOptionCourse = typeof dbOptions[number]

    const [optionCourse, setOptionCourse] = useState<IOptionCourse>("DETALHES")

    const handleOption = (option: IOptionCourse) => {
        setOptionCourse(option)
    }

  return (
    <div className='flex flex-col justify-center gap-4'>
        <ul className={`flex border-b border-primary-grayDark400 text-primary-dark gap-10 font-semibold text-base flex-1`}>
            {dbOptions?.map((option) => (
                <div className='relative flex flex-col justify-center h-full pb-6' key={option}>
                <li className={`text-primary-gray hover:text-primary ${option === optionCourse ? 'text-primary' : 'hover:opacity-80'}`}>
                    {/* <Button  onClick={() => handleOption(option)} color='light' variant='none'>{option}</Button> */}
                    <button 
                        className='text-primary-gray' 
                        onClick={() => handleOption(option)}
                    >
                        {option}
                    </button>
                </li>
                {option === optionCourse && <div className={`absolute bottom-0 w-full h-4px bg-primary-gray`} />}
                </div>
            ))}
        </ul>
        {optionCourse === "DETALHES" && <div className='text-white lg:w-1/2 text-shadow-xl'>{dbDetalhe}</div>}
        {optionCourse === "CONTÉUDOS" && 
            <div>
            {/* <CarouselContentCourse data={dataContents}/> */}
                <div>
                    {dbContents?.map((item: any, index) => (
                        <div key={index}> {item?.title} </div>
                    ))}
                </div>
                <Carousel module border={false} data={dbContents} link="course"/>
            </div>
        }
        {optionCourse === "SUGESTÕES" && <Carousel border={false} data={dbRecomend} link="course"/>}
    </div>
  )
}


export default OptionsCourse