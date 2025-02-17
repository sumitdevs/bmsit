import User from "../models/user.js";

export const handleHome = (req,res)=>{
    res.render('index',{user:'sumit'});
}

export const handleHomePost = async (req, res)=>{
    const user = req.body;
    try{
        const newuser = new User(user);
        newuser.save();
        console.log('user saved');
        res.status(200).redirect('/');
    } catch(error){
        console.log('error during saving');
    }
}

export const handleAbout = (req,res)=>{
    res.render('about');
}

