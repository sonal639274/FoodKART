import express from "express";
import cors from "cors"
import "dotenv/config.js"
import foodRouter from './routes/foodRoute.js'
import userRouter from "./routes/userRoute.js";
import { connectDb } from "./config/db.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// app config
const app = express();
const port = process.env.PORT;

// middleware
 app.use(express.json())
 app.use(cors())
 
 // db connection
 connectDb();

// api endpoint
app.use("/api/food",foodRouter);
app.use("/images", express.static('uploads'));
app.use("/api/user",userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)


app.get('/', (req, res)=>{
    res.send("Api working")
})
app.listen(port, ()=>{
    console.log('server connected..');
    
})