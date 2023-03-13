"use client"

import React, { useState } from 'react'
import { Icon } from '@components'

function ButtonIcon() {

    const [icon, setIcon] = useState<string>("FaPlus")


    const handleIcon = () => {
        setIcon(prevIcon => prevIcon === 'FaPlus' ? 'FaCheck' : 'FaPlus')
    }

  return (
    <button 
        onClick={handleIcon}
        className={`
        active:opacity-100 hover:opacity-80 w-40px h-40px flex items-center justify-center border-2 border-white rounded-full ${icon === 'FaCheck' && "hover:bg-white hover:opacity-100"}
    `}>
        <Icon color={icon === 'FaCheck' ? 'green' : 'white'} name={icon} />
    </button>
  )
}

export default ButtonIcon