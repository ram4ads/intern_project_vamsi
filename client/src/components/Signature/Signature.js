import React, { useRef, useContext } from 'react';
import SignatureCanvas from "react-signature-canvas"
import { UserData } from '../../App';
import "./Signature.css";

const Signature = () => {
    const canvasRef = useRef(null);
     const {handletab,data,handleChange} = useContext(UserData);
   
    const handleCaptureSignature = async() => {
      const canvas = canvasRef.current;
      const signatureImageURL = canvas.toDataURL();
      handleChange({target : {name : "userSignature", value : signatureImageURL}})
      
    }

  return (
    <div>
    
    <SignatureCanvas id="canva" ref={canvasRef} backgroundColor='white' penColor='green' canvasProps={{width: 500, height: 200, className: 'sigCanvas'}}  />
     <div className='button-container'>
    <button className="glow-on-hover c" onClick={handleCaptureSignature}>Capture Signature</button>
    {data.userSignature && <button type="button" className="glow-on-hover" onClick={handletab}>Next</button>}
    </div>
  </div>
  );
};

export default Signature;











































































