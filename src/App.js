import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StudentList from './view/StudentsList/StudentsList'
import StudentProfile from './view/StudentProfile/StudentProfile'
import Message from './components/Message/Message'
import PendingNotes from './view/PendingNotes/PendingNotes'
import ApprovalNotes from './view/ApprovalNotes/ApprovalNotes'
import StudentsNotes from './view/StudentsNotes/StudentsNotes'
import ProfilePage from './view/ProfilePage/ProfilePage'
import AssignmentSessionView from './view/AssignmentSessionView/AssignmentSessionView'
import LetestMeetup from './view/LetestMeetup/LetestMeetup'
import PreviousMeetup from './view/PreviousMeetup/PreviousMeetup'
import PendingAssignment from './components/PendingAssignment/PendingAssignment'
import AssignmentForm from './components/AssignmentForm/AssignmentForm'
import SubmmitedAssignments from './components/SubmmitedAssignments/SubmmitedAssignments'
import StudentInfo from './components/StudentInfo/StudentInfo'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/studentlist' element={<StudentList/>}/>
      <Route path='/studentprofile' element={<StudentProfile/>}/>
      <Route path='/message' element={<Message/>}/>
      <Route path='/pendingnotes' element={<PendingNotes/>} />
      <Route path='/approvalnotes' element={<ApprovalNotes/>} />
      <Route path='/studentnotes' element={<StudentsNotes/>} />
      <Route path='/profilepage' element={<ProfilePage/>} />
      <Route path='/assignment-session' element={<AssignmentSessionView/>} />
      <Route path='/leatest-meetup' element={<LetestMeetup/>} />
      <Route path='/previous-meetup' element={<PreviousMeetup/>} /> 
      <Route path='/pendingassignment' element={<PendingAssignment/>} />
      <Route path='/assignmentform' element={<AssignmentForm/>} />
      <Route path='/submmitedAssignment' element={<SubmmitedAssignments/>} />
      <Route path='/studentinfo' element={<StudentInfo/>} /> 
    </Routes>
    </BrowserRouter>
  )
}

export default App

{/* <Route path='/leatest-meetup' element={<LetestMeetup/>} /> Student Route */}
{/* <Route path='/previous-meetup' element={<PreviousMeetup/>} /> Student Route */}