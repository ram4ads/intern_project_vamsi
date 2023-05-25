import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Cookies from "js-cookie";
import "../App.css";


const Column = () => {

    const [user, setUser] = useState() ;

  useEffect(() => {
    const id = Cookies.get("jwt_token");
       axios.post("http://localhost:8001/HomePage", {id} )
       .then((res) => {
        
        setUser(res.data.message )
       }).catch(err => {
           console.log(err)
       })
  },[]);

  return (
    <div className='grid-page'>
        <h1 className='u'>User Details :</h1>
        <div className='card-containers'>
         {user && 
           <>
           <div className='bc'>
            Name :
            <p className='tama'>{user.firstName + user.lastName}</p>
            </div>
           <div className='bc'>
            Date of Birth : 
            <p className='tama'>{user.dateOfBirth}</p>
            </div>
            <div className='bc'>
                Gender :
                <p className='tama'>{user.gender}</p>
                </div>
          <div className='bc'>
            phone number :
            <p>{user.phoneNumber}</p>
            </div> 
         <div className='bc'>
            photo :
            <img src={user.userPhoto} alt="user" className='ima'/>
            </div>
              <div className='bc'>
                webcam : 
                <img src={user.webcamPhoto} alt="webma" className='ima' />
                </div>
           <div className='bc'>
            Signature :
            <img src={user.userSignature} alt="sigma" className='ima' />
            </div> 
           </>}
           </div>
    </div>
  )
}

export default Column