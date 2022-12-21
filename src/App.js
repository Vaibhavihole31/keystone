import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StudentList from './view/StudentsList/StudentsList'
import StudentProfile from './view/StudentProfile/StudentProfile'
import Message from './components/Message/Message'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/studentlist' element={<StudentList/>}/>
      <Route path='/studentprofile' element={<StudentProfile/>}/>
      <Route path='/message' element={<Message/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App