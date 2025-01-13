import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const trailRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cursor = cursorRef.current;
      const trail = trailRef.current;

      if (cursor && trail) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        cursor.style.left = `${mouseX - 6}px`; 
        cursor.style.top = `${mouseY - 6}px`; 

        trail.style.left = `${mouseX - 16}px`; 
        trail.style.top = `${mouseY - 16}px`;  
      }
    };

    
    window.addEventListener('mousemove', handleMouseMove);

    
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <>
     
      <div
        ref={cursorRef}
        className="fixed z-50 w-3 h-3 bg-green-600 rounded-full pointer-events-none animate-pulse"
        style={{
          position: 'fixed',
          transition: 'left 0.1s linear, top 0.1s linear',
        }}
      ></div>

    
      <div
        ref={trailRef}
        className="fixed z-40 w-8 h-8 border-2 border-green-500 rounded-full pointer-events-none animate-pulse-slow"
        style={{
          position: 'fixed', 
          transition: 'left 0.15s ease-out, top 0.15s ease-out',
        }}
      ></div>
    </>
  );
};

export default CustomCursor;