"use client"

import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { CardCourse } from '../Card'
import { ICarousel } from './d'
import { urlConfig } from '@utils'

const Carousel = ({ 
    border = true,
    title,
    data = [],
    link,
    module= false
 }: ICarousel) => {

    const refCarousel = useRef<HTMLDivElement>(null)
    const [width, setWidth] = useState(0)
    const router = useRouter()

    useEffect(() => {
        if (refCarousel.current) {
            setWidth(refCarousel.current.scrollWidth - refCarousel.current.offsetWidth)
        }
    }, [])

    const handleOnclick = (id: string | number) => {
        router.push(`/${link}/${id}`)
    }
    

  return (
    <motion.div 
        ref={refCarousel} 
        className={`${data.length === 0 && "hidden"} ${border && "border-t border-gray-200"} outline-none py-4 w-full overflow-hidden`} 
    >
        {title &&
            <div className='flex flex-col my-4'>
                <h1 className='text-1xl lg:text-2xl font-bold text-left'>{title}</h1>
            </div>
        }
        <motion.div 
            className='flex gap-6  cursor-grab'
            whileTap={{ cursor: "grabbing" }}
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            // initial={{ x: 100 }}
            // animate={{ x: 0 }}
        >
            {!module && typeof data  === "undefined" ? <div>Loading...</div> : data.map(({ id="", attributes }) => (
                <motion.div key={id}>
                    <CardCourse 
                        cover={urlConfig + attributes?.cover?.data?.attributes?.url} 
                        description={attributes?.description}
                        id={id}
                        progress={attributes?.progress}
                        title={attributes?.name}
                        onClick={() => handleOnclick(id)}
                        module={module}
                    />
                </motion.div>
            )) }
            {module && (
                data?.map(({ id, title, progress, description }) => (
                    <motion.div key={id}>
                        <CardCourse 
                            // cover={urlConfig + attributes?.cover?.data?.attributes?.url} 
                            description={description}
                            module={module}
                            id={id}
                            progress={progress}
                            title={title}
                            onClick={() => handleOnclick(id)}
                        />
                    </motion.div>
                ))
            )}
        </motion.div>
    </motion.div>
  )
}

export default Carousel