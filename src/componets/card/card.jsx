import React from 'react'
import "./card.css"
import Button from '../button/button'

const Card = props => {
    const {car, onAddItem, onRemoveItem} = props
  return (
    <div className='card'>
        <span className='card__badge'>0</span>

        <div className="image-container">
            <img src={car.Image} alt={car.title} width={'100%'} height={'250px'} />
        </div>

        <div className='card__content'>
            <p className="card-title">{car.title}</p>
            <p className="card-color">{car.color}</p>
            <p className="card-price">{car.price}</p>
        </div>
        <div className="card-group">
            <Button title={'+'} type={'add'} />
            <Button title={'-'} type={'remove'} />
        </div>
    </div>
  )
}

export default Card