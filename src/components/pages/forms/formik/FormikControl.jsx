import {Input, Select, DatePickerField} from '../importComponent'

const FormikControl = ({control, value, ...props}) => {
  switch(control){
    case'input':
      return <Input {...props}/>

    case 'select':
      return <Select {...props}/>

    case 'date':
      return <DatePickerField {...props}/>
    
    default : 
    return null
  }
}

export default FormikControl