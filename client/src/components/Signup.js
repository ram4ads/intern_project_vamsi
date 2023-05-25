import { useState,createContext} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import Form from "./Form";
import Image from "./Image";
import Signature from "./Signature";
import Webcam from "./Webcam";
// import Speech from "./Speech";
import "../App.css";


export const UserData = createContext();



const Signup = () => {
    const [tabindex, setTabindex] = useState(0);
    const navigate = useNavigate();
    const [data, setData] = useState({
     firstName: "",
     lastName: "",
     dateOfBirth: "",
     gender: "",
     phoneNumber: "",
     email: "",
     password: "",
     confirmPassword: "",
     userPhoto : null,
     userSignature : null,
     webcamPhoto : null
    })
  
    const handleChange = async(e) => {
     
         setData({ ...data, [e.target.name]: e.target.value });
      
   };
  
   const handleSubmit = (e) => {
     e.preventDefault();
     
     
      axios.post("http://localhost:8001/updateData",data)
      .then(()=> {
       console.log("succesfully sended")
      }).catch((err) => {
         console.log("error from frontend while sending data" , err)
      })
  
      setData({firstName: "",
      lastName: "",
      dateOfBirth: "",
      gender: "",
      phoneNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
      userPhoto : null,
      userSignature : null,
      webcamPhoto : null})

      navigate("/")
   };
  
    const handletab = (prev) => {
            setTabindex(pre => pre + 1)
    }
  
     
  
   return (
     <UserData.Provider value={{data, handleChange, handleSubmit, handletab}} >
       <div className="App">
       <Tabs className="Tabs" selectedIndex={tabindex} onSelect={(pre) => setTabindex(pre)}>
         <TabList>
           <Tab>Registration</Tab>
           <Tab>Upload Image</Tab>
           <Tab>Signature</Tab>
           <Tab>Webcam</Tab>
           {/* <Tab>Speech</Tab> */}
         </TabList>
  
         <TabPanel>
           <Form />
           </TabPanel>
         <TabPanel>
           <Image />
         </TabPanel>
         <TabPanel>
           <Signature />
         </TabPanel>
         <TabPanel>
            <Webcam />
         </TabPanel>
         {/* <TabPanel> */}
           {/* <Speech /> */}
         {/* </TabPanel> */}
         
       </Tabs>
     </div>
   </UserData.Provider>
     
   );
  }

  
  export default Signup;