import React, {useState} from 'react'
import './ProfilePage.css'
import profileImg from './profile.png'
import PersonalDeatils from './../../components/PersonalDeatils/PersonalDeatils'
import FamilyDeatils from './../../components/FamilyDeatils/FamilyDeatils'
import AcadmicDetails from '../../components/AcadmicDetails/AcadmicDetails'


function ProfilePage() {
  const [personalDeatils, setPersonalDeatils] = useState(true);
  const [familyDeatils, setFamilyDeatils] = useState(false);
  const [acadmicDetails, setAcadmicDeatils] = useState(false);

 const personalDetailsHandler =  () => {
    setPersonalDeatils(true)
    setFamilyDeatils(false)
    setAcadmicDeatils(false)
  }

  const familyDetailsHandler =  () => {
    setPersonalDeatils(false)
    setFamilyDeatils(true)
    setAcadmicDeatils(false)
  }

  const acadmicDeatilsHandler =  () => {
    setPersonalDeatils(false)
    setFamilyDeatils(false)
    setAcadmicDeatils(true)
  }
  

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8'>

                        <div className='container'>
                            <div className='profile-conteiner'>
                                <div className='row'>

                                    <div className='col-md-4'>
                                        <img src={profileImg} className='header-img mt-3 mx-auto d-block' />
                                    </div>

                                    <div className='col-md-8 mt-3'>
                                        <div>
                                            <div className='student-info'>
                                                <b>Student Name :</b> ABC XYZ PQR <br />
                                                <b>Email ID :</b> abc@gmail.com <br />
                                                <b>Contact No :</b> 7821011979 <br />
                                                <b>LinkedIn Profile :</b> www.linkdiln-abc-31.com
                                            </div>
                                        </div>
                                    </div>

                                    <div className='row mt-3'>
                                        <div className='col-md-4'>
                                            <div className='text-center submit-assignment-card'>
                                                <h1 className='text-center'>20</h1>
                                                <h4>Submitted Assignment</h4>
                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <div className='text-center pending-assignment-card'>
                                                <h1 className='text-center'>00</h1>
                                                <h4 className='pending-assignment'>Pending Assignment</h4>
                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <div className='text-center attendance-card'>
                                                <h1 className='text-center'>70%</h1>
                                                <h4>Attendance</h4>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4'>
                        <div className='ks-container'>
                            <div className='ks-name-conatiner'>
                                <b className='ks-child-container'>Keystone School of Engineering College in Pune, Maharashtra</b>
                            </div>
                            <div className='mt-5 text-center'>
                                <button className='personal-deatils-btn' onClick={personalDetailsHandler}><b>Personal Deatils</b></button> <br /><br />
                                <button className='family-deatils-btn'onClick={familyDetailsHandler}><b>Family Deatils</b></button>  <br /><br />
                                <button className='acadmic-deatils-btn' onClick={acadmicDeatilsHandler}><b>Academic Deatils</b></button>  <br /><br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='information-container'>
                    <div className='row'>
                                { personalDeatils && <PersonalDeatils/>  }
                                {familyDeatils && <FamilyDeatils/>}
                                {acadmicDetails && <AcadmicDetails/>}
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProfilePage