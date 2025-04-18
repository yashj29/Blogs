import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://yashj29:ProjectBlogs@cluster0.arvrrqy.mongodb.net/blog-app')
    console.log("DB Connected");

}