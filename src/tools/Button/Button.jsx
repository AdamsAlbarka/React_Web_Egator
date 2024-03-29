import React, { Children } from 'react'
import './button.css'


const Button = (props) => {
  return (
    <button className='cta'>
    {props.children}
    </button>
  )
}

export default Button
