import React from 'react'
import Input from './Input'
import './Top.css'
import { send_button } from '../data_manager/manager'


function Top({changefunction}){
  return (
    <div className='top'>
        <div className='top-inputs'>
            <Input name="DAY" placeholder="DD" childID="dia"/>
            <Input name="MONTH" placeholder="MM" childID="mes"/>
            <Input name="YEAR" placeholder="YYYY" childID="ano"/>
        </div>
        <div className='btn' onClick={() => changefunction(send_button())}>
          <button>
          <span className="material-icons">south</span>
          </button>
        </div>
    </div>
  )
}

export default Top