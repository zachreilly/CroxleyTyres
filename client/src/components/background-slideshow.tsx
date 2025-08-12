import { useState, useEffect } from 'react';
import img1 from '@assets/IMG_3342_1755015352143.jpeg';
import img2 from '@assets/IMG_3343_1755015352143.jpeg';
import img3 from '@assets/IMG_3344_1755015352143.jpeg';
import img4 from '@assets/IMG_3349_1755015352143.jpeg';

const backgroundImages = [img1, img2, img3, img4];

interface BackgroundSlideshowProps {
  children: React.ReactNode;
  className?: string;
  interval?: number;
}

export default function BackgroundSlideshow({ 
  children, 
  className = "", 
  interval = 5000 
}: BackgroundSlideshowProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Background Images */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Croxley Tyres workshop ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Slideshow Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-automotive-yellow' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}