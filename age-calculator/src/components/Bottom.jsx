import React from 'react'
import BottomParts from './BottomParts'

export function Bottom({years, months, days}){
  return (
    <div className='bottom'>
      <BottomParts name="years" number={years}/>
      <BottomParts name="months" number={months}/>
      <BottomParts name="days" number={days}/>
    </div>
  )
}

export default Bottom