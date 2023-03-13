"use client"

import { variantButton } from '@utils'
import Link from 'next/link'
import { useRouter, usePathname,  } from 'next/navigation'
import React from 'react'
import ButtonIcon from './ButtonIcon'
import { IButton } from './d'

const Button = ({ 
    variant = 'solid',
    icon,
    color = 'dark',
    full,
    onClick,
    children,
    buttonType = 'default',
    title,
    toSlug='',
    navigate = {
      pathname: '',
      query: {}
    }
 }: IButton) => {

    

    const classesVariants = `${variantButton(variant, color)}`
    const { pathname,  query } = navigate

    const navigation = useRouter()
    const activePathname = usePathname()
    const newPath = toSlug ? `${activePathname}/${toSlug}` : pathname

  return (
    <div className='w-full'>
      {buttonType === 'default' &&
        <Link href={{pathname: newPath , query}}>
          <button 
            className={`${full && "w-full"} font-semibold flex gap-3 justify-center items-center ${classesVariants}`} 
            onClick={onClick}
          >
            {children ?? title}
          </button>
        </Link>
      }
      {buttonType === 'iconAdd' &&
        <ButtonIcon />
      }
    </div>
  )
}

export default Button