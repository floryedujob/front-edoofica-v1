/* eslint-disable @next/next/no-img-element */


import { Button, Icon, OptionCourse } from '@components'
import { dbcourses } from '@mocks/data.json';
import { CourseLayout } from '@layouts';
import { urlConfig } from '@/utils';

interface ProductProps {
  params: {
    slug: string
  }
}



async function Course({ params }: ProductProps) {

  const response = await fetch(`http://localhost:1337/api/cursos/${params.slug}?populate=deep`, {
    next: {
      revalidate: 5
    },
    cache: 'no-store'
  })

  const json = await response.json()
  const data= json.data?.attributes
  


  const dataContents = [
    {title: "Modulo 1"},
    {title: "Modulo 2"},
    {title: "Modulo 3"},
    {title: "Modulo 4"}
  ]


  // const urlbg = "https://images.nappy.co/uploads/large/img-1795-247131677556344yorr6kxpnvbwosv6a8au7j8uazianhucsoviypryywfsuqxqitwegsowcnnzqefnu612buaksxwtjqybwazsj9jkegxsc4zlcq7c.jpg?auto=format&w=1280&q=75"

  // const desc = `Empreendedor é aquele indivíduo que desenvolve a arte de empreender, de conquistar e mudar. Para ser um empreendedor a pessoa precisa aprender a exteriorizar aquilo que é e sempre foi. A palavra empreendedor, está relacionada ao seu próprio ser, ao seu ego.

  // Diferente daquilo que muitas pessoas acham, empreendedores não são necessariamente aquelas pessoas que abrem um negócio próprio. `
  

  return (
    <CourseLayout>
      <div style={{marginBottom: '28%'}} className=''>
        <div 
          style={{backgroundImage: `url(${urlConfig+data?.banner?.data?.attributes?.url})`}}
          className={`gap-20 w-full h-screen bg-no-repeat bg-cover bg-top bgShadowCourse flex flex-col lg:px-40 px-4`}    
        >
          <div style={{marginTop: "14%"}} className='text-white lg:w-450px shadow-xl text-left'>
            <h1 className='text-shadow-xl text-lg lg:text-3xl font-bold'>{data?.name}</h1>
          </div>
          <div className=''>
            <div className='flex items-center gap-6'>
              <div className='w-150px'>
                <Button 
                  full 
                  toSlug='teste1'
                  variant='light'
                >
                  <Icon name={"FaPlay"} /> ASSISTIR
                </Button>
              </div>
              <Button buttonType='iconAdd' />
            </div>
            <p className='text-white mt-6 lg:w-1/2 text-shadow-xl'>
              {data?.description}
            </p>
            {/* <div>
              {data?.about}
            </div> */}
          </div>
          <OptionCourse 
            dbDetalhe={data?.about}
            dbContents={data?.modulos}
          />
        </div>
      </div>
    </CourseLayout>
  )
}

export default Course