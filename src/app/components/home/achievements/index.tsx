'use client'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import MarqueeAchievements from './MarqueeAchievements'

function Achievements() {
  const ref = useRef(null)
  const inView = useInView(ref)

  return (
    <section id='certifications'>
      <div ref={ref} className='2xl:py-20 py-11'>
        <div className='container'>
          <div className='flex flex-col gap-10 md:gap-20'>
            <div className='max-w-3xl text-center mx-auto'>
              <h2>
                Our Industry{' '}
                <span className='instrument-font italic font-normal dark:text-white/70'>
                  Certifications
                </span>
              </h2>
            </div>
            <MarqueeAchievements />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements
