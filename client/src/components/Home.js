import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Cookies from "js-cookie";
import html2canvas from "html2canvas";
import "../App.css";


const MainPage = () => {

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

  const navigate = useNavigate();
  
  const handleLogout = () => {
        Cookies.remove("jwt_token")
        navigate("/login");
  }

  const handleDownload = () => {
    const divElement = document.getElementById('divId'); // Replace 'divId' with the ID of your <div> element

    html2canvas(divElement, { allowTaint: true, useCORS: true })
      .then((canvas) => {
        // Convert canvas to base64 image data
        const imageData = canvas.toDataURL('image/png');

        // Create a link element and set the image data as the href attribute
        const link = document.createElement('a');
        link.href = imageData;
        link.download = 'download.png'; // Specify the desired file name and extension
        link.click();
      })
      .catch((error) => {
        console.error('Error capturing div content:', error);
      });
  };


  return (
    <div className='home-page-container'>
         <nav className='home-nav-container'>
          <h1 className="home-nav-head">💠Govt of India</h1>
          <button type="button" className='glow-on-hover' onClick={handleLogout}>Logout</button>
         </nav>
         <div className='home-page-body'>
          {user && 
             <div className='card' id="divId">
                 <h1 className='passport'>Passport</h1>
                 <div className='card-body'>
                  <img className='passport-image' src={user.userPhoto} alt="main" />
                  <div className='passport-details'>
                    <h1 className='h1-f'>Name : <span className='s-m'>{user.firstName + " " + user.lastName}</span></h1>
                    <p className="h1-f">Gender : <span className='s-m'>{user.gender}</span></p>
                    <p className='h1-f'>Date-of-Birth : <span className='s-m'>{user.dateOfBirth}</span></p>
                    <p className='h1-f'>phoneNumber : <span className='s-m'>{user.phoneNumber}</span></p>
                  </div>
                 
                 </div>
                 <p className='h1-f va'>Signature : </p>
                 <img className='signature' src={user.userSignature} alt="signature"/>
             </div>
}
             <button className='glow-on-hover bn' type="button" onClick={handleDownload}>Download</button>
          
           {user && 
           <>
           <div className='bc'><h1 className='tama'>{user.firstName + user.lastName}</h1></div>
           <div className='bc'><h1 className='tama'>{user.dateOfBirth}</h1></div>
            <div className='bc'><h1 className='tama'>{user.gender}</h1></div>
          <div className='bc'>{user.phoneNumber}</div> 
         <div className='bc'><img src={user.userPhoto} alt="user" className='ima'/></div>
              <div className='bc'><img src={user.webcamPhoto} alt="webma" className='ima' /></div>
           <div className='bc'><img src={user.userSignature} alt="sigma" className='ima' /></div> 
           </>}
         </div>
    </div>
  )
}

export default MainPage