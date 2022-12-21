import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StudentList from './view/StudentsList/StudentsList'
import StudentProfile from './view/StudentProfile/StudentProfile'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/studentlist' element={<StudentList/>}/>
      <Route path='/studentprofile' element={<StudentProfile/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App