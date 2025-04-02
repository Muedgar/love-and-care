'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { getHeroContentEnglish } from '@/lib';
import Image from 'next/image';
import { Flex, Text, Button, Dialog } from "@radix-ui/themes";
import { BookAIcon, Dot } from 'lucide-react';

const Hero = () => {
  const sliderRef = useRef(null);
  const sliderContainerRef = useRef(null);
  const navDotsContainerRef = useRef(null);
  const slidesRef = useRef([]);
  const autoSlideTimerRef = useRef(null);

  // State variables
  const [slideCount, setSlideCount] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(null);
  const [slideWidth, setSlideWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragged, setDragged] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragStartPos, setDragStartPos] = useState(0);
  const [slideAnimations, setSlideAnimations] = useState([]);
  const [autoSlideActive, setAutoSlideActive] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const slides = getHeroContentEnglish();

  // Function to start the auto slide timer
  const startAutoSlideTimer = () => {
    clearAutoSlideTimer(); // Clear any existing timer
    
    autoSlideTimerRef.current = setTimeout(() => {
      const nextIndex = (currentIndex + 1) % slideCount;
      navigateToSlide(nextIndex);
      setAutoSlideActive(true);
    }, 5000); // Change slide every 5 seconds
  };

  // Function to clear the auto slide timer
  const clearAutoSlideTimer = () => {
    if (autoSlideTimerRef.current) {
      clearTimeout(autoSlideTimerRef.current);
      autoSlideTimerRef.current = null;
    }
  };

  // Function to reset auto slide timer (used after user interactions)
  const resetAutoSlideTimer = () => {
    setAutoSlideActive(false);
    clearAutoSlideTimer();
    startAutoSlideTimer();
  };

  useEffect(() => {
    // Check if we're on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
      setSlideWidth(window.innerWidth);
    };
    
    // Set initial values
    checkMobile();
    setSlideCount(slides.length);
    
    // Create animation timelines for each slide
    const animations = slides.map(() => gsap.timeline({ paused: true }));
    setSlideAnimations(animations);
    
    // Init animations
    setupSlideAnimations();
    
    // Set initial position
    gsap.set(sliderRef.current, { x: 0 });
    
    // Handle window resize
    const handleResize = () => {
      checkMobile();
      gsap.set(sliderRef.current, { x: -currentIndex * window.innerWidth });
    };

    window.addEventListener('resize', handleResize);
    
    // Prevent context menu on long press
    const preventContextMenu = (e) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };
    
    document.addEventListener('contextmenu', preventContextMenu);
    
    // Start auto slide immediately on page load
    startAutoSlideTimer();
    setAutoSlideActive(true);
    
    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('contextmenu', preventContextMenu);
      clearAutoSlideTimer();
    };
  }, []);

  // Update auto slide timer when current index changes
  useEffect(() => {
    if (autoSlideActive) {
      startAutoSlideTimer();
    }
  }, [currentIndex, autoSlideActive]);

  // Setup slide animations
  const setupSlideAnimations = () => {
    slidesRef.current.forEach((slide, index) => {
      if (!slide) return;
      
      const slideNumber = slide.querySelector('.slide-number');
      if (!slideNumber || !slideAnimations[index]) return;
      
      // Create the animation timeline for this slide
      slideAnimations[index]
        .to(slideNumber, { rotation: 0, duration: 0 }) // Reset rotation
        .to(slideNumber, { rotation: 360, duration: 1.5, ease: "elastic.out(1, 0.3)" }, 1); // Wait 1s, then rotate
    });
    
    // Trigger animation for first slide
    triggerSlideAnimation(0);
  };

  // Trigger animation for a specific slide
  const triggerSlideAnimation = (index) => {
    if (slideAnimations[index]) {
      slideAnimations[index].restart();
    }
  };

  // Navigate to specific slide
  const navigateToSlide = (index) => {
    if (index >= 0 && index < slideCount) {
      setPreviousIndex(currentIndex);
      setCurrentIndex(index);
      
      // Animate to the target slide
      gsap.to(sliderRef.current, {
        x: -index * slideWidth,
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => {
          // Trigger animation for the current slide
          triggerSlideAnimation(index);
        }
      });
    }
  };

  const getPositionX = (event) => {
    // Make sure event is defined
    if (!event) return 0;
    return event.type && event.type.includes('mouse') 
      ? event.clientX 
      : (event.touches && event.touches[0] ? event.touches[0].clientX : 0);
  };

  const dragStart = (event) => {
    if (isDragging) return;
    
    // Reset auto slide when user interaction occurs
    resetAutoSlideTimer();
    
    // Prevent default drag behavior which might show ghost images
    if (event.preventDefault) {
      event.preventDefault();
    }
    
    // For image drag prevention
    if (event.target && event.target.tagName === 'IMG') {
      event.target.ondragstart = () => false;
    }
    
    setIsDragging(true);
    setDragged(false);
    setStartX(getPositionX(event));
    
    // Get current position
    const currentPos = gsap.getProperty(sliderRef.current, "x");
    setDragStartPos(currentPos);
    
    // Kill any existing animations
    gsap.killTweensOf(sliderRef.current);
    
    if (sliderContainerRef.current) {
      sliderContainerRef.current.style.cursor = 'grabbing';
    }
    
    // Prevent default to avoid page scrolling on mobile
    if (event.cancelable) {
      event.preventDefault();
    }
  };

  const drag = (event) => {
    if (!isDragging || !event) return;
  
    // Prevent default drag behavior
    if (event.preventDefault && event.cancelable) {
      event.preventDefault();
    }
  
    // Calculate how far the pointer has moved
    const currentX = getPositionX(event);
    const deltaX = currentX - startX;
  
    // Apply constraints based on the current slide
    if (currentIndex === 0 && deltaX > 0) {
      // First slide - restrict leftward movement
      gsap.set(sliderRef.current, { x: dragStartPos + (deltaX * 0.2) }); // Apply resistance
    } else if (currentIndex === slideCount - 1 && deltaX < 0) {
      // Last slide - restrict rightward movement
      gsap.set(sliderRef.current, { x: dragStartPos + (deltaX * 0.2) }); // Apply resistance
    } else {
      // Normal movement for middle slides or allowed directions
      gsap.set(sliderRef.current, { x: dragStartPos + deltaX });
    }
  
    // If moved more than 5px, consider it a drag
    if (Math.abs(deltaX) > 5) {
      setDragged(true);
    }
  };

  const dragEnd = (event) => {
    if (!isDragging) return;
    
    // Reset cursor and state
    if (sliderContainerRef.current) {
      sliderContainerRef.current.style.cursor = 'grab';
    }
  
    // Safely get end position
    const endX = event ? getPositionX(event) : startX;
    const deltaX = endX - startX;
  
    // Threshold for slide change (20% of slide width)
    const threshold = slideWidth * 0.2;
  
    let newIndex = currentIndex;
  
    if (Math.abs(deltaX) > threshold && dragged) {
      if (deltaX > 0 && currentIndex > 0) {
        // Move to the previous slide
        newIndex = currentIndex - 1;
      } else if (deltaX < 0 && currentIndex < slideCount - 1) {
        // Move to the next slide
        newIndex = currentIndex + 1;
      }
    }
  
    // Always animate to a complete slide (fixes stuck-in-middle issue)
    gsap.to(sliderRef.current, {
      x: -newIndex * slideWidth,
      duration: 0.5,
      ease: "power2.out",
      onComplete: () => {
        if (newIndex !== currentIndex) {
          triggerSlideAnimation(newIndex);
        }
      },
    });
  
    // Update state
    setPreviousIndex(currentIndex);
    setCurrentIndex(newIndex);
    setIsDragging(false);
  };

  // Add touch and mouse event handlers
  useEffect(() => {
    const container = sliderContainerRef.current;
    if (!container) return;
  
    // Mouse events
    const handleMouseDown = (e) => dragStart(e);
    const handleMouseMove = (e) => drag(e);
    const handleMouseUp = (e) => dragEnd(e);
    const handleMouseLeave = (e) => {
      if (isDragging) dragEnd(e);
    };
  
    // Touch events
    const handleTouchStart = (e) => dragStart(e);
    const handleTouchMove = (e) => drag(e);
    const handleTouchEnd = (e) => dragEnd(e);
  
    // Add listeners
    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('touchstart', handleTouchStart, { passive: false });
  
    // Add document-level event listeners for better drag tracking
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);
    document.addEventListener('touchcancel', handleTouchEnd);
    container.addEventListener('mouseleave', handleMouseLeave);
  
    // Cleanup
    return () => {
      container.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
      document.removeEventListener('touchcancel', handleTouchEnd);
    };
  }, [isDragging, slideWidth]);

  // Add CSS to prevent Image dragging
  useEffect(() => {
    // Apply the style to prevent image dragging
    const style = document.createElement('style');
    style.textContent = `
      .slider-container img {
        -webkit-user-drag: none;
        -khtml-user-drag: none;
        -moz-user-drag: none;
        -o-user-drag: none;
        user-drag: none;
        pointer-events: none;
      }
      
      /* Custom styles to ensure nav dots are visible */
      .navigation {
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 12px;
        z-index: 999;
        padding: 10px 15px;
        border-radius: 30px;
        background-color: rgba(0, 0, 0, 0.5);
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
      }
      
      .nav-dot {
        width: 15px;
        height: 15px;
        background-color: rgba(255, 255, 255, 0.6);
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
      
      .nav-dot.active {
        background-color: #ffffff;
        transform: scale(1.2);
        box-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
      }
      
      @media (max-width: 768px) {
        .navigation {
          bottom: 25px;
          padding: 8px 12px;
          background-color: rgba(0, 0, 0, 0.7);
        }
        
        .nav-dot {
          width: 14px;
          height: 14px;
          margin: 0 4px;
        }
      }
      
      @media (max-width: 480px) {
        .navigation {
          bottom: 20px;
          max-width: 90%;
          flex-wrap: wrap;
          justify-content: center;
        }
        
        .nav-dot {
          width: 12px;
          height: 12px;
          margin: 4px;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="relative">
      <div className="slider-container select-none" ref={sliderContainerRef}>
        <div className="slider" ref={sliderRef}>
          {slides.map((slide, index) => (
            <div 
              className="slide relative" 
              key={index}
              ref={el => slidesRef.current[index] = el}
              style={{ background: slide.background }}
              draggable="false"
            >
              <Image 
                alt='slide background' 
                className='w-full h-full absolute top-0 left-0 object-cover' 
                src={slide.background}
                draggable="false"
                onDragStart={(e) => e.preventDefault()}
              />
              <div className='herogradient absolute top-0 left-0 w-full h-full z-10'></div>
              {/* content */}
              <div className='w-full h-[80vh] overflow-hidden z-20 pl-10 pr-10 pt-30'>
                {/* part 1 */}
                <Flex direction="column" gap="2">
                  <div className="w-fit h-fit bg-black pl-2 pr-2">
                  <p className="mb-2 text-sm sm:text-xs md:text-xs lg:text-[.6em] text-white font-regular">
                        LOVE AND CARE FOR LIFE ORGANIZATION
                    </p>
                  </div>
                  <div className="w-fit h-fit bg-black pl-2 pr-2">
                  
                    <p className="text-sm sm:text-xs md:text-xs lg:text-[.6em] text-white font-regular">
                        {slide.partone.title}
                    </p>
                  </div>
                  <div className="w-fit h-fit bg-black pl-2 pr-2 mt-2 md:mt-3 lg:mt-4">
                    <p className="text-xs sm:text-xs md:text-[.45em] lg:text-[.38em] text-white font-thin flex-wrap">
                        {slide.partone.content}
                    </p>
                  </div>
                  <div className='w-fit h-fit pl-2 pr-2 mt-4'>
                      <Dialog.Root>
                        <Dialog.Trigger>
                          <Button size="3" color='gold' variant='classic'>Read More <BookAIcon /></Button>
                        </Dialog.Trigger>

                        <Dialog.Content maxWidth="450px">
                          <Dialog.Title>{slide.parttwo.title}</Dialog.Title>
                          {slide.parttwo.content.map((item, key) => (
                              <Dialog.Description key={key} size="2" mb="4" className='flex flex-row'>
                                  <Dot></Dot>
                                  {item}
                              </Dialog.Description>
                          ))}

                          <Flex gap="3" mt="4" justify="end">
                            <Dialog.Close>
                              <Button variant="classic" color="gold">
                                Close
                              </Button>
                            </Dialog.Close>
                          </Flex>
                        </Dialog.Content>
                      </Dialog.Root>
                  </div>
                </Flex>
                {/* part 2 */}
                <div>
                    <div></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation dots with improved mobile visibility */}
      <div className="navigation" ref={navDotsContainerRef}>
        {slides.map((_, index) => (
          <div 
            key={index}
            className={`nav-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => {
              navigateToSlide(index);
              resetAutoSlideTimer(); // Reset timer on manual navigation
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;