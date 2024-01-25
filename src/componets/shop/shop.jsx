import React from 'react'
import './shop.css'
import Button from '../button/button'

const Shop = () => {
  return (
    <div className='shop__content'>
        <p className='shop__text'>Umumiy narx: $20000</p>
        <Button title={"checkout"} type={'checkout'} />
    </div>
  )
}

export default Shop