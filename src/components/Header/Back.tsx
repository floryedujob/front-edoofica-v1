"use client"

import { useRouter } from 'next/navigation'
import { Button, Icon } from '@components';


interface IHeaderCourse {

}


export const HeaderBack = ({ 
    
}: IHeaderCourse) => {

    const router = useRouter()
    
    
  return (
    <div className={`w-full h-14 shadowHeader  flex px-4 items-center `}>
        <div className='flex justify-end items-center'>
            <Button variant='none' onClick={() => router.back()} color='light'>
                <Icon size={40} name='FaAngleLeft' color='white'/>
            </Button>  
        </div>
    </div>
  )
}
