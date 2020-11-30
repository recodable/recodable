import * as React from 'react';

// we have to list all classes because of how Tailwind.css purge feature works
// more info: https://tailwindcss.com/docs/optimizing-for-production#writing-purgeable-html
const sizes = {
  1: 'w-1 h-1 ml-0.5',
  2: 'w-2 h-2 ml-0.5',
  2.5: 'sm:w-2.5 sm:h-2.5 w-1.5 h-1.5 ml-0.5',
  3: 'w-3 h-3 ml-0.5',
  4: 'sm:w-4 sm:h-4 ml-1 w-2.5 h-2.5',
};

function Dot({ size }) {
  return (
    <span
      className={`bg-gradient-to-r from-green-300 to-green-400 rounded-full ${sizes[size]}`}
    />
  );
}

function Dotify({ children, size = 4, className = '' }) {
  return (
    <span className={`flex items-baseline ${className}`}>
      {children}

      <Dot size={size} />
    </span>
  );
}

export default Dotify;
export { Dot, sizes };
