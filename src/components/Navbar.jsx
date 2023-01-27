import React, { useEffect, useState } from 'react';
import { NavLink as Link } from 'react-router-dom'
import logo from '../../src/assets/images/nav-logo.png'
import { FiMenu, FiX } from 'react-icons/fi'

function Navbar({ fixed }) {
  //Functionality for navbar responsiveness
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    window.addEventListener('resize', () => {
      const ismobile = window.innerWidth < 768;
      const navList = document.getElementById('nav-list');
      if (ismobile !== isMobile) { setIsMobile(ismobile) };
      setMenuButton(<FiMenu />)
      setIsOpen(false)
    }, false)
  }, [isMobile])

  // Set the menu-button icon
  const [isOpen, setIsOpen] = useState(false);
  const [menuButton, setMenuButton] = useState(<FiMenu />)
  const handleMenuButton = () => {
    const navList = document.getElementById('nav-list');
    setIsOpen(!isOpen);
    if (isMobile) {
      if (!isOpen) {
        setMenuButton(<FiX />)
        navList.classList.add('nav-dropdown-show')
      } else {
        setMenuButton(<FiMenu />)
        navList.classList = 'nav-dropdown'
      }
    }
  }

  // Hide menu on scroll
  window.addEventListener('scroll', () => {
    if (isMobile && window.scrollY > 1) {
      const navList = document.getElementById('nav-list');
      navList.classList.remove('nav-dropdown-show')
      setMenuButton(<FiMenu />)
      setIsOpen(false)
    }
  })

  // Function to hide menu on dom-interaction
  const hideMenu = () => {
    const navList = document.getElementById('nav-list');
    navList.classList.remove('nav-dropdown-show')
    setMenuButton(<FiMenu />)
    setIsOpen(false)
  }

  // Add color to the selected list-item
  let activeClassName = "clr-primary";

  // return
  return (
    <>
      <nav className='bg-white w-full'>

        <div className='px-10 py-10 flex justify-between'>
          {/* LOGO */}
          <Link to='/'><img src={logo} alt='logo-image'></img></Link>
          {/* Mobile dropdown */}
          <button className={isMobile ? 'text-gray-500 text-3xl' : 'hidden'} onClick={handleMenuButton}>
            <span className='sr-only'>Menu</span>
            <span>{menuButton}</span>
            {/* <FiX /> */}
          </button>
          {/* Desktop menu */}
          <ul id='nav-list' className={isMobile ? 'nav-dropdown' : 'flex items-center gap-24'}>
            <li>
              <Link to='/' className={({ isActive }) => isActive ? activeClassName : undefined} onClick={hideMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to='/product' className={({ isActive }) => isActive ? activeClassName : undefined} onClick={hideMenu}>
                Product
              </Link>
            </li>
            <li>
              <Link to='/faq' className={({ isActive }) => isActive ? activeClassName : undefined} onClick={hideMenu}>
                FAQ
              </Link>
            </li>
            <li>
              <Link to='/contact' className={({ isActive }) => isActive ? activeClassName : undefined} onClick={hideMenu}>
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