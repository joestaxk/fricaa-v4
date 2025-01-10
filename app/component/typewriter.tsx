'use client'

import React, { useState, useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useTypewriter = (text: string = '', speed: number = 50) => {
  const [displayText, setDisplayText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const safeText = text?.toString() || '';
    
    setDisplayText('');
    setIsTypingComplete(false);

    if (!safeText) return;

    let currentIndex = 0;
    
    // Store the interval in the ref
    intervalRef.current = setInterval(() => {
      if (currentIndex < safeText.length) {
        setDisplayText(safeText.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        setIsTypingComplete(true);
      }
    }, speed);

    // Cleanup function
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [text, speed]);

  return { displayText, isTypingComplete };
};

export const AnimatedTypewriterText = ({ 
  text, 
  speed = 50, 
  className = "" 
}: { 
  text?: string | number, 
  speed?: number, 
  className?: string 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  
  const safeText = text?.toString() || '';
  const { displayText } = useTypewriter(safeText, speed);

  useGSAP(() => {
    if (!containerRef.current || !textRef.current) return;

    const animation = gsap.fromTo(
      textRef.current,
      { 
        opacity: 0, 
        y: 20,
        clipPath: 'inset(0 100% 0 0)' 
      },
      {
        opacity: 1,
        y: 0,
        clipPath: 'inset(0 0% 0 0)',
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`${className} relative overflow-hidden min-h-[1em]`}
    >
      <span 
        ref={textRef} 
        className="inline-block typing-effect"
      >
        {displayText}
      </span>
    </div>
  );
};