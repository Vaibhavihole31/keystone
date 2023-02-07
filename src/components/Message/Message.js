import React from 'react'
import './Message.css'

function Message() {
  return (
    <>
    <div className='container'>
        <div className='row'>
           <div className='col-md-3'></div>
           <div className='col-md-6'>
             <div className='message-card'>
             <h3 className='text-center mb-5'>Quick Message</h3>
             <textarea className="form-control mb-2 p-2" placeholder='Enter Your Message' rows="5" name="message" required /> <br/><br/>

             <div className='row'>
             <div className='col-md-6'>
              <div className='text-center'>
                <button className='cancel-btn'><b>Cancel</b></button>
                </div>
             </div>
              <div className='col-md-6'>
                <div>
                <div className='text-center'>
                <button className='send-btn'><b>Send</b></button>
                </div>
                </div>
              </div>
             </div>
             </div>
           </div>
           <div className='col-md-3'></div>
        </div>
    </div>
    </>
  )
}

export default Message