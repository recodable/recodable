import * as React from 'react'
import Dotify from './Dotify'

function SectionTitle({ children, className = '', centered }) {
  return (
    <h2
      className={`py-4 text-3xl sm:text-5xl font-semibold text-gray-700 rounded-lg ${className}`}
      style={{ fontFamily: "'Roboto', sans-serif" }}
    >
      <Dotify className={centered ? 'justify-center' : ''} size={2.5}>
        {children}
      </Dotify>
    </h2>
  )
}

export default SectionTitle
