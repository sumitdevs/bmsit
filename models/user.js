import mongoose from 'mongoose';

const userschema = new mongoose.Schema(
    {
        fname:{
            type:String,
            required:true
        },
        lname:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required: true
        }
    }
);

const User = mongoose.model('User', userschema);
export default User;