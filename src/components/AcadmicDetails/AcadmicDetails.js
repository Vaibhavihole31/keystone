import React from 'react'
import './AcadmicDetails.css'

function AcadmicDetails() {
  return (
    <>
    <div className='container'>
      <div className='row'>
      <h2 className='text-center'>Academic  Deatils</h2>

      <h4 className='mt-2'>SSC Deatils :</h4>
      <div className='row mt-2 student-deatils'>
              <div className='col-md-3 mt-2 text-center information-card'><b>English Marks:</b></div>
              <div className='col-md-3 mt-2 text-center information-card'><b>Science Marks :</b></div>
              <div className='col-md-3 mt-2 text-center information-card'><b>Math Marks :</b></div>
              <div className='col-md-3 mt-2 text-center information-card'><b>Total Marks :</b></div>
            </div>

            <div className='information-card mt-3 deatils'><b>SSC School Name :</b> </div>

            <div className='information-card mt-3 deatils'><b>SSC Coaching Class  :</b> </div>
      </div>

      
      <h4 className='mt-5 mb-3'>High School Deatils :</h4>
      <div className='row mt-2 student-deatils'>
              <div className='col-md-3 mt-2 text-center information-card'><b>Physics Marks :</b></div>
              <div className='col-md-3 mt-2 text-center information-card'><b>Chemistry Marks :</b></div>
              <div className='col-md-3 mt-2 text-center information-card'><b>Math Marks :</b></div>
              <div className='col-md-3 mt-2 text-center information-card'><b>Total Marks :</b></div>
            </div>

            <div className='information-card mt-3 deatils'><b>High School Name :</b> </div>

            <div className='information-card mt-3 deatils'><b>SSC Coaching Class  :</b> </div>


            <h4 className='mt-5 mb-3'>Competetive Exam Deatils :</h4>
      <div className='row mt-2 student-deatils'>
              <div className='col-md-3 mt-2 text-center information-card'><b>Physics Marks :</b></div>
              <div className='col-md-3 mt-2 text-center information-card'><b>Chemistry Marks :</b></div>
              <div className='col-md-3 mt-2 text-center information-card'><b>Math Marks :</b></div>
              <div className='col-md-3 mt-2 text-center information-card'><b>Total Marks :</b></div>
            </div>

            <div className='information-card mt-3 deatils'><b>School Name :</b> </div>

            <div className='information-card mt-3 deatils'><b>SSC Coaching Class  :</b> </div>
      </div>

      

      
    </>
  )
}

export default AcadmicDetails