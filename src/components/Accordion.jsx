// src/components/Accordion.jsx
import { useState } from 'react';

export const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion ${isOpen ? 'open' : ''}`}>
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>{title}</h3>
        <span className="accordion-icon">{isOpen ? '−' : '+'}</span>
      </div>
      
      {isOpen && (
        <div className="accordion-content">
          {children}
        </div>
      )}
    </div>
  );
};