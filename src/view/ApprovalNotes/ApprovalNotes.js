import React from 'react'
import './ApprovalNotes.css'
import StudentData from './ApprovalNotesData'
import {Link} from 'react-router-dom'

function ApprovalNotes() {
  return (
    <>
      <div>
        <div className='container'>
        <h2 className='mt-4 text-center'>Approval Notes</h2>
            <div className='card mt-4 p-4'>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Sr.no</th>
      <th scope="col">Date</th>
      <th scope="col">Topics</th>
      <th scope="col">Source / Link</th>
      <th scope="col" className='text-center'>Status</th>
    </tr>
  </thead>
  
  <tbody>
            {
                StudentData.map((item,index)=>{
                    return(
               
                        <tr>
                        <td scope="row">{item.id}</td>
                        <td>{item.date}</td>
                        <td>{item.topic}</td>
                        <td>{item.link}</td>
                        <td><Link to="/message">{item.Status}</Link> <Link to="/studentprofile">{item.Button}</Link></td>
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

export default ApprovalNotes