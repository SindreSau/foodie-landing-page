import React from 'react';
import { NavLink as Link } from 'react-router-dom'
import logo from '../../src/assets/images/nav-logo.png'

function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  let activeClassName = "clr-primary";
  return (
    <>
      <nav className='relative px-10 py-8 bg-white border'>

        <div className='w-full relative flex justify-between'>
          {/* LOGO */}
          <Link to='/'><img src={logo} alt='logo-image'></img></Link>
          {/* Mobile dropdown */}
          <button className='text-gray-400 md:hidden' onClick={() => setNavbarOpen(!navbar)}>
            <span className='sr-only'></span>
            <span className="material-symbols-outlined ">
              menu
            </span>
          </button>
          {/* Desktop menu */}
          <ul className={'flex items-center gap-24 max-md:hidden'}>
            <li>
              <Link to='/' className={({ isActive }) => isActive ? activeClassName : undefined}>
                Home
              </Link>
            </li>
            <li>
              <Link to='/product' className={({ isActive }) => isActive ? activeClassName : undefined}>
                Product
              </Link>
            </li>
            <li>
              <Link to='/faq' className={({ isActive }) => isActive ? activeClassName : undefined}>
                FAQ
              </Link>
            </li>
            <li>
              <Link to='/contact' className={({ isActive }) => isActive ? activeClassName : undefined}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

      </nav>
    </>
  )
}

export default Navbar;