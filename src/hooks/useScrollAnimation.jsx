import { useEffect, useRef } from 'react';

export const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('scroll-hidden');
            entry.target.classList.add(options.animation || 'animate-fade-in-up');
            
            // Add delay if specified
            if (options.delay) {
              entry.target.style.animationDelay = `${options.delay}ms`;
            }
            
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      ref.current.classList.add('scroll-hidden');
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [options]);

  return ref;
};