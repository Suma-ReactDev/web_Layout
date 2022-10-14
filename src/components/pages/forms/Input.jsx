import React from 'react'
import { Field } from 'formik'
  const Input = ({label,name, ...rest}) => {
  return (
    <div className='flex'>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} />
    </div>
  )
}
export default Input

 