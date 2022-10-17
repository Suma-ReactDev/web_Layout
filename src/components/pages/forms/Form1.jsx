import React from 'react'
import {FormikControl} from './importComponent'
import {Formik, Form} from 'formik'
import { field3,field4,field5,field6,field7,field8,field11,field12, field43, field44, field45, field46 } from './data'
const Form1 = () => {

  return (
    <div className='grid mx-auto bg-slate-300 min-h-screen pl-32 pr-32'>
     <Formik
    initialValues={{field1:'',field2:['','','','',''], field3:'', field4:'', field5:'', 
                    field6:'', field7:'', field8:'', field9:'', field10:'', 
                    field11:'',field12:'', field13:'', field14:'', field15:'', 
                    field16:'', field17:'', field18:'',field19:'', field20:'',
                    field21:'', field22:'', field23:'', field24:'', field25:'',
                    field26:'', field27:'', field28:'', field29:'', field30:'', 
                    field31:'', field32:'', field33:'', field34:'', field35:'',
                    field36:'', field37:'', field38:'', field39:'', field40:'', 
                    field41:'', field42:'', field43:'', field44:'', field45:'',
                    field46:''}} 
    onSubmit={(values)=>{
      alert(JSON.stringify(values, null, 2))
      
    }}>
      {(formik)=>{
        console.log(formik)
        return(
          <Form className='border-8 border-double bg-indigo-400' >
          <div className='grid grid-cols-2 place-content-center gap-x-10 '>
            <FormikControl control='input' type='text' name='field1' label='Field1'/>
            <FormikControl control='date'   name='field2' label='Field2'/>
            <FormikControl control='select'  options={field3} name='field3' label='Field3' />
            <FormikControl control='select'  options={field4} name='field4' label='Field4' />
            <FormikControl control='select' options={field5}  name='field5' label='Field5' /> 
            <FormikControl control='input'  type='text' name='field6' label='Field6'  />
            <FormikControl control='input'  type='text' name='field7' label='Field7' />
            <FormikControl control='select'   name='field8' label='Field8' options={field8}/>  
            <FormikControl control='input'   type='text' name='field9' label='Field9' />
            <FormikControl control='input'   type='text' name='field10' label='Field10'/>
            <FormikControl control='select'   name='field11' label='Field11' options={field11}/>
            <FormikControl control='select'  name='field12'  label='Field12' options={field12}/>
          </div>
          <table >
            <caption >Table Results</caption>
            <thead>
              <tr>
                <th>{'S.No'} </th>
                <th>{'Coloumn 1'} </th>
                <th>{'Coloumn 2'} </th>
                <th>{'Coloumn 3'} </th>
                <th>{'Coloumn 4'} </th>
                <th>{'Coloumn 5'} </th>
                <th>{'Coloumn 6'} </th>
                <th>{'Coloumn 7'} </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{'1'}</td>
                <td><FormikControl control='input' type='number' name='field13'/></td>
                <td><FormikControl control='input' type='number' name='field14'/></td>
                <td><FormikControl control='input' type='number' name='field15'/></td>
                <td><FormikControl control='input' type='number' name='field16'/></td>
                <td><FormikControl control='input' type='number' name='field17'/></td>
                <td><FormikControl control='input' type='number' name='field18'/></td>
                <td><FormikControl control='input' type='number' name='field19'/></td>
              </tr>
              <tr>
                <td>{'2'}</td>
                <td><FormikControl control='input' type='number' name='field20'/></td>
                <td><FormikControl control='input' type='number' name='field21'/></td>
                <td><FormikControl control='input' type='number' name='field22'/></td>
                <td><FormikControl control='input' type='number' name='field23'/></td>
                <td><FormikControl control='input' type='number' name='field24'/></td>
                <td><FormikControl control='input' type='number' name='field25'/></td>
                <td><FormikControl control='input' type='number' name='field26'/></td>
              </tr>
              <tr>
                <td>{'3'}</td>
                <td><FormikControl control='input' type='number' name='field27'/></td>
                <td><FormikControl control='input' type='number' name='field28'/></td>
                <td><FormikControl control='input' type='number' name='field29'/></td>
                <td><FormikControl control='input' type='number' name='field30'/></td>
                <td><FormikControl control='input' type='number' name='field31'/></td>
                <td><FormikControl control='input' type='number' name='field32'/></td>
                <td><FormikControl control='input' type='number' name='field33'/></td>
              </tr>
              <tr>
                <td>{'4'}</td>
                <td><FormikControl control='input' type='number' name='field34'/></td>
                <td><FormikControl control='input' type='number' name='field35'/></td>
                <td><FormikControl control='input' type='number' name='field36'/></td>
                <td><FormikControl control='input' type='number' name='field37'/></td>
                <td><FormikControl control='input' type='number' name='field38'/></td>
                <td><FormikControl control='input' type='number' name='field39'/></td>
                <td><FormikControl control='input' type='number' name='field40'/></td>
              </tr>
              <tr>
                <td colSpan='2' >{'Remarks, if any'}</td>
                <td colSpan='6'><FormikControl control='input' type='text' name='field41'/></td>
              </tr>
              <tr>
                <td colSpan='2' >{'Reference Acceptance Document'}</td>
                <td colSpan='6'><FormikControl control='input' type='text' name='field42'/></td>
              </tr>
              <tr>
                <td colSpan='2' >{'Recommendation'}</td>
                <td colSpan='6'><FormikControl control='select' name='field43' options={field43}/></td>
              </tr> 
          
              <tr>
                <td>{""}</td>
                <td>{""}</td>
                <td colSpan={2}>
                 <FormikControl control='select'  name='field44' options={field44} label='Tested by'/> 
                </td>
                <td colSpan={2}>
                <FormikControl control='select'  name='field45' options={field45} label='Tested by'/> 
                </td>
                <td colSpan={2}>
                <FormikControl control='select'  name='field46' options={field46} label='Tested by'/>
                </td>
              </tr> 
             <tr>
               <td>{""}</td>
               <td>{""}</td>
               <td>{"Approved by"}</td>
               <td colSpan={2}>
                {'Person'}
                </td>
             </tr>
            </tbody>
          </table>
          <div className='grid justify-items-center items-center'>
          <button 
            type='submit' 
            className='grid bg-blue-700 p-3 m-4 text-white rounded-sm font-bold text-2xl w-full'
          >SUBMIT
          </button>
          </div>
        </Form>
        )
      }}
    </Formik>
    </div>
  )
}

export default Form1