import Image from 'next/image'
import Link from 'next/link'
import { ILogo } from './d'
import logoDark from '../../assets/logo-dark.png'
import logoLight from '../../assets/logo-light.png'

export const Logo = ({ 
    type = 'light',
    src='',
    alt
 }: ILogo) => {

  // console.log("src: ", src);
  // console.log("alt: ", alt);
  
  return (
    <Link href={'/'} className='w-100px h-30px'>
        <Image 
          src={type === 'light' ? logoDark : logoLight}
          alt={alt ?? 'Logo da Edoo'}
          width='0'
          height='0'
          sizes='100vw'
          className='w-full h-full'
          priority
        />
    </Link>
  )
}
