import React, {useContext } from "react";
import { UserData } from "./Signup";
import "../App.css";



const Form = () => {
 
  const {handleChange, data, handletab} = useContext(UserData);

  



  const handleSubmit = (formData) => {
    // Handle form submission
    console.log(formData);
    handletab();
  };



  return (
    <div className="form-contianer">
      <h1>Passport Registration</h1>
      <form  onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={data.firstName}
          onChange={handleChange}
          placeholder="Firstname"
        
          required
        />
        <br />

        <input
          type="text"
          name="lastName"
          value={data.lastName}
          onChange={handleChange}
          placeholder="LastName "
        
          required
        />
       
        <br />

        <input
          type="date"
          name="dateOfBirth"
          value={data.dateOfBirth}
          min="1923-05-15"
          max="2023-05-15"
          onChange={handleChange}
          placeholder="Date of birth "
          required
        />
        
        <br />
        <select
          name="gender"
          value={data.gender}
          onChange={handleChange}
          placeholder="Gender check the list"
          required
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        
        <br />
        <input
          type="tel"
          name="phoneNumber"
          value={data.PhoneNumber}
          onChange={handleChange}
          placeholder="Mobile Number "
          required pattern="[0-9]{10}" 
        />
       
        
        <br />

        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          placeholder="Email "
          required
        />
        
        <br />
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
          placeholder="Password "
          minLength="8"
          required
        />
        
        <br />

        <input
          type="password"
          name="confirmPassword"
          value={data.confirmpassword}
          onChange={handleChange}
          placeholder="confirm Password "
          minLength="8"
          required
        />

       
        <br />
       
         <button type="submit" className="glow-on-hover" >
          Next
        </button>
      </form>
    </div>
  );
};

export default Form;
