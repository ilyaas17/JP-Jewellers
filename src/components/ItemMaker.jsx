import React from 'react'
import '../App.css'

export default function ItemMaker(props) {
  return (
        <div className='item'>
                <img src={props.img} alt="Internet Connection Error" className='imgs' />
                <div className='item-content'>
                    <h3>{props.title}</h3>
                    <p>{props.desc}</p>
                </div>
        </div>
  )
}
