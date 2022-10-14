const LoginInput = ({label,...props}) => {
  return(
    <div>
      <label>{label}</label>
      <input 
        {...props}/>
    </div>
  )
}
export default LoginInput