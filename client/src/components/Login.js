
import { useNavigate  } from "react-router-dom";
import Authentication from "./Authentication";
import pass from "../assets/th.jpg";
//import Speech from "./Speech";
import "../App.css";


function Login() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/signup")
    }
        return (
          <div className="home-page">
              <div className="home-part-container">
                  <div className="login-container">
                    <div className="login-top">
                      <h1 className="login-govt">💠Govt💠</h1>
                      </div>
                        <Authentication />
                        <div className="login-bottom">
                          <p className="already">Don't have an account ?</p>
                          <button type="button" className="signup" onClick={handleClick}>Sign up</button>
                          {/*<Speech />*/}
                        </div>
                  </div>
                  <div className="image-container-123">
                    <img src={pass} alt="passport" className="home-page-image"/>
                  </div>
              </div>
          </div>
        )
 
}

export default Login;
