import {useState, Fragment } from 'react'
import { formItems } from './NavItem'
import {Link} from 'react-router-dom'

const Dropdown = ({dropdown, setDropdown}) => {
  return (
    <div className='relative'>
      <ul className={`absolute w-36 list-none text-start top-20 right-5 ${dropdown ? null:'hidden'}`}
      onMouseLeave={()=>{setDropdown(false)}}>
        {formItems.map(item=>{
          return(
            <li key={item.id} className='bg-blue-700'>
              <Link to={item.path} className={item.className} onClick={()=>{setDropdown(false)}} >{item.title}</Link>
            </li>
          ) 
        })}
      </ul>
    </div>
  )
  // 
}


export default Dropdown