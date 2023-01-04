import React from 'react'
import './SubmmitedAssignments.css'
import { Link } from 'react-router-dom'
import SubmmitedAssignmentsData from './SubmmitedAssignmentsData'

function SubmmitedAssignments() {
    return (
        <>
            <div>
                <div className='container'>
                    <h2 className='mt-4 text-center'>Submit Assignment</h2>
                    <div className='card mt-4 p-4'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Sr.no</th>
                                    <th scope="col">Topic Name</th>
                                    <th scope="col">Posted Date</th>
                                    <th scope="col">Submmitted Date</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    SubmmitedAssignmentsData.map((item, index) => {
                                        return (

                                            <tr>
                                                <td scope="row">{item.id}</td>
                                                <td>{item.TopicName}</td>
                                                <td>{item.PostedDate}</td>
                                                <td>{item.SubmittedDate}</td>
                                                <td><Link to="">{item.Status}</Link> <Link to="">{item.Button}</Link></td>
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

export default SubmmitedAssignments