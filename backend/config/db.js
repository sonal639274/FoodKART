import mongoose from "mongoose";

const mongo = process.env.MONGO;
export const connectDb = async ()=>{
    await mongoose.connect(mongo).then(()=>{
        console.log("mongo connected");
    }).catch((erroe)=>{
        console.log("fgsf",erroe);
        
    })
}