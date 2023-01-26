import React from 'react';

function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className='relative flex flex-wrap justify-between px-3 py-8 bg-white border'>
        <div className='w-full'>
          <div className='w-full relative flex justify-between'>
            <a><img src='' alt='logo-image'></img></a>
            <button>
              <span className="material-symbols-outlined text-gray-400">
                menu
              </span>
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;