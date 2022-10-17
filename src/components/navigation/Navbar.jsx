import {useState} from 'react'
import {Link, NavLink, Outlet} from 'react-router-dom'
import Dropdown from './Dropdown'
import {RiArrowDropDownLine} from 'react-icons/ri'
const Navbar = () => {
  const [dropdown, setDropdown] = useState(false)
  const activeLink ='relative flex p-4 m-4 rounded-sm font-medium text-lg bg-white text-blue-700 transition-opacity underline'
  const normalLink ='relative flex bg-blue-700 p-4 m-4 text-white rounded-sm font-medium text-lg hover:bg-white hover:text-blue-700 hover:transition-opacity'

  return (
    <div className='p-0 m-0'>
      <nav className='h-20 w-screen bg-teal-600 flex '>
        <h1 className='flex justify-start text-center items-center text-3xl text-white font-medium m-5'>Welcome</h1>
        <ul className='flex flex-col w-full justify-evenly list-none items-end'>
          <li className='flex mr-8'>
            <NavLink to='/' 
            className={({isActive})=>
              isActive ? activeLink : normalLink }>Home</NavLink>
            <NavLink to='/form1'
            className={({isActive})=>
            isActive ? activeLink : normalLink } 
            onClick={()=>{setDropdown(true)}}
            >Forms<RiArrowDropDownLine className='absolute -right-2 rounded font-extrabold text-3xl' /></NavLink>{dropdown && 
            <Dropdown dropdown={dropdown} setDropdown={setDropdown}/>} 
            <NavLink to='register' className={({isActive})=>
              isActive ? activeLink : normalLink }>Login</NavLink>
            <NavLink to='logout' className={({isActive})=>
              isActive ? activeLink : normalLink }>Logout</NavLink> 
          </li>
          
        </ul>
      </nav>
    </div>
  )
}

export default Navbar