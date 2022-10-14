import React, { useState } from 'react'
import LoginInput from './forms/loginInput'
 
const Login = () => {
  const [variables, setVariables] = useState({userName:"", password:""})
  const onChangeHandler = (e) =>{
    setVariables({...variables, [e.target.name]:e.target.value})
    console.log(variables)
  }
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(variables)
  }
  return (
    <div className='flex flex-col mx-auto bg-slate-200 m-20 p-20'>
      <div className='flex flex-col items-center justify-items-center'>
      <form onSubmit={onSubmitHandler} 
      className='bg-slate-300 '>
        <LoginInput 
        label={'Username'}
        type='text'
        placeholder='User Name'
        name='userName'
        onChange={onChangeHandler}
        value={variables.name}
        />
        <LoginInput 
        label={'Password'}
        placeholder='Password'
        type='text'
        name='password'
        onChange={onChangeHandler}
        value={variables.password}
        />
        <button type='submit' className='bg-blue-500 text-white text-base p-2 m-3 w-full rounded-sm font-bold'>SUBMIT</button>
      </form>
      </div>
    </div>
  )
}

export default Login