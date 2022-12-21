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
             Lorem Ipsum is simply dummy text of 
             the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard
               dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled 
                 to make a type specimen book. It has survived
                  not only five centuries, but also the leap into 
                  electronic typesetting, remaining essentially unchanged. <br/><br/><br/>

             <div className='row'>
              <div className='col-md-6'>
                <div>
                <div className='text-center'>
                <button className='send-btn'><b>Send</b></button>
                </div>
                </div>
              </div>
              <div className='col-md-6'>
              <div className='text-center'>
                <button className='cancel-btn'><b>Cancel</b></button>
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