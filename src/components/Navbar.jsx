import React, { useState } from 'react'
import Logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <header className='sticky left-0 top-0 w-full z-[1000] bg-[#0A0A0A] text-white'>
        <nav className='flex items-center justify-between px-5 py-4'>
          <div className='flex items-center gap-2 cursor-pointer'>
            <Link to='/'><img src={Logo} alt="" /></Link>
            <h1 className='text-base font-semibold'><Link to='/'>TALENT FORGE</Link></h1>
          </div>
          <div className='hidden md:flex'>
            <ul className='flex items-center gap-2'>
              <li className='font-semibold text-base hover:bg-[#4f4e4e] px-4 py-2 rounded-lg duration-200 cursor-pointer'><Link to='/ai-mock-interview'>AI Mock Interview</Link></li>
              <li className='font-semibold text-base hover:bg-[#4f4e4e] px-4 py-2 rounded-lg duration-200 cursor-pointer'><Link to='/resume-analysis'>Resume Analysis</Link></li>
            </ul>
          </div>
          <div className='md:hidden'>
            <button className='text-white' onClick={toggleMenu}>
              {menuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>
        {/* Slide-in mobile menu */}
        <div
          className={`fixed left-0 h-screen w-3/4 bg-gradient-to-r from-black to-black text-white transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}
        >
          <ul className='flex flex-col items-start gap-2 p-4'>
            <li className='font-semibold text-base hover:bg-[#4f4e4e] px-4 py-2 rounded-lg duration-200 cursor-pointer'><Link to='/ai-mock-interview'>AI Mock Interview</Link></li>
            <li className='font-semibold text-base hover:bg-[#4f4e4e] px-4 py-2 rounded-lg duration-200 cursor-pointer'><Link to='/resume-analysis'>Resume Analysis</Link></li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Navbar

