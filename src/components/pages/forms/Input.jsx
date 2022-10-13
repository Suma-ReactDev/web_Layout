import React from 'react'

const Input = ({label,errorMessage, ...rest}) => {
  return (
    <div>
      <label>{label}</label>
      <input
      {...rest}
       />
    </div>
  )
}

export default Input