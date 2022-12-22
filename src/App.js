import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StudentList from './view/StudentsList/StudentsList'
import StudentProfile from './view/StudentProfile/StudentProfile'
import Message from './components/Message/Message'
import PendingNotes from './view/PendingNotes/PendingNotes'
import ApprovalNotes from './view/ApprovalNotes/ApprovalNotes'
import StudentsNotes from './view/StudentsNotes/StudentsNotes'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/studentlist' element={<StudentList/>}/>
      <Route path='/studentprofile' element={<StudentProfile/>}/>
      <Route path='/message' element={<Message/>}/>
      <Route path='/pendingnotes' element={<PendingNotes/>} />
      <Route path='/approvalnotes' element={<ApprovalNotes/>} />
      <Route path= '/studentnotes' element={<StudentsNotes/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App