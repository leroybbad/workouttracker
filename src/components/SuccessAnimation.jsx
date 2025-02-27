// src/components/SuccessAnimation.jsx
import { useState, useEffect } from 'react';

export const SuccessAnimation = ({ show, onComplete }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    if (show) {
      setIsAnimating(true);
      
      // Animation lasts for 2.5 seconds, then call onComplete
      const timer = setTimeout(() => {
        setIsAnimating(false);
        if (onComplete) onComplete();
      }, 2500);
      
      return () => clearTimeout(timer);
    }
  }, [show, onComplete]);
  
  if (!show && !isAnimating) return null;
  
  return (
    <div className="success-animation-container">
      <div className="sunset-background">
        {/* Sun */}
        <div className="sun"></div>
        
        {/* Rays */}
        {Array.from({ length: 12 }).map((_, index) => (
          <div 
            key={index} 
            className="sun-ray" 
            style={{ 
              transform: `rotate(${index * 30}deg)`,
              animationDelay: `${index * 0.1}s` 
            }}
          ></div>
        ))}
        
        {/* Success Message */}
        <div className="success-message">
          Great job!
        </div>
      </div>
    </div>
  );
};