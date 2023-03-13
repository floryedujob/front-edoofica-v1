
import { Inter } from 'next/font/google'
import { PublicLayout } from '@layouts'
import { SectionHero, SectionContents } from '@/components/Sections'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  return (
    <PublicLayout>
      <SectionHero />
      <SectionContents />
    </PublicLayout>
    // <div> <pre>{JSON.stringify(header, null, 2)}</pre> </div>
  )
}
