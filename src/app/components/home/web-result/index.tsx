'use client'
import Image from 'next/image'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'

function WebResult() {
  const [data, setData] = useState<any>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  // Sample image array - replace these URLs with your actual image paths
  const sliderImages = [
     '/images/slider/image1.jpeg',     '/images/slider/image2.jpeg',     '/images/slider/image3.jpeg',     '/images/slider/image4.jpeg',     '/images/slider/image5.jpeg',     '/images/slider/image6.jpeg',     '/images/slider/image7.jpeg',     '/images/slider/image8.jpeg',     '/images/slider/image9.jpeg',     '/images/slider/image10.jpeg',     '/images/slider/image11.jpeg',     '/images/slider/image12.jpeg',     '/images/slider/image13.jpeg',     '/images/slider/image14.jpeg',     '/images/slider/image15.jpeg',  '/images/slider/image16.jpg', '/images/slider/image17.jpg',
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/page-data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setData(data?.WebResultTagList)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <section id='aboutus'>
        <div className='2xl:py-20 py-11'>
          <div className='container'>
            <div className='flex flex-col lg:gap-16 gap-5'>
              <div className='flex flex-col items-center justify-center text-center gap-3'>
                <h2 className='max-w-6xl'>
                  Crafting exceptional, well experienced & technology driven strategies to drive impactful results with
                </h2>
                <div>
                  <h2>
                    {data?.map((items:any, index:any) => (
                      <span
                        key={index}
                        className={`inline-flex m-2 py-1 px-5 gap-3 rounded-full ${items.bg_color} ${items.txt_color} items-center`}>
                        <Image
                          src={items.image}
                          alt={items.name}
                          width={40}
                          height={40}
                          style={{ width: '40px', height: '40px' }}
                        />
                        <span className='instrument-font italic font-normal'>
                          {items.name}
                        </span>
                      </span>
                    ))}
                  </h2>
                </div>
              </div>
              <div className='flex-col md:flex md:flex-row justify-center items-center text-center'>
                <div className='relative 2xl:px-24 px-16 md:py-8 py-4'>
                  <h2 ref={ref} className='2xl:text-9xl md:text-7xl text-5xl'>
                    <sup>+</sup>
                    {inView ? <CountUp start={0} end={35} duration={3} /> : '0'}
                  </h2>
                  <p className='mt-2 text-dark_black/60 dark:text-white/60'>
                    Total Projects Completed
                  </p>
                  <div className='hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-28 w-px bg-dark_black/10 dark:bg-white/10' />
                </div>
                <div className='relative 2xl:px-24 px-16 md:py-8 py-4'>
                  <h2 className='2xl:text-9xl md:text-7xl text-5xl'>
                    <sup>+</sup>
                    {inView ? <CountUp start={0} end={50} duration={3} /> : '0'}
                  </h2>
                  <p className='mt-2 text-dark_black/60 dark:text-white/60'>
                    Years of Experience
                  </p>
                  <div className='hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-28 w-px bg-dark_black/10 dark:bg-white/10' />
                </div>
                <div className='relative 2xl:px-24 px-16 md:py-8 py-4'>
                  <h2 className='2xl:text-9xl md:text-7xl text-5xl'>
                    <sup>+</sup>
                    {inView ? <CountUp start={0} end={20} duration={3} /> : '0'}
                  </h2>
                  <p className='mt-2 text-dark_black/60 dark:text-white/60'>
                    Industry Certifications
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Slider Section */}
        <div className='pb-8'>
          <div className='container'>
            <div className='overflow-hidden'>
              <div className='slider-track'>
                {/* First set of images */}
                {sliderImages.map((image, index) => (
                  <div key={index} className='slider-item'>
                    <div className='image-container'>
                      <Image
                        src={image}
                        alt={`Slider image ${index + 1}`}
                        fill
                        className='rounded-lg object-cover'
                      />
                    </div>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {sliderImages.map((image, index) => (
                  <div key={`duplicate-${index}`} className='slider-item'>
                    <div className='image-container'>
                      <Image
                        src={image}
                        alt={`Slider image ${index + 1}`}
                        fill
                        className='rounded-lg object-cover'
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .slider-track {
          display: flex;
          animation: scroll 30s linear infinite;
          width: calc(240px * 30 + 1rem * 30);
        }
        
        .slider-item {
          flex: 0 0 auto;
          margin-right: 1rem;
          width: 240px;
        }
        
        .image-container {
          position: relative;
          width: 240px;
          height: 180px;
          overflow: hidden;
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-240px * 15 - 1rem * 15));
          }
        }
        
        .slider-track:hover {
          animation-play-state: paused;
        }
        
        @media (max-width: 768px) {
          .slider-track {
            animation-duration: 20s;
            width: calc(180px * 30 + 0.75rem * 30);
          }
          
          .slider-item {
            margin-right: 0.75rem;
            width: 180px;
          }
          
          .image-container {
            width: 180px;
            height: 135px;
          }
          
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-180px * 15 - 0.75rem * 15));
            }
          }
        }
      `}</style>
    </>
  )
}

export default WebResult
