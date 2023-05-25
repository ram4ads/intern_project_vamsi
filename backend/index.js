const express = require("express");
const mongoose = require("mongoose");
const schema = require("./schema");
const bcrypt = require("bcrypt");
const cors = require("cors");


const app = express();
app.use(cors());
app.use(express.json({limit : "20mb"}));

mongoose.connect("mongodb+srv://vamsikrishna:6303979270@cluster-vamsi.rwzrgvu.mongodb.net/?retryWrites=true&w=majority")
.then(() => {
    console.log("mongodb successfully connected")
})


app.get("/" , (req,res) => {
    return res.json("backend app")
})

app.get("/getData" , async(req,res) => {
    const getData = await schema.find()
    res.json(getData);
})

app.post("/updateData" , async(req,res) =>  {
    
    
        try{
            const {firstName,lastName,email,gender,phoneNumber,password,confirmPassword, dateOfBirth,userPhoto,userSignature,webcamPhoto} = req.body; 
                     
             const EmailFind = await schema.findOne({email})
            if(EmailFind){
                return res.status(400).send("The Email Already Exist")
            }
            if(password !== confirmPassword){
                res.status(400).send('Password does not match')
            }
           
            const hashedPassword =await  bcrypt.hash(password, 10);
            const hashedConfirmPassword = await bcrypt.hash(confirmPassword, 10);
            const newUser= new schema({
                firstName,
                lastName,
                dateOfBirth,
                gender,
                phoneNumber,
                email,
                password : hashedPassword,
                confirmPassword : hashedConfirmPassword,
                userPhoto,
                userSignature,
                webcamPhoto
            })
            console.log("new user added");
            await newUser.save();
            res.status(200).send("Congratulation account is created..!")
        }catch(error){
            console.log(error)
    }
   
})

app.post("/user/login", async(req,res) => {
   
    const {email,password} = req.body;
    
    const password1 = password.toString();

    try {
        // Find the user by email
        const user = await schema.findOne({ email });
        console.log(user._id)
    
        if (!user) {
          return res.status(401).json({ message: 'Email does not exist' });
        }
    
        // Compare the provided password with the hashed password stored in the database
        const isPasswordValid = await bcrypt.compare(password1, user.password);
       
    
        if (!isPasswordValid) {
          return res.status(401).json({ message: 'Invalid Password' });
        } 
    
        // Authentication successful
        return res.status(200).json({ message: user });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
})

app.post("/HomePage" , async(req,res) => {
    const id = req.body.id 
    console.log(id)
    const user = await schema.findById(id)
    console.log(user)
    return res.status(200).json({message: user});
    

})

app.listen(8001, () => {
    console.log("port running at http://localhost:8001")
})
