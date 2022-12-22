import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StudentList from './view/StudentsList/StudentsList'
import StudentProfile from './view/StudentProfile/StudentProfile'
import Message from './components/Message/Message'
import PendingNotes from './view/PendingNotes/PendingNotes'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/studentlist' element={<StudentList/>}/>
      <Route path='/studentprofile' element={<StudentProfile/>}/>
      <Route path='/message' element={<Message/>}/>
      <Route path='/pendingnotes' element={<PendingNotes/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App