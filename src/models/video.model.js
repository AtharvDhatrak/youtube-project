import mongoose ,{Schema} from "mongoose";
import mongooseAggregatePaginate from  "mongoose-aggregate-paginate-v2";
const videoschema=new Schema({
video:{
    type:String,//cloudnary
    required:true,
},

thumbnail:{
    type:String,//cloudnary
    required :true
},
title:{
    type:String,
    required :true
},
description:{
    type:String,
    required :true
},

duration:{
    type:Number,//cloudnary
    required :true
},

views:{
    type:Number,
    default: 0
},

ispublished:{
type:Boolean,
default:true
},

owner:{
type=Schema.Type.ObjectId,
ref:"user"
},


}, {timestamp:true})

videoschema.plugin(mongooseAggregatePaginate)

export const video=mongoose.model("video", videoschema)