import React from 'react'
import { Field } from 'formik'
  const Input = ({label,name, ...rest}) => {
  return (
    <div className='flex'>
      <span className='w-20'>
        <label htmlFor={name}>{label}</label>
      </span>
      <Field id={name} name={name} {...rest} />
    </div>
  )
}
export default Input

 