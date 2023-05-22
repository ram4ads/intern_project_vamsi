import React, { useRef, useState, useContext } from 'react';
import { UserData } from '../../App';

const Webcam = () => {

  const {handleChange,handleSubmit,data} = useContext(UserData);
  const videoRef = useRef();
  const canvasRef = useRef();
 
  const [webcamOpen, setWebcamOpen] = useState(false);

  const startWebcam = () => {
    handleChange({target : {name : "webcamPhoto", value : "" }})
    setWebcamOpen(true)
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        setWebcamOpen(true);
      })
      .catch((error) => {
        console.log('Error accessing webcam:', error);
      });
  };

  const captureImage = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

    const imageDataURL = canvas.toDataURL();
    console.log(imageDataURL);
    handleChange({target : {name : "webcamPhoto",value : imageDataURL}});

    // Stop the webcam stream
    video.srcObject.getTracks().forEach((track) => track.stop());
    setWebcamOpen(false);
  };

  return (
    <div>
      {!webcamOpen && (
        <button onClick={startWebcam}>Start Webcam</button>
      )}

      {webcamOpen && (
        <div>
          <video ref={videoRef}></video>
          <br />
          <button onClick={captureImage}>Capture Image</button>
        </div>
      )}

      {data.webcamPhoto && (
        <div>
          <p>Captured Image:</p>
          <img src={data.webcamPhoto} alt="Captured" />
          <div>
            <button type="button" className='glow-on-hower' onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      )}

      <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>

      
    </div>
  );
};

export default Webcam;
