import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Aimockinterviewpage from './pages/Interviewpage'
import Resumeanalysispage from './pages/Resumeanalysispage'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/ai-mock-interview' element={<Aimockinterviewpage />} />
        <Route path='/resume-analysis' element={<Resumeanalysispage />} />
      </Routes>
    </>
  )
}

export default App
