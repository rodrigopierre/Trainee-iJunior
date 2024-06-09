import React from 'react'
import './Input.css'
import '../data_manager/manager'
import { update_data } from '../data_manager/manager'

function Input({ name, placeholder, childID }) {
  function clearError() {
    //dia
    document.getElementById('DAY').style.color = 'hsl(0, 0%, 8%)';
    document.getElementById('DD').style.border = '1px solid #dadada';
    document.getElementById('dia').innerText = '';
    //mes
    document.getElementById('MONTH').style.color = 'hsl(0, 0%, 8%)';
    document.getElementById('MM').style.border = '1px solid #dadada';
    document.getElementById('mes').innerText = '';
    //ano
    document.getElementById('YEAR').style.color = 'hsl(0, 0%, 8%)';
    document.getElementById('YYYY').style.border = '1px solid #dadada';
    document.getElementById('ano').innerText = '';
  }
  return (
    <div className='inputs'>
        <p id={name}>{name}</p>
        <input onClick={clearError} type="text" id={placeholder} placeholder={placeholder} onChange={evt => update_data(evt, name)}/>
        <h2 id={childID}></h2>
    </div>
  )
}

export default Input