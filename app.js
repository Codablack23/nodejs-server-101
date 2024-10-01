

import express from "express";
import {Schema,connect,model} from "mongoose";
import { config } from "dotenv";
config()

const PORT = process.env.PORT;
const connectionString = process.env.MONGODB_URI;

connect(connectionString)
.then((data)=>{
    console.log("DB Connected")
})
.catch(err=>console.error(err));

const UserSchema = new Schema({
    name:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:String,
    }
})

const User = model("User", UserSchema)

//

// import {MongoClient} from "mongodb"

// MongoClient.connect(connectionString)
// .then((data)=>{
//     console.log("DB Connected")
// })
// .catch(err => console.error(err));

const app = express()

// view products
// view a single product
// create orders
// edit orders
// delete orders
// authentication (sign users in , sign users out, register and check authenticaion)



// express middlewares
app.use(express.json())
app.use((req,res,next)=>{
    // if(!req.url.includes("products")){
    //     console.log(`URL Passed: ${req.url}`)
    //     return next();
    // }
    // res.send("Intercepted by Middleware")
    next()
})

// Request middlewares
//GET //POST //PUT //PATCH //DELETE
app.get("/",async(req,res)=>{
   res.json({
    message:"hello world",
   })
})
app.get("/products",async(req,res)=>{
   res.json({
    message:"Hello World"
   })
})
app.get("/products/:productId",(req,res)=>{
    const params = req.params
    const product = params.productId
    res.send(product)
})

app.post("/login",(req,res)=>{
    const body = req.body
    res.json({
        message:"logged in successfully",
        body,
    })
})

app.listen(PORT,()=>{
    console.log(`Server started at ${PORT} \nurl: http://localhost:${PORT}`)
})