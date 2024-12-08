import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (scrollPosition / documentHeight) * 100;

      setScrollPercent(scrollProgress);

      // Show button after scrolling down 200px
      if (scrollPosition > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Compute border width based on scroll position (0% to 100%)
  const borderWidth = `${scrollPercent}%`; // Border width increases from 0% to 100% based on scroll

  return (
    <div className='scrool'>
      {isVisible && (
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: '#fff', // Background remains white
            color: '#007BFF', // Text color is blue
            border: `1px solid #007BFF`, // Static border color (blue)
            borderRadius: '50%',
            padding: '10px',
            zIndex:9999999,
            fontSize: '20px',
            cursor: 'pointer',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '50px', // Set initial size for the button
            height: '50px', // Set initial size for the button
            transition: 'border-width 0.3s ease', // Smooth transition for border width
            borderWidth: borderWidth, // Dynamically change the border width
          }}
          aria-label="Scroll to top"
        >
          ↑
         <a href="#home"></a></button>
      )}
    </div>
  );
};

export default ScrollToTopButton;




