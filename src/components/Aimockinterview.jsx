import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Aimockinterview = () => {
  return (
    <>
      <Navbar />
      <div className='bg-gradient-to-b from-black/85 to-black text-white'>
        <div className='text-center py-20 md:py-20 2xl:py-36'>
          <h1 className='text-4xl md:text-4xl xl:text-6xl font-bold leading-snug xl:leading-tight'>Tailored AI Mock Interviews<br /> For Every Career Path</h1>
          <p className='w-auto px-3 md:w-3/4 xl:w-1/2 mx-auto py-4 md:text-base'>Practice with our AI-driven interviewer, designed to match your specific career goals and industry. Enhance your interview skills and build confidence with personalized questions, instant feedback, and actionable tips tailored just for you. Prepare smarter, perform better, and step into any interview with assurance.</p>
        </div>
      </div>
      <div className='w-full bg-[#181818]'>
        <h1 className='text-3xl md:text-4xl xl:text-5xl font-semibold pt-10 text-white text-center'>Choose Your Interview Practice</h1>
        <div className='grid xl:grid-cols-3 justify-items-center py-10 text-white px-10 gap-10'>
          <div className='border-2 border-white/40 rounded-lg p-5'>
            <svg xmlns="http://www.w3.org/2000/svg" height='45' width='45' viewBox="0 0 24 24" fill="currentColor"><path d="M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM14 10.25V8H7V14H14V11.75L17 14V8L14 10.25Z"></path></svg>
            <h1 className='text-2xl font-semibold mt-1 mb-1'>Video Interviews</h1>
            <p className='text-justify'>Enhance your interview skills by practicing with our AI-powered interviewer. Using your webcam, engage in realistic, face-to-face sessions designed to boost your confidence and preparation.</p>
            <button className='w-full bg-white text-black py-[7px] my-4 rounded-lg text-lg font-normal hover:bg-opacity-80 transition-colors duration-300'>Start Video Interview</button>
          </div>
          <div className='border-2 border-white/40 rounded-lg p-5'>
            <svg xmlns="http://www.w3.org/2000/svg" height='45' width='45' viewBox="0 0 24 24" fill="currentColor"><path d="M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455Z"></path></svg>
            <h1 className='text-2xl font-semibold mt-1 mb-1'>Chat Interviews</h1>
            <p className='text-justify'>Prepare for text-based interviews with our AI-powered chat system. Engage in realistic, interactive conversations to sharpen your communication skills and boost your confidence.</p>
            <button className='w-full bg-white text-black py-[7px] my-4 rounded-lg text-lg font-normal hover:bg-opacity-80 transition-colors duration-300'>Start Chat Interview</button>
          </div>
          <div className='border-2 border-white/40 rounded-lg p-5'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain h-11 w-11"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg>
            <h1 className='text-2xl font-semibold mt-1 mb-1'>Custom Interview</h1>
            <p className='text-justify'>Tailor your interview preparation with personalized sessions using our AI-powered interviewer.
              Practice face-to-face interviews through your webcam to focus on specific skills and scenarios.</p>
            {/* <button className='w-full bg-white text-black py-[7px] my-4 rounded-lg text-lg font-normal hover:bg-opacity-80 transition-colors duration-300'>Start Custom Interview</button> */}
            <select className='w-full bg-white text-black py-[7px] my-4 rounded-lg text-lg font-normal hover:bg-opacity-80 transition-colors duration-300 px-2'> 
              <option className='bg-[#181818] text-white' value="">Software Engineering</option>
              <option className='bg-[#181818] text-white' value="">Front End Development</option>
              <option className='bg-[#181818] text-white' value="">Backend Development</option>
              <option className='bg-[#181818] text-white' value="">Full Stack Development</option>
            </select>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Aimockinterview
