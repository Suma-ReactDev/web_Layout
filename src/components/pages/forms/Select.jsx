import React from 'react'
import {Field} from 'formik'
const Select = (props) => {
  const {label,name,options,...rest } = props
  return (
    <div className='flex'>
      <span className='w-20'>
        <label htmlFor={name}>{label}</label>
      </span>
      <Field id={name} name={name} {...rest} as='select'  >
         {options.map((option)=>
            <option
              key={option.value} 
              value={option.value}>
              {option.label}
            </option>
         )}
       </Field>
    </div>
  )
}

export default Select