
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";
import axios from "axios";
import "../App.css";

const Authentication = ( ) => {

  const navigate = useNavigate();

     const handleLogin = (event) => {
          event.preventDefault();
          const email = event.target[0].value;
          const password = event.target[1].value;
         const body = {email,password}
          axios.post("http://localhost:8001/user/login?xslt=json.xsl", body)
          .then((response) => {
             Cookies.remove();
             Cookies.set("jwt_token", response.data.message._id)
             navigate("/")
          }).catch(err => {
            console.log(err)
          })

     } 

  return (
    <div>
      <form onSubmit={handleLogin}>
      <h1 className='login-head'>Welcome back</h1>
      <div className='login-input-container'>
        <label className='login-label' htmlFor="email">Email</label>
        <input className="login-input" id="email" name="email" type="email" placeholder='Email' required/>
      </div>
      <div className='login-input-container'>
        <label className='login-label' htmlFor="password">Password</label>
        <input className='login-input' type="password" name="password" id="password" placeholder='Password' required />
       </div>
       <button type="submit" className='Login-button glow-on-hover'>Login</button>
       </form>
    </div>
  )
}

export default Authentication;