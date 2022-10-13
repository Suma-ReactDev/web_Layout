import React from 'react'

const Select = ({label,name,options,type,...rest }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field id={name} as={type} {...rest}
       >
         {options.map((option)=>
         <options key={option.} >
           
         </options>)}
       </Field>
    </div>
  )
}

export default Select