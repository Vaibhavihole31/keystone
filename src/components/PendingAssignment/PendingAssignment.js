import React from 'react'
import './PendingAssignment.css'
import {Link} from 'react-router-dom'
import PendingAssignmentData from './PendingAssignmentData';

function PendingAssignment() {
  return (
    <>
    <div>
        <div className='container'>
        <h2 className='mt-4 text-center'>Pending Assignment</h2>
            <div className='card mt-4 p-4'>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Sr.no</th>
      <th scope="col">Topic Name</th>
      <th scope="col">Date Of Post</th>
      <th scope="col">Description</th>
      <th scope="col" className='text-center'>Status</th>
    </tr>
  </thead>
  
  <tbody>
            {
                PendingAssignmentData.map((item,index)=>{
                    return(
               
                        <tr>
                        <td scope="row">{item.id}</td>
                        <td>{item.TopicName}</td>
                        <td>{item.DateOfPost}</td>
                        <td>{item.Description}</td>
                        <td><Link to="/message">{item.Button}</Link></td>
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

export default PendingAssignment