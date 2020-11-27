import * as React from 'react';

const themes = {
  primary: 'bg-primary hover:bg-primary focus:ring-primary',
  accent: 'bg-accent-600 hover:bg-accent-700 focus:ring-accent-500',
  DEFAULT: 'bg-gray-600 hover:bg-gray-700 focus:ring-gray-500',
};

export default function Button({ className = '', theme = null, children }) {
  return (
    <button
      className={`inline-flex items-center px-4 py-2 border border-transparent text-base font-semibold rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 ${
        themes[theme || 'DEFAULT']
      } ${className}`}
    >
      {children}
    </button>
  );
}
