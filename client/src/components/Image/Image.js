import React,{useState,useContext} from 'react';
import { UserData } from '../../App';
import "./Image.css";


const Image = () => {

    const {handleChange, data, handletab} = useContext(UserData);

    const [error, setError] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const fileSize = file.size / (1024 * 1024); // Convert to KB
    if (fileSize <= 1) {
      const imageUrl = URL.createObjectURL(file);
      handleChange({target : {name : "userPhoto", value : imageUrl}});
      setError('');
    } else {
      setError('File size exceeds the limit of 5 KB.');
    }
  };

  return (
    <div className='image-container'>
        {data.userPhoto && <img className="image" src={data.userPhoto} alt="random" />}
        <div>
        <input className='input-button' type='file' accept='image/*' onChange={handleImageUpload} name="userPhoto"/>
        {error && <p className='error'>{error}</p>}
        <button type="button" className='glow-on-hower' onClick={handletab}>Next</button>
        </div>
    </div>
  )
}

export default Image