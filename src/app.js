import express from "express"
import cors from "cors"
import cookieParser from "cokkie-parser"

const app=express()
app.use(cors(
    {
        origin:process.env.CORS_ORIGIN,
        credentials:true
    }
))
//midlewares
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

//routes
import userRouter from "./routes/user.routes.js"

//routes declaration
app.use("/api/v1/users",userRouter)

export{app}