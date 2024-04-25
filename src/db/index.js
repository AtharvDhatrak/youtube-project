import  mongoose  from "mongoose";
import {DB_NAME} from "../constants.js";

const connectdb=async()=>{
    try{
     const connectinstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)//uti/databasename
        console.log(`database connected ${connectinstance.connection.host}`);
    }

    catch(error){
        console.log(`connection error ${error}`)
        process.exit(1);
    }
}

export default connectdb;