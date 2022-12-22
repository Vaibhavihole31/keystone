import React from 'react'
import './StudentsNotes.css'
import { Link } from 'react-router-dom'

function StudentsNotes() {
  return (
    <>
      <div className='container'>
        <div className='child-contain-2 mt-5 mb-5'>
          <div className='row'>
            <h1 className='text-center'>Notes View</h1>
            <div className='col-md-6'>
              <div className='text-center student-info'>
                <b>Group Name :</b> ABC  <br /><br />
                <b>Title of Topic :</b>Random
              </div>
            </div>
            <div className='col-md-6'>
              <div className='text-center student-info'>
                <b>Date :</b> 22/12/2022  <br /><br />
                <b>Time :</b>18:00
              </div>
            </div>
          </div>


          <div className='row'>
            <div className='col-md-2'></div>
            <div className='col-md-8'>
              <div className='pdf-container'>Notes / PDF opening</div>
            </div>
            <div className='col-md-2'></div>
          </div>

          <div className='row'>
            <div className='col-md-6 mb-2'>
              <div className='text-center'>
                <button className='approved-btn'><b>Approved</b></button>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='text-center mb-2'>

                <button type="button" class="reject-btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                  <b>Reject</b>
                </button>

                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Reason Of Rejection...</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        Random Reason
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary">Betterment</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StudentsNotes