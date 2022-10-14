import React from 'react'
import DatePicker from "react-multi-date-picker"
import DatePanel from "react-multi-date-picker/plugins/date_panel"
import { Field } from 'formik'

const DatePickerField = ({label,name, ...props}) => {
  return (
    <div className='flex'>
      <label htmlFor={name}>{label}</label>
      <Field name={name} id={name} >
        {({field, meta, form: {setFieldValue}})=>{
          return(
            <DatePicker
              style={{
                height:'2.5rem',
                textAlign:'left',
                'margin':'0.25rem',
                padding:'1rem'
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
              placeholder='Pick Dates'
              format='dd-MM-YYYY'
               />
          )
        }}
      </Field>
    </div>
  )
}

export default DatePickerField