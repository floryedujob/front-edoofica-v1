import { Logo, Icon } from '@components';
import { IFooter } from './d';



export const SectionFooter = ({
    altLogo,
    logo,
    info,
    socialLinks=[]
}: IFooter) => {

    // console.log(socialLinks)

  return (
    <div className='text-primary-gray bg-black lg:px-56 px-4 py-10 flex flex-col justify-center items-center gap-4'>
        <div className='flex-1 flex flex-col justify-center items-center gap-4'>
            <div className='w-70px lg:w-110px'>
                <Logo src={logo} alt={altLogo} type='dark' />
            </div>
            <div className='lg:w-400px text-center'>
                <p>{info}</p>
            </div>
            <div className='w-full border-t border-primary-grayDark400 p-4'>
                <ul className='flex items-center justify-center gap-4'>
                    {socialLinks.map(({ icon, url }) => (
                        <li 
                            className='w-40px h-40px border border-primary-grayDark rounded-full flex items-center justify-center' 
                            key={url}
                        >
                            <a target={"_blank"} href={url}>
                                <Icon name={icon} />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}
