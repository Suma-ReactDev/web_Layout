import React from 'react'
import DatePicker from "react-multi-date-picker"
import DatePanel from "react-multi-date-picker/plugins/date_panel"
import { Field } from 'formik'

const DatePickerField = ({label,name, ...props}) => {
  return (
    <div className='flex w-fit'>
      <span className='w-20 '>
      <label htmlFor={name}>{label}</label>
      </span>
      <Field name={name} id={name} >
        {({field, meta, form: {setFieldValue}})=>{
          return(
            <DatePicker
              style={{
                height:'2.5rem',
                textAlign:'left',
                padding:'1rem',
                marginLeft:'1rem'
              }}
              containerStyle={{
                width: "100%"
              }}
              plugins={[<DatePanel />]} 
              {...field}
              selected={field.value || null}
              onChange={(val) => {
                setFieldValue(field.name, val);
              }}
              placeholder='dd-mm-yyyy'
              format='dd-MM-YYYY'
               />
          )
        }}
      </Field>
    </div>
  )
}

export default DatePickerField