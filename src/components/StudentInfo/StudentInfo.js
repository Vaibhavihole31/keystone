import React from 'react'
import { Link } from 'react-router-dom'
import StudentInfoData from './StudentInfoData'

function StudentInfo() {
    return (
        <>
            <div>
                <div className='container'>
                    <h4 className='mt-4 text-center'>Student Info</h4>

                    <div className='st-info-card'>
                    <div className='row mt-5 mb-5'>
                      <div className='col-md-6 text-center'>
                            <b>Topic </b>: Lets Discuss About React <br /><br />

                            <b>Mentor Name </b>: Maya Angelou <br /><br />

                            <b>Group Name</b>: Fantastic Four.
                        </div>
                        <div className='col-md-6 text-center'>
                            <b>Date</b>: 10/01/2022
                        </div>
                    </div>
                      </div>
                    <div className='card mt-4 p-4'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Sr.no</th>
                                    <th scope="col">Student Name</th>
                                    <th scope="col">Email ID</th>
                                    <th scope="col">Present</th>
                                    <th scope="col">Absent</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    StudentInfoData.map((item, index) => {
                                        return (

                                            <tr>
                                                <td scope="row">{item.id}</td>
                                                <td>{item.studentName}</td>
                                                <td>{item.emailId}</td>
                                                <td>{item.Prsent}</td>
                                                <td>{item.Absent}</td>
                                            </tr>

                                        );
                                    })
                                }


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StudentInfo