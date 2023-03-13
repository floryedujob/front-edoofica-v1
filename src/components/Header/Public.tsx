"use client"

import { AiOutlineMenu, AiOutlineUser } from 'react-icons/ai'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { Button, Logo } from '@components';


const exMenu = [
    {
        title: 'Home',
        active: true,
        slug: '/'
    },
    {
        title: 'About',
        active: false,
        slug: '/about'
    },
    {
        title: 'Contact',
        active: false,
        slug: '/contact'
    },
    {
        title: 'Blog',
        active: false,
        slug: '/blog'
    }
]

interface Imenu {
    id?: number;
    title?: string;
    slug?: string;
    active?: boolean;
}

interface IHeaderPublic {
    logo?: string;
    alt?: string;
    menu?: Imenu[]
}



export const HeaderPublic = ({ 
    logo,
    alt,
    menu = exMenu
}: IHeaderPublic) => {

    const pathname = usePathname()
    
    
  return (
    <div className={`w-full h-14 bg-white border-b border-primary-grayDark shadow-md flex  lg:px-56 px-4 items-center `}>
        <Logo alt={alt} src={logo}/>
        <div className='lg:hidden flex-1 flex justify-end'>
            <AiOutlineMenu size={30} className='text-primary-dark' />
        </div>
        <div className='hidden lg:flex flex-1 items-center h-full'>
            <ul className={`flex h-full text-primary-dark gap-16 font-semibold justify-center items-center text-base flex-1`}>
                {menu?.map(({ active, slug='', title }) => (
                    <div className='relative flex flex-col justify-center h-full' key={slug}>
                        <li className={`hover:text-primary ${pathname === slug && 'text-primary'}`}>
                            <Link href={slug}>{title}</Link>
                        </li>
                        {pathname === slug && <div className={`absolute bottom-0 w-full h-2px bg-primary`} />}
                    </div>
                ))}
            </ul>
            <div className='flex items-center gap-6'>
                <Button variant='outline'>
                    <AiOutlineUser className='text-primary' size={16} />
                    <span className='text-xs hover:text-primary'>ENTRAR</span>
                </Button>
                <Button variant='solid'>
                    CRIAR CONTA
                </Button>
            </div>
        </div>
    </div>
  )
}
