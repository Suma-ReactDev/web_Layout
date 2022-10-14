import React from 'react'
import {Field} from 'formik'
const Select = (props) => {
  const {label,name,options,...rest } = props
  return (
    <div className='flex'>
      <label htmlFor={name}>{label}</label>
      <Field id={name} {...rest} as={props.control} name={name} >
         {options.map((option)=>
            <option
              className=''
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