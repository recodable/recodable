import * as React from 'react';

export default function Button({ className = '', children }) {
  return (
    <button
      className={`inline-flex items-center px-4 py-2 border border-transparent text-base font-semibold rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ${className}`}
    >
      {children}
    </button>
  );
}
