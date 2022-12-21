import React from 'react'
import profileImg from './profile.png'
import './StudentProfile.css'

function StudentProfile() {
  return (
    <>
    <div className='container'>
    <div className='child-container'>
        <div className='row'>
            <div className='col-md-4'>
            <img src={profileImg} className='header-img mt-3 mx-auto d-block' />
            </div>
            <div className='col-md-8'>
              <div className='student-info'>
              <b>Student Name :</b> ABC XYZ PQR <br/>
              <b>Group Name :</b> A <br/>
              <b>Mentor Name :</b> ABC <br/><br/>
                
              Keystone School of Engineering College in Pune<br/><br/>
              <button className='btn-cordinator'><b>Co-ordinator</b></button>
              </div>
            </div>
        </div>

        <div className='row'>
          <div className='col-md-12'>
          <div className='student-info'>
          <b>Emil ID: </b> abc@gmail.com <br/>
          <b>Contact Number :</b> 7821011979 <br/>
          <b>LinkedIn Link :</b> <br/>
          </div>
          </div>
            </div>

            <div className='row'>
              <div className='col-md-4'> 
              <div className='text-center submit-card'>
                <h1 className='text-center'>20</h1>
               <h4>Submitted Assignment</h4>
              </div>
              </div>
              <div className='col-md-4'> 
              <div className='text-center pending-card'>
              <h1 className='text-center'>00</h1>
                <h4 className='pending-assignment'>Pending Assignment</h4>
              </div>
              </div>
              <div className='col-md-4'> 
              <div className='text-center temp-card'>
              <h1 className='text-center'>00</h1>
                  <h4>Temp Data</h4>
              </div>
              </div>
            </div>

            <div className='row'>
                <div className='col-md-6 mt-5'> 
                <div className='text-center'>
                <button className='msg-btn'><b>Message</b></button>
                </div>
                </div>
                <div className='col-md-6 mt-5'>
                <div className='text-center'>
                <button className='done-btn'><b>Done</b></button>
                </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default StudentProfile