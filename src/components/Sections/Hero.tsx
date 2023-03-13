import Image from 'next/image'
import { SearchInput } from '../Form';
import heroImg from "../../../public/black-woman-happy.png"
import { urlConfig } from '@/utils';



export async function SectionHero() {

    const response = await fetch('http://localhost:1337/api/home?populate=deep', {
        next: {
        revalidate: 5
        },
        cache: 'no-store'
    })

    const data = await response.json()

    const db = data.data?.attributes?.sectionHero
    const dbcover = data.data?.attributes?.sectionHero?.coverHero?.data?.attributes

    const css = `
        @media (max-width: 768px) {
            .mobileCss {
                background: linear-gradient(90deg, rgba(204,255,244,1) 0%, rgba(158,165,255,1) 100%);
            }
        }
        @media only screen and (min-width: 1024px) {
            .webCss {
                background: linear-gradient(90deg, rgba(204,255,244,1) 0%, rgba(158,165,255,1) 100%);
                height: calc(100vh - 200px);
                justify-content: space-between;
                align-items: center;
            }
        }`;

  return (
    <div className='flex flex-col-reverse lg:flex-row webCss gap-10 lg:px-40'>
        <style scoped>{css}</style>
        <div className='flex flex-col gap-3 flex-1 px-4'>
            <h1 className='text-2xl lg:text-4xl font-bold'>
                {/* {db?.title} */}
                Aprenda e aumente suas chances de ser contratado!
            </h1>
            <p className='text-sm'>
                {/* {db?.description} */}
                Invista em seu conhecimento e amplie suas oportunidades 
            </p>
            {/* {db?.viewSearchBar && <SearchInput />} */}
            <SearchInput />
        </div>
        <div className='mobileCss h-full lg:ml-20 lg:flex-1 flex'>
            <Image 
                // src={urlConfig+dbcover?.url}
                src={heroImg}
                // alt={dbcover?.alternativeText}
                alt='mulher negra feliz'
                width='0'
                height='0'
                sizes='100vw'
                className='w-full h-full object-cover'
                priority
            />
        </div>
    </div>
  )
}
