import React from 'react'

const Error = ({error}) => {
  if (!error) return null
  return (
    <p style={{color: '#f31', margin: '.5rem 0 0 0', fontSize: '.875rem', position: 'relative', top: '0px'}}>{error}</p>
  )
}

export default Error
