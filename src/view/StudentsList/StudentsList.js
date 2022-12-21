import React from 'react'
import './StudentsList.css'
import StudentData from './StudentData'
import {Link} from 'react-router-dom'

function StudentsList() {
  return (
    <>
      <div>
        <div className='container'>
        <h2 className='mt-4 text-center'>Student List</h2>
            <div className='card mt-4 p-4'>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Sr.no</th>
      <th scope="col">Student Name</th>
      <th scope="col">Email ID</th>
      <th scope="col">Contact Number</th>
      <th scope="col" className='text-center'>Profile</th>
    </tr>
  </thead>
  
  <tbody>
            {
                StudentData.map((item,index)=>{
                    return(
               
                        <tr>
                        <td scope="row">{item.id}</td>
                        <td>{item.studentName}</td>
                        <td>{item.emailId}</td>
                        <td>{item.contactNumber}</td>
                        <td><Link to="/studentprofile">{item.Status}</Link> <Link to="/studentprofile">{item.Button}</Link></td>
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

export default StudentsList