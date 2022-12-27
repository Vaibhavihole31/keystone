import React from 'react'
import './PreviousMeetup.css'
import randomImage from './images.png'

function PreviousMeetup() {
    return (
        <>
            <div className='container'>
                <div className='main-container'>
                    <h4 className='text-center mb-5'>Previous Meetups</h4>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='child-card'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <img className='random-img' src={randomImage} />
                                    </div>
                                    <div className='col-md-6 mt-5'>
                                        <b>Topic :</b> random <br /><br />
                                        <b>Date :</b>27/12/2022 <br />
                                        <b>Venue :</b> <br />

                                        <button className='mt-5 text-center btn-completed'>Completed ✅</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-6'>
                        <div className='child-card'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <img className='random-img' src={randomImage} />
                                    </div>
                                    <div className='col-md-6 mt-5'>
                                        <b>Topic :</b> random <br /><br />
                                        <b>Date :</b>27/12/2022 <br />
                                        <b>Venue :</b> <br />

                                        <button className='mt-5 text-center btn-completed'>Completed ✅</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row mt-5'>
                        <div className='col-md-6'>
                            <div className='child-card'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <img className='random-img' src={randomImage} />
                                    </div>
                                    <div className='col-md-6 mt-5'>
                                        <b>Topic :</b> random <br /><br />
                                        <b>Date :</b>27/12/2022 <br />
                                        <b>Venue :</b> <br />

                                        <button className='mt-5 text-center btn-completed'>Completed ✅</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-6'>
                        <div className='child-card'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <img className='random-img' src={randomImage} />
                                    </div>
                                    <div className='col-md-6 mt-5'>
                                        <b>Topic :</b> random <br /><br />
                                        <b>Date :</b>27/12/2022 <br />
                                        <b>Venue :</b> <br />

                                        <button className='mt-5 text-center btn-completed'>Completed ✅</button>
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

export default PreviousMeetup