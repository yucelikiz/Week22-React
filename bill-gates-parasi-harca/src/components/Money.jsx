import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../App';

const Money = () => {

  const {money} = useContext(AppContext)

  function remainder(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  return (
    <div className='money-container'>
        <h2 className='money'>${remainder(money)}</h2>
    </div>
  )
}

export default Money;