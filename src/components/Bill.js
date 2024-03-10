import React from 'react'

export default function Bill({billAmount, onChangeBillAmount}) {
  return (
    <div className='input'>
      <p>How much was the bill?</p>
      <input type="number"  value={billAmount} onChange={onChangeBillAmount} />
    </div>
  )
}
