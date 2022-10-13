import {useState} from 'react'
import {Link, Outlet} from 'react-router-dom'
import Dropdown from './Dropdown'
import {RiArrowDropDownLine} from 'react-icons/ri'
const Navbar = () => {
  const [dropdown, setDropdown] = useState(false)
  return (
    <div className='p-0 m-0'>
      <nav className='h-20 w-screen bg-indigo-400 flex'>
        <h1 className='flex justify-start text-center items-center text-3xl text-white font-medium m-5'><Link to='/'>Welcome</Link></h1>
        <ul className='flex flex-col w-full justify-evenly list-none items-end'>
          <li className='flex mr-8'>
            <Link to='/' className='navItem'>Home</Link>
            <Link to='/form1' 
            className='navItem' 
            onClick={()=>{setDropdown(true)}}
            >Forms<RiArrowDropDownLine className='text-white rounded font-extrabold text-3xl hover:bg-white hover:text-blue-700' /></Link>{dropdown && 
            <Dropdown dropdown={dropdown} setDropdown={setDropdown}/>} 
            <Link to='register' className='navItem'>Login</Link>
            <Link to='logout' className='navItem'>Logout</Link> 
          </li>
        </ul>
      </nav>
      
    </div>
  )
}

export default Navbar