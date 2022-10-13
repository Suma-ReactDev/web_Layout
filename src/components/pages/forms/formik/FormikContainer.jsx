import React from 'react'
import FormikControl from './FormikControl'
import {Formik, Form} from 'formik'
const FormikContainer = () => {
  return (
    <Formik
    initialValues={{field1:'',field2:'', field3:'', field4:'', field5:'', 
                    field6:'', field7:'', field8:'', field9:'', field10:'', 
                    field11:'',field12:'' }} 
    onSubmit={(values)=>{
      alert(JSON.stringify(values, null, 2))
    }}>
      {(formik)=>{
        <Form>
          <div className='gird grid-cols-2 place-content-center'>
            <FormikControl control='input' type='text' name='field1' label='Field1'/>
            <FormikControl control='date' type='date'  name='field2' label='Field2'/>
            <FormikControl control='select' type='select'  name='field3' label='Field3'/>
            <FormikControl control='select' type='select'  name='field4' label='Field4'/>
            <FormikControl control='select' type='select'  name='field5' label='Field5'/>
            <FormikControl control='input' type='select'  name='field6' label='Field6'/>
            <FormikControl control='input' type='select'  name='field7' label='Field7'/>
            <FormikControl control='select' type='select'  name='field8' label='Field8'/>
            <FormikControl control='input' type='select'  name='field9' label='Field9'/>
            <FormikControl control='input' type='select'  name='field10' label='Field10'/>
            <FormikControl control='select' type='select'  name='field11' label='Field11'/>
            <FormikControl control='select' type='select' name='field12'  label='Field12'/>
          </div>
        </Form>
      }}
    </Formik>
  )
    }
export default FormikContainer