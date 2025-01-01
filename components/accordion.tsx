// components/accordion.tsx
import { useState } from "react";

interface AccordionProps {
  title: string;
  id: string;
  active?: boolean;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, id, active = false, children }) => {
  const [isOpen, setIsOpen] = useState(active);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <button
        className="accordion-header w-full text-left p-4 border-b-2"
        onClick={toggleAccordion}
      >
        <h3 className="font-semibold">{title}</h3>
      </button>
      {isOpen && (
        <div id={id} className="accordion-body p-4">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
