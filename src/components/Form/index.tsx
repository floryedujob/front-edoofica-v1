"use client"

import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { AutoComplete } from './AutoComplete'
import { ISearchInput } from './d'

export const SearchInput = ({ 
    onChange,
    placeholder = 'O que você quer aprender?',
    value
 }: ISearchInput) => {

    const [valueSearch, setValueSearch] = useState<string>('')

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { currentTarget: { value: inputValue } } = event
        setValueSearch(inputValue);
    }

    const roundedByValue = valueSearch.length >= 3 ? 'rounded-tr-md rounded-tl-md' : 'rounded-full'

  return (
    <div className={`relative`}>
        <form className={`w-full shadow-lg ${roundedByValue} flex items-center border md:border-0 md:border-none px-4 py-2 gap-4 bg-white`}>
            <BsSearch className='text-primary-grayDark' />
            <input 
                className='w-full h-full outline-none bg-transparent' 
                placeholder={placeholder} 
                onChange={handleOnChange} 
                value={valueSearch}
                type={'text'} 
            />
        </form>
        {valueSearch.length >= 3 && <AutoComplete onClick={() => setValueSearch('')} /> }
    </div>
  )
}
