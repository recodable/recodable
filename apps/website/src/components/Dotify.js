import * as React from 'react';

function Dotify({ children, size = 15, className = '' }) {
  return (
    <span className={`flex items-baseline ${className}`}>
      {children}

      <span
        style={{
          width: `${size}px`,
          height: `${size}px`,
          marginLeft: `${Math.round(size / 10)}px`,
        }}
        className="bg-gradient-to-r from-green-300 to-green-400 rounded-full"
      />
    </span>
  );
}

export default Dotify;
