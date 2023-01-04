import React from 'react'
import './AssignmentForm.css'
import StudyMaterialHeaderImg from './study-material-header-img.png'

function AssignmentForm() {

  return (
    <>
     <div className="container">
        <div className="studymaterial-card">
          <div className="row">
            <h3 className='text-center mb-3'>Assignment Form</h3>
            <div className="col-md-6">
              <img
                className="study-material-img mx-auto d-block"
                src={StudyMaterialHeaderImg}
                alt=""
              />

            </div>
            <div className="col-md-6 mt-5">
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="topic name"
                    placeholder="Topic Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="date"
                    className="form-control"
                    id="Date of Post"
                    placeholder=""
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="file"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <select className="form-select" id="contenttype" aria-label="Select Content Type">
                    <option> Select Content Type </option>
                    <option value="pdf">PDF</option>
                    <option value="link">Link</option>
                  </select>
                </div>
                <button className="button-add-material w-100 mt-5 mb-3" type="button" >
                  <i class="fa-solid fa-right-to-bracket"></i>Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AssignmentForm