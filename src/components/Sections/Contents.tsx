import { dbcourses } from '@mocks/data.json';
import { Carousel } from '@components';



export async function SectionContents() {

    const response = await fetch('http://localhost:1337/api/cursos?populate=deep', {
        next: {
        revalidate: 5
        },
        cache: 'no-store'
    })
    const data = await response.json()

  return (
    <div className=' flex flex-col items-center gap-4 mb-6 bg-gray-50'>
        <div className='flex flex-col mt-14 lg:px-56 px-4'>
            <h1 className='text-2xl lg:text-4xl font-bold text-center'>Explore nossos minicursos</h1>
            <p className='lg:text-base lg:mt-4 text-sm text-center text-primary-grayDark400'>
                Desbloqueie o seu próximo nível de conhecimento e seja contratado pelas maiores empresas do país
            </p>
        </div>

        <div className='w-full px-4 lg:px-0 lg:w-3/4' >
            <Carousel 
                data={data.data}
                title="Continua assistindo"
                link='course'
            />
        </div>

    </div>
  )
}
