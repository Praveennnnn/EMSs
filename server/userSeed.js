import User from "./models/User.js";
import bcrypt from 'bcrypt'
import connectToDatabass from './db/db.js'

const userRegister = async()=>{
    connectToDatabass()
    try{
            const hassPassword= await bcrypt.hash("admin",10)
            const newUser =new User({
                name:"admin",
                email:"admin@gmail.com",
                password:hassPassword,
                role:"admin"
            })
            await newUser.save()
    }catch(error){
        console.log(error)
    }
    
}

userRegister();

