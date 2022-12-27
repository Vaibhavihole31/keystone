import React from 'react'
import './LetestMeetup.css'
import randomImage from './random-image.webp'

function LetestMeetup() {
    return (
        <>
            <div className='container'>
                <div className='child-container'>
                    <h3 className='text-center mb-5'>Latest Meetup</h3>
                    <div className='row'>
                         <div className='col-md-6 child1-card'>
                            <h4 className='g-name text-center mb-5'>Group Name : Random </h4>
                         <img className='random-image' src={randomImage}/>
                         <div className='text-center description-card'>
                            IF any Description available
                         </div>
                         </div>
                         <div className='col-md-6'>
                            <div className='info-card text-center mt-2'>
                                 <b>Topic Name :</b> Random <br/><br/>
                                <b>Date :</b> 27/12/2022 <br/>
                                <b>Time :</b> 14:37 <br/>
                                <b>Venue :</b>

                                <div className='map-card'>

                                </div>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LetestMeetup