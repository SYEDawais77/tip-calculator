import React from 'react'

export default function Reset({handleReset}) {
  return (
    <div>
      <button className='btn' onClick={handleReset}>Reset</button>
    </div>
  )
}
