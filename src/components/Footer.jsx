import React from 'react'
import Logo from '../assets/logo.svg'

const Footer = () => {
    return (
        <>
            <div className='w-full bg-[#111] text-white p-3 flex flex-col items-center justify-center md:flex-row md:items-center md:justify-between overflow-hidden'>
                <div className='flex items-center gap-2 cursor-pointer'>
                    <img src={Logo} alt="" className='w-8 h-8 md:w-auto md:h-auto' />
                    <h1 className='text-base font-semibold'>TALENT FORGE</h1>
                </div>
                <div className='mt-2 md:mt-0'>
                    © 2024 Talent Forge. All Rights Reserved.</div>
            </div>
        </>
    )
}

export default Footer
