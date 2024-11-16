import React from 'react'
import Navbar from './Navbar'
import mock from '../assets/mock.svg'
import analytic from '../assets/analytic.svg'
import Footer from './Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='bg-gradient-to-b from-black/85 to-black text-white'>
        <div className='text-center py-20 md:py-20 2xl:py-36'>
          <h1 className='text-4xl md:text-4xl xl:text-6xl font-bold leading-snug xl:leading-tight'>Empowering Your Career Path<br /> With Talent Forge</h1>
          <p className='w-auto px-3 md:w-3/4 xl:w-1/2 mx-auto py-4 md:text-base'>Talent Forge is committed to empowering your career development by fostering valuable connections and equipping you with the essential tools for success. Featuring AI-powered interview simulations and precise job matching, our platform is designed to help you unlock your full potential and navigate your path to a prosperous professional future.</p>
          <button className='text-lg md:text-xl px-7 py-2 rounded-md bg-white text-black hover:bg-opacity-80 transition-colors duration-300'>Get Started </button>
        </div>
      </div>
      <div className='w-full bg-[#181818]'>
        <h1 className='text-3xl md:text-4xl xl:text-5xl font-semibold pt-10 text-white text-center'>Our Platform Features</h1>
        <div className='grid xl:grid-cols-3 justify-items-center py-10 text-white px-10 gap-10'>
          <div className='border-2 border-white/20 hover:border-white duration-300 cursor-pointer rounded-lg p-5'>
            <img src={mock} alt="" />
            <h1 className='text-2xl font-semibold mt-1 mb-2'>AI Mock Interview</h1>
            <p className='text-justify'>Prepare for real interviews with our AI-powered mock interview system. Engage in interactive, realistic conversations that simulate common interview scenarios. Receive instant feedback on your responses, body language, and communication skills to help you improve. Boost your confidence and refine your answers to make a lasting impression during actual interviews.</p>
          </div>
          <div className='border-2 border-white/20 hover:border-white duration-300 cursor-pointer rounded-lg p-5'>
            <img src={analytic} alt="" />
            <h1 className='text-2xl font-semibold mt-1 mb-2'>Resume Analytics</h1>
            <p className='text-justify'>Boost your job application success with our AI-powered resume analytics tool. It analyzes your resume for formatting, keywords, and relevance to job descriptions, offering personalized suggestions to improve its impact. Tailor your resume to industry standards and increase your chances of standing out to employers with our intelligent feedback system.</p>
          </div>
          <div className='border-2 border-white/20 hover:border-white duration-300 cursor-pointer rounded-lg p-5'>
            <img src={analytic} alt="" />
            <h1 className='text-2xl font-semibold mt-1 mb-2'>Real-time Performance Analytics</h1>
            <p className='text-justify'>Track your progress with our real-time performance analytics tool. Get instant insights into your performance during practice sessions, identifying strengths and areas for improvement. Monitor key metrics like response time, accuracy, and communication skills. Make data-driven adjustments to enhance your overall performance and achieve your goals more effectively.</p>
          </div>
          
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
