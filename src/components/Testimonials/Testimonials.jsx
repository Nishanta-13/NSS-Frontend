import React, { useState, useEffect, useCallback, useRef } from "react";

const TestimonialSlider = () => {
  const testimonials = [
    {
      id: 1,
      name: "Abhijit Das",
      role: "ex-NSS President",
      image: "https://res.cloudinary.com/dpkuns9g7/image/upload/v1773154770/Screenshot_2026-03-10_at_8.28.51_PM_trvfnx.png",
      content: "What makes NSS truly special are the people . The team feels like a family—deeply supportive and always there for each other . The late-night full-team meetings, gossiping with friends, teaching young children, organizing drives, and attending movie screenings are some of the best moments I have experienced on campus . NSS taught me how to serve society while truly enjoying the journey and creating friendships that will last forever."
    },
    {
      id: 2,
      name: "Pranto Das",
      role: "ex-NSS President",
      image: "https://res.cloudinary.com/dpkuns9g7/image/upload/v1773156989/Pranto_baqy0n.jpg",
      content: "Joining NSS was the best decision of my college life! The community service activities helped me develop leadership skills while making a real difference in society. The bonds I've formed here are priceless . Every moment spent with the team has been filled with learning, laughter, and meaningful connections that extend beyond the campus walls."
    },
    {
      id: 3,
      name: "Jaan Baishya",
      role: "ex-NSS-GS",
      image: "https://res.cloudinary.com/dpkuns9g7/image/upload/v1773155274/Screenshot_2026-03-10_at_8.37.29_PM_dykwux.png",
      content: "The NSS journey transformed my perspective on social responsibility. From organizing blood donation camps to environmental drives, every moment taught me the value of selfless service and teamwork . The experiences shaped my character and showed me the power of collective effort in creating positive change in our community."
    },
    {
      id: 4,
      name: "Aman Gupta",
      role: "ex-NSS-Volunteer",
      image: "https://res.cloudinary.com/dpkuns9g7/image/upload/v1773155580/Screenshot_2026-03-10_at_8.42.42_PM_kuwp9n.png",
      content: "Being part of NSS helped me discover my passion for event management. The teamwork and coordination required for our social initiatives gave me practical experience that textbooks couldn't provide! The challenges we faced together only strengthened our bond and taught us valuable life lessons about perseverance and collaboration."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  
  // Touch swipe state
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [touchMove, setTouchMove] = useState(null);
  
  const AUTO_PLAY_INTERVAL = 5000;
  const sliderRef = useRef(null);

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);

    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, testimonials.length]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, testimonials.length]);

  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex) return;

    setIsTransitioning(true);
    setCurrentIndex(index);

    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Touch swipe handlers
  const handleTouchStart = (e) => {
    if (!isMobile) return;
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(null);
    setTouchMove(null);
  };

  const handleTouchMove = (e) => {
    if (!isMobile || !touchStart) return;
    const currentTouch = e.targetTouches[0].clientX;
    setTouchMove(currentTouch);
  };

  const handleTouchEnd = () => {
    if (!isMobile || !touchStart || !touchMove) return;
    
    const distance = touchStart - touchMove;
    const minSwipeDistance = 30; // Reduced minimum distance for better sensitivity
    
    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        // Swipe left - next slide
        nextSlide();
      } else {
        // Swipe right - previous slide
        prevSlide();
      }
    }
    
    // Reset touch states
    setTouchStart(null);
    setTouchEnd(null);
    setTouchMove(null);
  };

  // Auto-play effect
  useEffect(() => {
    if (!autoPlay || isMobile) return;

    const interval = setInterval(() => {
      nextSlide();
    }, AUTO_PLAY_INTERVAL);

    return () => clearInterval(interval);
  }, [autoPlay, nextSlide, isMobile]);

  // Calculate swipe offset for visual feedback
  const getSwipeOffset = () => {
    if (!touchStart || !touchMove) return 0;
    
    const offset = touchMove - touchStart;
    // Limit the offset to prevent excessive movement
    return Math.max(Math.min(offset, 100), -100);
  };

  // Get card position - simplified for mobile (no overlap)
  const getCardPosition = (index) => {
    const total = testimonials.length;
    const relativeIndex = (index - currentIndex + total) % total;

    if (isMobile) {
      // Mobile layout - only show active card with swipe offset
      if (relativeIndex === 0) {
        // Active card - centered with swipe offset
        const swipeOffset = getSwipeOffset();
        return {
          zIndex: 40,
          transform: `translateX(${swipeOffset}px) scale(1)`,
          opacity: 1,
          filter: 'none',
          transition: touchStart ? 'none' : 'transform 0.5s ease-out' // Disable transition during swipe
        };
      } else {
        // Hidden cards - completely off screen
        const direction = relativeIndex <= total / 2 ? 100 : -100;
        return {
          zIndex: 10,
          transform: `translateX(${direction}%) scale(0.9)`,
          opacity: 0,
          filter: 'blur(2px)',
          pointerEvents: 'none',
          transition: 'transform 0.5s ease-out, opacity 0.5s ease-out'
        };
      }
    }

    // Desktop layout - overlapping cards (unchanged)
    switch (relativeIndex) {
      case 0:
        return {
          zIndex: 40,
          transform: 'translateX(0) scale(1)',
          opacity: 1,
          filter: 'none'
        };
      case 1: // Next card
        return {
          zIndex: 30,
          transform: 'translateX(100px) scale(0.9)',
          opacity: 0.8,
          filter: 'blur(1px)'
        };
      case 2: // Second next card
        return {
          zIndex: 20,
          transform: 'translateX(180px) scale(0.8)',
          opacity: 0.6,
          filter: 'blur(2px)'
        };
      case total - 1: // Previous card
        return {
          zIndex: 30,
          transform: 'translateX(-100px) scale(0.9)',
          opacity: 0.8,
          filter: 'blur(1px)'
        };
      case total - 2:
        return {
          zIndex: 20,
          transform: 'translateX(-180px) scale(0.8)',
          opacity: 0.6,
          filter: 'blur(2px)'
        };
      default: // Hidden cards
        return {
          zIndex: 10,
          transform: 'translateX(250px) scale(0.7)',
          opacity: 0,
          filter: 'blur(3px)'
        };
    }
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto py-8 md:py-16 px-4 md:px-6">
      {/* Header */}
      <div className="text-center mb-8 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 px-4">
          Voices from Our NSS Family
        </h2>
        <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
          Discover the inspiring stories and experiences that define our National Service Scheme community
        </p>
        <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 md:mt-6 rounded-full"></div>
      </div>

      {/* Slider Container with Arrow Buttons */}
      <div className="relative">
        {/* Previous Arrow Button - Hidden on mobile */}
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-50 bg-white/90 backdrop-blur-sm rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white hover:scale-110 border border-gray-200 -ml-6 md:-ml-8 ${isMobile ? 'hidden' : 'flex'}`}
          aria-label="Previous testimonial"
        >
          <svg className="w-6 h-6 md:w-8 md:h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Slider Content */}
        <div
          ref={sliderRef}
          className="relative h-[500px] md:h-[500px] flex items-center justify-center overflow-hidden"
          onMouseEnter={() => !isMobile && setAutoPlay(false)}
          onMouseLeave={() => !isMobile && setAutoPlay(true)}
          // Touch events for mobile swipe
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {testimonials.map((testimonial, index) => {
            const position = getCardPosition(index);
            const isActive = index === currentIndex;

            return (
              <div
                key={testimonial.id}
                className={`absolute w-[90vw] max-w-[320px] md:max-w-none md:w-[800px] h-[420px] md:h-[380px] bg-white rounded-3xl shadow-xl md:shadow-2xl transition-all duration-500 ease-out ${isMobile ? 'cursor-grab active:cursor-grabbing' : 'cursor-pointer'} overflow-hidden ${isActive ? 'hover:shadow-2xl md:hover:shadow-3xl' : 'hover:shadow-lg md:hover:shadow-xl'
                  }`}
                style={position}
                onClick={() => !isMobile && !isActive && goToSlide(index)}
              >
                <div className={`flex flex-col md:flex-row h-full ${isMobile ? 'items-center' : ''}`}>
                  {/* Image Section */}
                  <div className={`${isMobile ? 'w-full h-48' : 'w-2/5 h-full'} relative`}>
                    <div className="absolute top-4 right-4 md:top-6 md:right-6 text-2xl md:text-4xl text-white/30">❝</div>
                    <div className={`absolute inset-0 overflow-hidden ${isMobile ? 'rounded-t-3xl' : 'rounded-l-3xl'}`}>
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div
                    className={`${isMobile ? 'w-full h-52 p-4' : 'w-3/5 p-6 md:p-8'
                      } flex flex-col justify-center relative ${isMobile ? 'rounded-b-3xl' : 'rounded-r-3xl'
                      } bg-blue-800 text-white`}
                  >
                    
                    <div className="absolute top-4 md:top-6 md:right-6 text-2xl md:text-4xl text-white/40">
                      ❝
                    </div>

                    <div
                      className={`relative z-10 transition-all duration-500 ease-out ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                        }`}
                    >
                      <p className="text-white text-sm md:text-lg leading-relaxed mb-4 md:mb-6 font-light line-clamp-4 md:line-clamp-5">
                        {testimonial.content}
                      </p>
                    </div>

                    <div className="">
                      <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">
                        {testimonial.name}
                      </h3>
                      <p className="text-white/80 text-xs md:text-sm font-medium">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Next Arrow Button - Hidden on mobile */}
        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-50 bg-white/90 backdrop-blur-sm rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white hover:scale-110 border border-gray-200 -mr-6 md:-mr-8 ${isMobile ? 'hidden' : 'flex'}`}
          aria-label="Next testimonial"
        >
          <svg className="w-6 h-6 md:w-8 md:h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-8 md:mt-12">
        <div className="flex space-x-3 md:space-x-4 bg-white/80 backdrop-blur-sm rounded-2xl px-4 py-2 md:px-6 md:py-3 shadow-lg">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${index === currentIndex
                  ? 'bg-blue-600 scale-125 shadow-lg'
                  : 'bg-gray-300 hover:bg-gray-400'
                } ${isTransitioning ? 'cursor-not-allowed' : 'cursor-pointer'}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Mobile Swipe Instructions */}
      {isMobile && (
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500 flex items-center justify-center space-x-2">
            <span>Swipe to navigate</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
          </p>
        </div>
      )}
    </div>
  );
};

// Add CSS for line clamping
const styles = `
@media (max-width: 768px) {
  .line-clamp-4 {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
`;

// Add styles to document
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

export default TestimonialSlider;