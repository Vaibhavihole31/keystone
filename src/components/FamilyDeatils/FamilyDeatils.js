import React from 'react'
import './FamilyDeatils.css'

function FamilyDeatils() {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <h2 className='text-center'>Parent's Details</h2>
          <div className='row mt-5 student-deatils'>

            <div className='col-md-3 text-center information-card'><b>Father Name :</b> abc</div>
            <div className='col-md-1'></div>
            <div className='col-md-3 text-center information-card'><b>Mother Name :</b> xyz</div>
            <div className='col-md-1'></div>
            <div className='col-md-4 text-center information-card'><b>Legal Guardian's Name :</b> PQR</div>

            <div className='col-md-3 text-center information-card mt-3'><b>Father Occupation :</b> abc</div>
            <div className='col-md-1'></div>
            <div className='col-md-3 text-center information-card mt-3'><b>Mother Occupation :</b> xyz</div>
            <div className='col-md-1'></div>
            <div className='col-md-4 text-center information-card mt-3'><b>Legal Guardian's Occupation :</b> PQR</div>

            <div className='col-md-3 text-center information-card mt-3'><b>Father Work Deatils :</b> abc</div>
            <div className='col-md-1'></div>
            <div className='col-md-3 text-center information-card mt-3'><b>Mother Work Details :</b> xyz</div>
            <div className='col-md-1'></div>
            <div className='col-md-4 text-center information-card mt-3'><b>Legal Guardian's Work Details :</b> PQR</div>

            <div className='col-md-3 text-center information-card mt-3'><b>Father Office Contact  :</b> abc</div>
            <div className='col-md-1'></div>
            <div className='col-md-3 text-center information-card mt-3'><b>Mother Office Contact:</b> xyz</div>
            <div className='col-md-1'></div>
            <div className='col-md-4 text-center information-card mt-3'><b>Legal Guardian's Office Contact :</b> PQR</div>

            <div className='col-md-3 text-center information-card mt-3'><b>Father Email  :</b> abc</div>
            <div className='col-md-1'></div>
            <div className='col-md-3 text-center information-card mt-3'><b>Mother Email :</b> xyz</div>
            <div className='col-md-1'></div>
            <div className='col-md-4 text-center information-card mt-3'><b>Legal Guardian's Email :</b> PQR</div>

            <div className='col-md-3 text-center information-card mt-3'><b>Father Annual Income  :</b> abc</div>
            <div className='col-md-1'></div>
            <div className='col-md-3 text-center information-card mt-3'><b>Mother Annual Income:</b> xyz</div>
            <div className='col-md-1'></div>
            <div className='col-md-4 text-center information-card mt-3'><b>Legal Guardian's Annual Income :</b> PQR</div>
            
          </div>

          
          <h2 className='text-center mt-5'>Hobbies</h2>
          <div className='information-card mt-3 deatils'><b>Hobbies And Future Intrests</b></div>

          <h2 className='text-center mt-5'>Sibling Details</h2>

          <div className='row mt-5 student-deatils'>
              <div className='col-md-4 text-center information-card'><b>Sibling 1 Name :</b> abc</div>
              <div className='col-md-4 text-center information-card'><b>Sibling 2 Name :</b> xyz</div>
              <div className='col-md-4 text-center information-card'><b>Sibling 3 Name :</b> PQR</div>
            </div>

            <div className='row mt-5 student-deatils'>
              <div className='col-md-4 text-center information-card'><b>Sibling 1 Qualification :</b> abc</div>
              <div className='col-md-4 text-center information-card'><b>Sibling 2 Qualification :</b> xyz</div>
              <div className='col-md-4 text-center information-card'><b>Sibling 3 Qualification :</b> PQR</div>
            </div>

            <div className='row mt-5 student-deatils'>
              <div className='col-md-4 text-center information-card'><b>Sibling 1 Contact :</b> abc</div>
              <div className='col-md-4 text-center information-card'><b>Sibling 2 Contact :</b> xyz</div>
              <div className='col-md-4 text-center information-card'><b>Sibling 3 Contact :</b> PQR</div>
            </div>
        </div>
      </div>
    </>
  )
}

export default FamilyDeatils