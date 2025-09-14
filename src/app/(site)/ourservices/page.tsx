'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const services = [
  {
    title: 'Material Intelligence and Selection',
    description: `With extensive specialized expertise in ferro alloy materials, I stand as an industry leader in material intelligence and selection. My advanced analytical capabilities and deep understanding of material behavior set me apart in the ferro alloy industry.

I employ cutting-edge characterization techniques and proprietary selection algorithms to optimize ferro alloy material compositions. I have successfully reduced raw material costs while improving final product quality for numerous ferro alloy clients.

Key achievements:
• Developed innovative ferro alloy material testing protocols now adopted industry-wide
• Achieved high accuracy in predicting ferro alloy material performance
• Reduced client material waste significantly in ferro alloy production

My commitment to excellence has earned recognition as the go-to consultant for critical ferro alloy material decisions in the industry.`,
    image: '/images/home/innovation/brand.svg',
    headerImage: '/images/home/services/material-testing-lab.jpg',
    bgColor: 'bg-purple/20',
    textColor: 'text-purple'
  },
  {
    title: 'Process Engineering & Optimization',
    description: `Leading in ferro alloy process optimization, my engineering solutions have revolutionized ferro alloy production efficiency. My unique approach combines traditional ferro alloy engineering expertise with advanced analytical methods.

I have pioneered breakthrough technologies in ferro alloy energy optimization and process control, resulting in significant improvements in operational efficiency. My solutions have helped clients achieve substantial reduction in energy consumption while maintaining superior ferro alloy product quality.

Significant impacts:
• Implemented smart ferro alloy furnace control systems increasing yield substantially
• Developed real-time monitoring solutions reducing downtime significantly
• Optimized ferro alloy production processes saving clients considerable costs annually

My track record of successful implementations across global ferro alloy operations demonstrates unmatched capability in ferro alloy process engineering.`,
    image: '/images/home/innovation/digitalmarketing.svg',
    headerImage: '/images/home/services/process-control-room.jpg',
    bgColor: 'bg-blue/20',
    textColor: 'text-blue'
  },
  {
    title: 'Failure Analysis & Reliability Engineering',
    description: `As a pioneer in reliability engineering for the ferro alloy industry, I bring unparalleled expertise in ferro alloy failure analysis and prevention. My systematic approach combines advanced diagnostic tools with decades of hands-on ferro alloy experience.

I have successfully resolved complex ferro alloy operational challenges across numerous plants worldwide. I have developed proprietary methodologies that have become industry standards for ferro alloy failure prevention and reliability improvement.

My comprehensive ferro alloy reliability solutions have made me the trusted partner for leading ferro alloy producers globally, ensuring optimal performance and minimal downtime in their operations.`,
    image: '/images/home/innovation/uiux.svg',
    headerImage: '/images/home/services/reliability-testing.jpg',
    bgColor: 'bg-orange/20',
    textColor: 'text-orange'
  },
  {
    title: 'New Product Development & Troubleshooting',
    description: `With accreditation from leading international bodies, I provide comprehensive new product development and troubleshooting services specialized in ferro alloys. My rigorous methodologies and cutting-edge approach ensure unmatched accuracy and reliability in ferro alloy innovations.

I specialize in the manufacture of special ferro alloy products like ultra low phosphorous ferro alloys, low manganese ferro alloys, low silicon ferro chrome (FeCr), and MCFCM2. My expertise extends to production of specialized products like low silicon SiMn, low Mn ferro alloys, and FeMn utilizing FeMn slag and L.G.H.S ores, among many other specialized ferro alloy products.

My troubleshooting protocols have been recognized as best practices by the ferro alloy industry. I combine technical ferro alloy expertise with deep industry knowledge to deliver actionable solutions for complex ferro alloy challenges.

My reputation for thoroughness and ferro alloy expertise makes me the preferred choice for critical new product development and troubleshooting requirements in the ferro alloy sector.`,
    image: '/images/home/innovation/analitics.svg',
    headerImage: '/images/home/services/quality-inspection.jpg',
    bgColor: 'bg-green/20',
    textColor: 'text-green'
  },
  {
    title: 'Training and R&D Solutions',
    description: `As an industry thought leader, I deliver cutting-edge training and R&D solutions that shape the future of ferro alloy production. My research initiatives have led to breakthrough innovations in ferro alloy process technology and material science.

My training programs combine theoretical ferro alloy knowledge with practical applications, delivered with decades of ferro alloy experience. I have trained numerous professionals worldwide, creating the next generation of ferro alloy industry leaders.

My commitment to innovation and knowledge sharing has established me as the premier R&D partner in the ferro alloy industry, consistently pushing the boundaries of what's possible in ferro alloy technology and production methods.`,
    image: '/images/home/innovation/webdevp.svg',
    headerImage: '/images/home/services/training-session.jpg',
    bgColor: 'bg-pink/20',
    textColor: 'text-pink'
  }
]

const images = [
  '/images/home/inno/ne.png',
  '/images/home/inno/new.png',
  '/images/home/inno/proc.png',
  '/images/home/inno/trai.png',
  '/images/home/inno/wo.png'
]

export default function Page() {
  const [selectedService, setSelectedService] = useState(0)
  const [currentImage, setCurrentImage] = useState(0)

  // Auto-advance image slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">My Services</h1>
      
      {/* Service Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {services.map((service, index) => (
          <button
            key={index}
            onClick={() => setSelectedService(index)}
            className={`px-6 py-3 rounded-full transition-all ${index === selectedService ? service.bgColor + ' ' + service.textColor : 'bg-gray-100'}`}
          >
            {service.title.split('\n')[0]}
          </button>
        ))}
      </div>

      {/* Service Details */}
      <motion.div
        key={selectedService}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto mb-16"
      >
        <div className={`p-8 rounded-2xl ${services[selectedService].bgColor}`}>
          <div className="flex flex-col gap-8">
           

            <div className="flex flex-col md:flex-row items-start gap-8">
             
              <div>
                <h2 className={`text-2xl font-bold mb-4 ${services[selectedService].textColor}`}>
                  {services[selectedService].title}
                </h2>
                <div className="text-gray-700 whitespace-pre-line">
                  {services[selectedService].description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Image Slider */}
      <div className="max-w-4xl mx-auto relative overflow-hidden rounded-2xl h-[400px]">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="w-full h-full"
        >
          <img
            src={images[currentImage]}
            alt={`Service showcase ${currentImage + 1}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Navigation Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-2 h-2 rounded-full transition-all ${index === currentImage ? 'bg-white scale-125' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}