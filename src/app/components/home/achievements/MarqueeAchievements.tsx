'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const MarqueeAchievements = () => {
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set())
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())

  // Generate array of certification paths
  const certifications = Array.from({ length: 16 }, (_, i) => i + 1)

  const handleImageError = (index: number) => {
    console.log(`Image failed to load: cert${index}`)
    setImageErrors(prev => new Set(prev).add(index))
  }

  const handleImageLoad = (index: number) => {
    console.log(`Image loaded successfully: cert${index}`)
    setLoadedImages(prev => new Set(prev).add(index))
  }

  // Component that tries multiple image formats
  const ImageComponent = ({ certNumber }: { certNumber: number }) => {
    const [currentExtIndex, setCurrentExtIndex] = useState(0)
    const [hasError, setHasError] = useState(false)
    
    // Try different extensions in order
    const extensions = ['.jpeg', '.JPEG']
    const currentSrc = `/images/certifications/cert${certNumber}${extensions[currentExtIndex]}`

    const handleError = () => {
      console.log(`Failed to load: ${currentSrc}`)
      
      // Try next extension
      if (currentExtIndex < extensions.length - 1) {
        setCurrentExtIndex(currentExtIndex + 1)
      } else {
        // All extensions failed
        setHasError(true)
        handleImageError(certNumber)
      }
    }

    if (hasError) {
      return (
        <div className="w-[250px] h-[350px] bg-gray-200 dark:bg-gray-700 rounded-lg shadow-md flex flex-col items-center justify-center flex-shrink-0">
          <div className="text-center text-gray-500 px-4">
            <span className="text-lg font-semibold">Certificate {certNumber}</span>
            <br />
            <small>Image not available</small>
            <br />
            <small className="text-xs">Tried all formats</small>
          </div>
        </div>
      )
    }

    return (
      <div className="relative w-[250px] h-[350px] flex-shrink-0">
        <Image
          src={currentSrc}
          alt={`Certificate ${certNumber}`}
          fill
          className="object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
          onError={handleError}
          onLoad={() => {
            console.log(`Successfully loaded: ${currentSrc}`)
            handleImageLoad(certNumber)
          }}
          sizes="250px"
          priority={certNumber <= 4} // Priority load first 4 images
          unoptimized // Use this if having issues with Next.js image optimization
        />
        {/* Debug number overlay */}
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded z-10">
  {certNumber}
</div>

      </div>
    )
  }

  return (
    <div className="overflow-hidden whitespace-nowrap py-16 bg-gray-50 dark:bg-gray-900">
      

      <motion.div
        className="inline-flex gap-16"
        animate={{
          x: ["0%", "-100%"],
        }}
        transition={{
          duration: 70, // 25 seconds as requested
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {certifications.map((certNum) => (
          <ImageComponent key={certNum} certNumber={certNum} />
        ))}
        
        {/* Duplicate for seamless loop */}
        {certifications.map((certNum) => (
          <ImageComponent key={`duplicate-${certNum}`} certNumber={certNum} />
        ))}
      </motion.div>
    </div>
  )
}

export default MarqueeAchievements