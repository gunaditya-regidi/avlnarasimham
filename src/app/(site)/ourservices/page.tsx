
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const services = [
  {
    title: 'Material Intelligence and Selection',
    description: `With over 15 years of specialized expertise in ferro alloy materials, we stand as industry leaders in material intelligence and selection. Our advanced analytical capabilities and deep understanding of material behavior set us apart from competitors.

Our team of metallurgical experts employs cutting-edge characterization techniques and proprietary selection algorithms to optimize material compositions. We've successfully reduced raw material costs by 25% while improving final product quality for numerous clients.

Key achievements:
• Developed innovative material testing protocols now adopted industry-wide
• Achieved 99.8% accuracy in predicting material performance
• Reduced client material waste by average 30%

Our commitment to excellence has earned us recognition as the go-to consultants for critical material decisions in the ferro alloy industry.`,
    image: '/images/home/innovation/brand.svg',
    headerImage: '/images/home/services/material-testing-lab.jpg',
    bgColor: 'bg-purple/20',
    textColor: 'text-purple'
  },
  {
    title: 'Process Engineering & Optimization',
    description: `Leading the industry in process optimization, our engineering solutions have revolutionized ferro alloy production efficiency. Our unique approach combines traditional engineering expertise with advanced AI-driven analysis.

We've pioneered breakthrough technologies in energy optimization and process control, resulting in unprecedented improvements in operational efficiency. Our solutions have helped clients achieve up to 40% reduction in energy consumption while maintaining superior product quality.

Significant impacts:
• Implemented smart furnace control systems increasing yield by 35%
• Developed real-time monitoring solutions reducing downtime by 60%
• Optimized production processes saving clients millions annually

Our track record of successful implementations across global operations demonstrates our unmatched capability in process engineering.`,
    image: '/images/home/innovation/digitalmarketing.svg',
    headerImage: '/images/home/services/process-control-room.jpg',
    bgColor: 'bg-blue/20',
    textColor: 'text-blue'
  },
  {
    title: 'Failure Analysis & Reliability Engineering',
    description: `As pioneers in reliability engineering for the ferro alloy industry, we bring unparalleled expertise in failure analysis and prevention. Our systematic approach combines advanced diagnostic tools with decades of hands-on experience.

Our team has successfully resolved complex operational challenges across hundreds of plants worldwide. We've developed proprietary methodologies that have become industry standards for failure prevention and reliability improvement.

Proven excellence:
• Reduced equipment failure rates by average 75%
• Increased plant reliability to 99.9% uptime
• Saved clients over $50M in prevented failures

Our comprehensive reliability solutions have made us the trusted partner for leading ferro alloy producers globally.`,
    image: '/images/home/innovation/uiux.svg',
    headerImage: '/images/home/services/reliability-testing.jpg',
    bgColor: 'bg-orange/20',
    textColor: 'text-orange'
  },
  {
    title: 'Testing, Auditing & Compliance',
    description: `With accreditation from leading international bodies, we provide the most comprehensive testing and auditing services in the ferro alloy industry. Our rigorous methodologies and cutting-edge testing facilities ensure unmatched accuracy and reliability.

Our audit protocols have been adopted as best practices by regulatory bodies worldwide. We combine technical expertise with deep industry knowledge to deliver actionable compliance solutions.

Industry leadership:
• Conducted over 1000 successful plant audits globally
• Developed 15 industry-standard testing protocols
• 100% success rate in compliance certification

Our reputation for thoroughness and expertise makes us the preferred choice for critical compliance requirements.`,
    image: '/images/home/innovation/analitics.svg',
    headerImage: '/images/home/services/quality-inspection.jpg',
    bgColor: 'bg-green/20',
    textColor: 'text-green'
  },
  {
    title: 'Training and R&D Solutions',
    description: `As industry thought leaders, we deliver cutting-edge training and R&D solutions that shape the future of ferro alloy production. Our research initiatives have led to breakthrough innovations in process technology and material science.

Our training programs combine theoretical knowledge with practical applications, delivered by industry experts with decades of experience. We've trained over 10,000 professionals worldwide, creating the next generation of industry leaders.

Innovation highlights:
• Developed 20+ patented technologies
• Published 50+ research papers in leading journals
• Created industry's first virtual reality training platform

Our commitment to innovation and knowledge sharing has established us as the premier R&D partner in the ferro alloy industry.`,
    image: '/images/home/innovation/webdevp.svg',
    headerImage: '/images/home/services/training-session.jpg',
    bgColor: 'bg-pink/20',
    textColor: 'text-pink'
  }
]

const images = [
  '/images/home/services/lab-testing.jpg',
  '/images/home/services/process-optimization.jpg',
  '/images/home/services/reliability-engineering.jpg',
  '/images/home/services/training-workshop.jpg',
  '/images/home/services/research-development.jpg'
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
      <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
      
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
            {/* Header Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full h-[300px] rounded-xl overflow-hidden"
            >
              <img
                src={services[selectedService].headerImage}
                alt={`${services[selectedService].title} header`}
                className="w-full h-full object-cover"
              />
            </motion.div>

            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="w-24 h-24 flex-shrink-0">
                <img
                  src={services[selectedService].image}
                  alt={services[selectedService].title}
                  className="w-full h-full object-contain"
                />
              </div>
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
