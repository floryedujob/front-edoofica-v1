import React from 'react'
import { IReactNode } from '@types'
import { HeaderPublic as Header } from '@/components/Header/Public'
import { SectionFooter } from '@components'
import { urlConfig } from '@utils'

export async function PublicLayout({ children }: IReactNode) {

  const response = await fetch('http://localhost:1337/api/home?populate=deep', {
    next: {
      revalidate: 5
    },
    cache: 'no-store'
  })
  const data = await response.json()
  const dbheader = data.data?.attributes?.header
  const dbmenu = data.data?.attributes?.header?.nav?.data?.attributes?.menu
  const logodb = dbheader?.logo?.data?.attributes

  const dbFooter = data.data?.attributes?.SectionFooter
  const dbLogoFooter = data?.data?.attributes?.SectionFooter?.logo?.img?.data?.attributes
  

  return (
    <div className='m-w-screen bg-white text-primary-dark'>
      <Header menu={dbmenu} alt={logodb?.alternativeText} logo={`${urlConfig}${logodb?.url}`} />
      {children}
      <SectionFooter 
        altLogo={dbLogoFooter?.alternativeText} 
        logo={urlConfig+dbLogoFooter?.url} 
        info={dbFooter?.info} 
        socialLinks={dbFooter?.socialLink}
      />
    </div>
  )
}