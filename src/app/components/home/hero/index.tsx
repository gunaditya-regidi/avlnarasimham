'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import StarRating from '../../shared/star-rating'

function HeroSection() {
  const ref = useRef(null)
   const [avatarList, setAvatarList] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/page-data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()        
        setAvatarList(data)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }

    fetchData()
  }, [])

  const bottomAnimation = {
    initial: { y: '20%', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 1, delay: 0.8 },
  }

  return (
    <section>
      <div className='relative w-full pt-24 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10'>
        <div className='container relative z-10'>
          <div ref={ref} className='flex flex-col gap-8'>
            {/* ---------------- heading text --------------- */}
            <motion.div
              {...bottomAnimation}
              className='relative flex lg:flex-row flex-col items-center justify-between gap-8'>
              
              <div className='lg:max-w-[50%] flex flex-col text-center lg:text-left items-center lg:items-start gap-0.5'>
                <h1 className='font-medium w-auto text-17xl leading-none'>
                  Metallurgical Solutions <span className='text-7xl leading-none'>(Ferro Alloys)</span>
                 
                  <span className='instrument-font italic font-normal dark:text-white/70 block text-7xl leading-tight'>
                    with proven expertise
                  </span>
                </h1>
                <p className='max-w-38 text-dark_black/60 dark:text-white/60 text-sm mt-1.5'>
                  Crafting exceptional metallurgical solutions & advanced technologies driven by decades of experience to drive impactful results with precision and innovation
                </p>
              </div>

              <div className='lg:max-w-[45%] flex flex-col'>
                <div className='relative'>
                  <Image
                    src='/images/home/president.png'
                    alt='President'
                    width={500}
                    height={400}
                    className='rounded-2xl object-cover w-full'
                    priority
                  />
                </div>
                <div className='mt-1 bg-white/80 dark:bg-dark_black/80 backdrop-blur-sm p-4 rounded-xl'>
                  <h4 className='text-lg font-semibold'>Shri A.V.L. Narasimham</h4>
                  <p className='text-sm text-dark_black/60 dark:text-white/60'>Ferro Alloys - Pitamaha | Metallurgical Engineer</p>
                </div>
              </div>

            </motion.div>

            <motion.div
              {...bottomAnimation}
              className='flex flex-col items-center justify-center gap-4'>
              <div className='flex flex-col items-center justify-center gap-8 w-full sm:flex-row'>
                {/* ----------- Get started Link -------------- */}
                <Link
                  href='/#pricing'
                  className='group bg-purple_blue text-white font-medium flex flex-row justify-between items-center py-2 px-5 rounded-full max-w-64 w-full md:py-3 border border-purple_blue transition-all duration-200 ease-in-out hover:bg-transparent hover:text-purple_blue'>
                  <span className='flex text-start transform transition-transform duration-200 ease-in-out group-hover:translate-x-20'>
 Get Consultation
                  </span>
                  <svg
                    width='40'
                    height='40'
                    viewBox='0 0 40 40'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='transform transition-transform duration-200 ease-in-out group-hover:-translate-x-44 group-hover:rotate-45'>
                    <rect
                      width='40'
                      height='40'
                      rx='20'
                      className='fill-white transition-colors duration-200 ease-in-out group-hover:fill-purple_blue'
                    />
                    <path
                      d='M15.832 15.3334H24.1654V23.6667'
                      className='stroke-[#1B1D1E] transition-colors duration-200 ease-in-out group-hover:stroke-white'
                      strokeWidth='1.66667'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M15.832 23.6667L24.1654 15.3334'
                      className='stroke-[#1B1D1E] transition-colors duration-500 ease-in-out group-hover:stroke-white'
                      strokeWidth='1.66667'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </Link>

                {/* --------------- avatar division -------------- */}
                <div className='flex items-center gap-7'>
                  <ul className='avatar flex flex-row items-center'>
                    {avatarList?.avatarList?.map((items:any, index:any) => (
                      <li key={index} className='-mr-2 z-1 avatar-hover:ml-2'>
                        <Image
                          src={items.image}
                          alt='Image'
                          width={44}
                          height={44}
                          quality={100}
                          className='rounded-full border-2 border-white'
                          unoptimized={true}
                        />
                      </li>
                    ))}
                  </ul>
                  {/* -------------- Star rating division --------------- */}
                  <div className='gap-1 flex flex-col'>
                    <div>
                      <StarRating count={5} color='#F59E0B' />
                    </div>
                    <p className='text-sm font-normal text-dark_black/60 dark:text-white/60'>
                      Trusted by 35+ Organizations
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
