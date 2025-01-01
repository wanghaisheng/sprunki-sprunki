import React from "react";

interface AccordionProps {
  title: string;
  id: string;
  active: boolean; // Add active to the props
  onToggle: () => void; // Function to handle state toggle from parent
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  id,
  active,
  onToggle,
  children,
}) => {
  return (
    <div className="border-b">
      <button
        onClick={onToggle}
        className="w-full text-left py-3 px-4 bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none"
        aria-expanded={active}
        aria-controls={id}
      >
        <h3 className="text-lg font-semibold">{title}</h3>
      </button>
      {active && (
        <div
          id={id}
          className="py-2 px-4 text-gray-600 bg-gray-50"
          role="region"
          aria-labelledby={id}
        >
          <p>{children}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
