"use client"

import { AiOutlineMenu, AiOutlineUser } from 'react-icons/ai'
import { usePathname } from 'next/navigation'
import { Logo } from '@components';


interface IHeaderCourse {

}


export const HeaderCourse = ({ 
    
}: IHeaderCourse) => {

    const pathname = usePathname()
    
    
  return (
    <div className={`w-full h-14 bg-white border-b border-primary-grayDark shadow-md flex  lg:px-56 px-4 items-center `}>
        <Logo />
        <div className='lg:hidden flex-1 flex justify-end'>
            <AiOutlineMenu size={30} className='text-primary-dark' />
        </div>
    </div>
  )
}
