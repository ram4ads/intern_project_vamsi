const express = require("express");
const mongoose = require("mongoose");
const schema = require("./schema");
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

app.post("/updateData" , async(req,res) => {
    
    
        try{
            const {firstName,lastName,email,gender,phoneNumber,password,confirmPassword, dateOfBirth,userPhoto,userSignature,webcamPhoto} = req.body; 
            console.log(req.body);          
             const EmailFind = await schema.findOne({email})
            if(EmailFind){
                return res.status(400).send("The Email Already Exist")
            }
            if(password !== confirmPassword){
                res.status(400).send('Password does not match')
            }
            const newUser= new schema({
                firstName,
                lastName,
                dateOfBirth,
                gender,
                phoneNumber,
                email,
                password,
                confirmPassword,
                userPhoto,
                userSignature,
                webcamPhoto
            })
            console.log(newUser);
            await newUser.save();
            res.status(200).send("Congratulation account is created..!")
        }catch(error){
            console.log(error)
    }
   
})

app.listen(8001, () => {
    console.log("port running at http://localhost:8001")
})
