import { seeMoreText } from '@/utils'
import Image from 'next/image'
import { BsSearch } from 'react-icons/bs'
import { Button } from '@components'
import { ICardCourse } from './d'

export const CardCourse = ({ 
    onClick,
    cover,
    description,
    progress,
    title,
    id,
    link,
    module= false
 }: ICardCourse) => {

  // console.log(cover);
  

  return (
    <div className='w-250px lg:w-300px bg-white rounded-lg'>
      {!module && (
        <div className='relative w-full h-160px lg:h-200px'>
          <Image 
            src={cover}
            alt={title}
            width='0'
            height='0'
            sizes='100vw'
            className='w-full h-full rounded-lg shadow-lg hover:opacity-90 object-cover'
            priority
          />
          <progress className="absolute bottom-0 progress progress-warning h-5px w-full" value={parseFloat(progress)} max="100"/>
        </div>
      )}

      <div className='py-4 px-2 hover:opacity-70'>
        {/* mostrar somente o title com limitação de 45 caracteres em tela maior que 1024px */}
        <div className='hidden lg:flex font-semibold text-xl lg:text-lg h-14 leading-6 '>{seeMoreText(title, 45)}</div>

        {/* mostrar somente o title com limitação de 35 caracteres em tela menos(mobile) */}
        <div className='lg:hidden font-semibold text-xl lg:text-lg h-14 leading-6 '>{seeMoreText(title, 35)}</div>

        {!module && <p className='text-sm text-primary-grayDark400 h-16'> {seeMoreText(description)} </p>}
      </div>

      <div className='flex px-2 pb-4 justify-end'>
        <Button onClick={onClick} full variant={parseInt(progress) === 0 ? 'solid' : 'outline'}>
          {parseInt(progress) === 0 ? !module ? 'COMEÇAR CURSO' : 'START' : 'Continuar' } 
        </Button>
      </div>
    </div>
  )
}
