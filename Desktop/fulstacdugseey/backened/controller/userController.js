import { User } from "../models/userModel.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import cookieParser from "cookie-parser";

export const registerUser = async (req, res) => {
    try {
        const email = req.body.email,
            username = req.body.username,
            password = req.body.password; // Fix: Use req.body.password instead of req.body.email


        const existingUser = await User.findOne({
            $or: [
                { email: email.toLowerCase() },
                { username: username.toLowerCase() }
            ]
        });

        if (existingUser) {
            return res.status(400).json({ message: "Email or username is already taken" });
        }

        const newUser = new User({
            username: username,
            email: email,
            password: password
        });
        

       

        await newUser.save();
        return res.status(201).json(newUser);
    } catch (e) {
        console.error(e);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};



export const loginuser = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Use await to get the actual user data from the query
      const userExisting = await User.findOne({ email: email.toLowerCase() });
      console.log(userExisting)
  
      if (!userExisting) {
        return res.status(400).json({ message: "User does not exist" });
      }
  
      // Compare the provided password with the hashed password in the database
      const isPasswordMatch = await bcrypt.compare(password, userExisting.password);
  
      if (!isPasswordMatch) {
        return res.status(400).json({ message: "Invalid password" });
      }
  

       const expiredate = 7 * 24 * 60 * 60

        const token = jwt.sign({
            _id: userExisting._id,
            email:userExisting.email
        }, "secreeet", {expiresIn:expiredate})


        

        res.cookie("token", token, {
            httpOnly: true,
            secure: true,  // Change to true if served over HTTPS
            maxAge: expiredate * 1000
         });
         

        console.log(token)
      // Password is correct, proceed with your login logic
      // For example, you might generate a token here and send it in the response
  
      return res.status(200).send({...userExisting.toJSON(),expiredate});
  
    } catch (e) {
      console.error(e);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };