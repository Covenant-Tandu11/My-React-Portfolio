import { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const mouseDown = () => setCursorVariant('click');
    const mouseUp = () => setCursorVariant('default');
    
    // Add hover effect for clickable elements
    const handleLinkHoverEnter = () => setCursorVariant('hover');
    const handleLinkHoverLeave = () => setCursorVariant('default');

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mousedown', mouseDown);
    window.addEventListener('mouseup', mouseUp);

    // Select all clickable elements to add hover effects
    const clickables = document.querySelectorAll('a, button, input, textarea, [role="button"]');
    clickables.forEach(el => {
      el.addEventListener('mouseenter', handleLinkHoverEnter);
      el.addEventListener('mouseleave', handleLinkHoverLeave);
    });

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mousedown', mouseDown);
      window.removeEventListener('mouseup', mouseUp);
      clickables.forEach(el => {
        el.removeEventListener('mouseenter', handleLinkHoverEnter);
        el.removeEventListener('mouseleave', handleLinkHoverLeave);
      });
    };
  }, []);

  // Variants for animation
  const variants = {
    default: { 
      x: mousePosition.x - 20, 
      y: mousePosition.y - 20, 
      height: 40, 
      width: 40, 
      backgroundColor: 'rgba(89, 81, 208, 0.05)', 
      borderColor: '#5951D0',
      boxShadow: '0 0 15px rgba(89, 81, 208, 0.3)'
    },
    hover: { 
      x: mousePosition.x - 30, 
      y: mousePosition.y - 30, 
      height: 60, 
      width: 60, 
      backgroundColor: 'rgba(89, 81, 208, 0.15)', 
      borderColor: '#7c73f0',
      boxShadow: '0 0 25px rgba(89, 81, 208, 0.5)'
    },
    click: { 
      x: mousePosition.x - 15, 
      y: mousePosition.y - 15, 
      height: 30, 
      width: 30, 
      backgroundColor: '#5951D0', 
      borderColor: 'transparent',
      boxShadow: '0 0 10px rgba(89, 81, 208, 0.8)'
    }
  };

  const currentVariant = variants[cursorVariant];

  return (
    <>
      {/* The Outer Circle */}
      <div 
        className="fixed top-0 left-0 rounded-full border-2 pointer-events-none z-[9999] hidden md:block transition-all duration-150 ease-out"
        style={{
          transform: `translate(${currentVariant.x}px, ${currentVariant.y}px)`,
          height: currentVariant.height,
          width: currentVariant.width,
          borderColor: currentVariant.borderColor,
          backgroundColor: currentVariant.backgroundColor,
          boxShadow: currentVariant.boxShadow
        }}
      />
      
      {/* The Inner Dot */}
      <div 
        className="fixed top-0 left-0 rounded-full bg-[#5951D0] pointer-events-none z-[9999] hidden md:block shadow-[0_0_10px_rgba(89,81,208,0.8)]"
        style={{
          transform: `translate(${mousePosition.x - 4}px, ${mousePosition.y - 4}px)`,
          height: 8,
          width: 8
        }}
      />
    </>
  );
};

export default CustomCursor;