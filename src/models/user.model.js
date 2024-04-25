import mongoose ,{Schema} from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jasonwebtoken";

const userschema=new Schema({
username:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true,
    index:true
},
email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true,
},

fullname:{
    type:String,
    required:true,
    unique:false,
    trim:true,
    index:true
},

avtar:{
    type:String,//cloudnary
    required:true
},

coverimage:{
    type:String,//cloudnary
    required:false
},

watchhistory:[
{
    type:Schema.Types.ObjectId,
    ref:"video"
}
],

password:{
    type:String,
    required:[true,"password is requied"]
},

refreshtokens:{
    type:String
},




},{timestamp:true})


userschema.pre("save",async function(next){
    if (!this.isModified("password"))
        {
            return next();
        }
this.password=bcrypt.hash(this.password,10)
next()
})

userschema.methods.isPasswordCorrect=async function(password){
return await bcrypt.compare(password,this.password)
}

userschema.methods.generateAcesstoken=async function(){
    jwt.sign({
        _id:this._id,
        email:this.email,
        username:this.username,
        fullname:this.fullname
},
process.env.ACCEES_TOKEN_SECRET{

expiresIn:process.env.ACEESS_TOKEN_EXPIRY

}

userschema.methods.generateRefreshtoken=async function(){
    jwt.sign({
        _id:this._id,
       
},
process.env.Refresh_TOKEN_SECRET{

expiresIn:process.env.REFRESH_TOKEN_EXPIRY

}

)
}

userschema.methods.generateRefreshtoken=async function(){
    
}
export const user=mongoose.model("user",userschema)

