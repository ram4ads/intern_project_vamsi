import { useState,createContext } from "react";
import axios from "axios";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import Form from "./components/Form/Form";
import Image from "./components/Image/Image";
import Signature from "./components/Signature/Signature";
import Webcam from "./components/Webcam/Webcam";
import "./App.css";



export const UserData = createContext();


function App() {

   const [tabindex, setTabindex] = useState(0);
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
    console.log("Save:", data);
    
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
  };

   const handletab = (prev) => {
    console.log(data);
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
      </Tabs>
    </div>
  </UserData.Provider>
    
  );
}

export default App;
