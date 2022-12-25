import React from 'react'
import './PersonalDeatils.css'

function PersonalDeatils() {
  return (
    <>
      <div className='container'>
        <div className='main-container'>
          <div className='row'>
            <h2 className='text-center'>Personal Deatils</h2>
            <div className='row mt-5 student-deatils'>
              <div className='col-md-4 text-center information-card'><b>Full Name :</b> abc</div>
              <div className='col-md-4 text-center information-card'><b>Middle Name :</b> xyz</div>
              <div className='col-md-4 text-center information-card'><b>Last Name :</b> PQR</div>
            </div>
            <div className='information-card mt-3 deatils'><b>Email address :</b>abc@gmail.om </div>
            <div className='row mt-3 student-deatils'>
              <div className='col-md-5 text-center information-card'><b>Medication :</b> xyz</div>
              <div className='col-md-2'></div>
              <div className='col-md-5 text-center information-card'><b>Yoga:</b> PQR</div>

              <div className='col-md-5 text-center information-card mt-3'><b>Driving Licence :</b> xyz</div>
              <div className='col-md-2'></div>
              <div className='col-md-5 text-center information-card mt-3'><b>Adhar Number :</b> PQR</div>

              <div className='col-md-5 text-center information-card mt-3'><b>Date of Birth :</b> xyz</div>
              <div className='col-md-2'></div>
              <div className='col-md-5 text-center information-card mt-3'><b>Place of Birth:</b> PQR</div>
            </div>

            <div className='information-card mt-3 deatils'><b>Perment Address :</b>abc@gmail.om </div>

            <div className='information-card mt-3 deatils'><b>Local Address :</b>abc@gmail.om </div>
          </div>

          <h2 className='text-center mt-5'>Physical Data</h2>

              <div className='row student-deatils'>

              <div className='col-md-5 text-center information-card mt-3'><b>Blood Group :</b> O+</div>
              <div className='col-md-2'></div>
              <div className='col-md-5 text-center information-card mt-3'><b>Height :</b> PQR</div>

              <div className='col-md-5 text-center information-card mt-3'><b>Gender :</b> xyz</div>
              <div className='col-md-2'></div>
              <div className='col-md-5 text-center information-card mt-3'><b>Weight :</b> PQR</div>

              <div className='col-md-5 text-center information-card mt-3'><b>BMI :</b> xyz</div>
              </div>
        </div>
      </div>
    </>
  )
}

export default PersonalDeatils