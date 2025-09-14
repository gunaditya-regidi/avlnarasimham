'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { brand } from '@/app/types/menu'
import { brandList } from '@/app/data/page-data'
import { motion, useInView } from 'framer-motion'

function Innovation() {
  const ref = useRef(null)
  const inView = useInView(ref)
   const [innovationList, setinnovationList] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/page-data')
        if (!res.ok) throw new Error('Failed to fetch')

        const data = await res.json()
        setinnovationList(data?.innovationList)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }

    fetchData()
  }, [])

  const bottomAnimation = (index: any) => ({
    initial: { y: '25%', opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: '25%', opacity: 0 },
    transition: { duration: 0.3, delay: 0.3 + index * 0.3 },
  })
  return (
    <section id='services'>
      <div ref={ref} className='2xl:py-20 py-11'>
        <div className='container'>
          <div className='flex flex-col gap-12'>
            <div className='flex flex-col justify-center items-center gap-10 lg:gap-16'>
              <motion.div
                {...bottomAnimation(1)}
                className='max-w-(--breakpoint-Xsm) text-center'>
                <h2>
                  Where innovation meets{' '}
                  <span className='instrument-font italic font-normal dark:text-white/70'>
                    aesthetics
                  </span>
                </h2>
              </motion.div>
              <motion.div
                {...bottomAnimation(2)}
                className='grid auto-rows-max grid-cols-1 md:grid-cols-2 2xl:grid-cols-5 gap-6 w-full'>
                {innovationList?.map((items:any, index:any) => {
                  return (
                    <div
                      key={index}
                      className={`${items.bg_color} flex flex-col p-8 rounded-2xl gap-6 lg:gap-9 group relative overflow-hidden transition-all duration-300 hover:shadow-lg`}>
                      <div className="absolute inset-0 w-full h-full">
                        <Image
                          src={items.image}
                          alt='icon'
                          height={40}
                          width={40}
                          className="relative top-8 ml-8 transition-all duration-500 ease-in-out group-hover:scale-75"
                        />
                      </div>
                     
                      <div className="h-[40px] relative">
                      </div>
                      <div className="transition-all duration-500 ease-in-out group-hover:scale-110 relative">
                        <h5 className={`${items.txt_color}`}>
                          {items.title.split('\n')?.map((line:any, i:number) => (
                            <React.Fragment key={i}>
                              {line}
                              <br />
                            </React.Fragment>
                          ))}
                        </h5>
                      </div>
                    </div>
                  )
                })}
              </motion.div>
            </div>
           <motion.div
  {...bottomAnimation(3)}
  className='flex flex-col gap-4 xl:flex xl:flex-row bg-dark_black items-center justify-between dark:bg-white/5 py-8 px-7 sm:px-12 rounded-3xl w-full'>
  <h4 className='text-white text-center xl:text-left'>
    Start Solving, Start Scaling.
    <br /> Your Metallurgical Journey Starts Here!
  </h4>
  <div className='flex flex-col sm:flex-row gap-3 items-center'>
    {/* This button remains as previously defined, if you want it */}
    <Link
      href='/ourservices'
      className='group gap-2 text-dark_black font-medium bg-white rounded-full flex items-center lg:gap-4 py-3 px-10 border border-white dark:border-opacity-50 hover:bg-transparent hover:text-white transition-all duration-200 ease-in-out relative overflow-hidden'>
      <span className='mr-4 group-hover:translate-x-6 transform transition-transform duration-200 ease-in-out'>
        View Services
      </span>
      <svg
        width='32'
        height='32'
        viewBox='0 0 32 32'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='absolute right-4 transform transition-all duration-200 ease-in-out group-hover:-translate-x-33 group-hover:rotate-45'>
        <rect
          width='32'
          height='32'
          rx='16'
          fill='#1B1D1E'
          className=' transition-colors duration-200 ease-in-out group-hover:fill-white'
        />
        <path
          d='M11.832 11.3335H20.1654M20.1654 11.3335V19.6668M20.1654 11.3335L11.832 19.6668'
          stroke='white'
          strokeWidth='1.42857'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='group-hover:stroke-black'
        />
      </svg>
    </Link>

    {/* Updated Get Consultation button */}
    <Link
      href='/#pricing'
      // Initial state: purple background, white text, white arrow inside white circle
      // Hover state: white background, purple text, purple arrow inside purple circle
      className='group
        bg-[#673DE6] text-white border-[#673DE6]
        hover:bg-white hover:text-[#673DE6] hover:border-[#673DE6]

        font-medium gap-2 rounded-full flex items-center
        py-3 px-8 transition-all duration-300 ease-in-out relative overflow-hidden'>
      <span
        // Text moves right on hover
        className='transform mr-5 transition-transform duration-300 ease-in-out group-hover:translate-x-6'>
        Get Consultation
      </span>
      <svg
        width='32'
        height='32'
        viewBox='0 0 32 32'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        // Arrow starts at right, moves left and changes color on hover
        className='absolute right-3 transform transition-all duration-300 ease-in-out
                   group-hover:-translate-x-35 group-hover:rotate-45'> {/* Adjusted translate-x for left movement */}
        <rect
          width='32'
          height='32'
          rx='16'
          fill='white' // Initial circle color is white
          className='transition-colors duration-300 ease-in-out group-hover:fill-[#673DE6]' // Circle becomes purple on hover
        />
        <path
          d='M11.832 11.3334H20.1654M20.1654 11.3334V19.6668M20.1654 11.3334L11.832 19.6668'
          stroke='#1B1D1E' // Initial arrow color is dark (appears black in image)
          className='transition-colors duration-300 ease-in-out group-hover:stroke-white' // Arrow becomes white on hover
          strokeWidth='1.42857'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </Link>
  </div>
</motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Innovation
