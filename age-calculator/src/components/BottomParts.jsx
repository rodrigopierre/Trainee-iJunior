import React from 'react'
import './BottomParts.css'

const BottomParts = ({ name, number }) => {
  return (
    <div className='bottom-parts'>
        <h1>{number}</h1>
        <h2>{name}</h2>
    </div>
  )
}

export default BottomParts