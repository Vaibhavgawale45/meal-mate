import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://vaibhav:wgfyyuiusI5xhjZL@study-material.xvqs0bh.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   
}
