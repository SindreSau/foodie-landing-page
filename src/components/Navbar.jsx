import React, { useEffect, useState } from 'react';
import { NavLink as Link } from 'react-router-dom'
import logo from '../../src/assets/images/nav-logo.png'

function Navbar({ fixed }) {
  //Functionality for navbar responsiveness
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    window.addEventListener('resize', () => {
      const ismobile = window.innerWidth < 768;
      if (ismobile !== isMobile) {
        setIsMobile(ismobile)
      }
    }, false)
  }, [isMobile])

  const [toggle, setToggle] = useState(false)
  const classOnMenuClick = () => {
    setToggle(!toggle)
    const navList = document.querySelector('#navList');
    if (toggle) {
      navList.classList = 'nav-dropdown';
    } else {
      navList.classList = ('nav-dropdown nav-dropdown-show');
    }
  }

  // Add color to the selected list-item
  let activeClassName = "clr-primary";

  // return
  return (
    <>
      <nav className='relative bg-white'>

        <div className='w-full px-10 py-10 flex justify-between'>
          {/* LOGO */}
          <Link to='/'><img src={logo} alt='logo-image'></img></Link>
          {/* Mobile dropdown */}
          <button className='text-gray-400 md:hidden' onClick={classOnMenuClick}>
            <span className='sr-only'></span>
            <span className="material-symbols-outlined ">
              menu
            </span>
          </button>
          {/* Desktop menu */}
          <ul id='navList' className={isMobile ? 'nav-dropdown' : 'flex items-center gap-24'}>
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