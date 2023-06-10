
const User = require('../models/booking');

exports.postBooking = async(req,res,next)=>{
    try{
        if(!req.body.userNumber){
            throw new Error('Phone number is Manadatory');
        }
        const name = req.body.userName;
        const email = req.body.userEmail;
        const number = req.body.userNumber;
        const data = await User.create({name:name,email:email,number:number});
        res.status(201).json({newUserDetails:data}); 
    }catch(err){
        console.log("backend err");
        res.status(500).json({
            error:err
        })
    }
}

exports.getBookings = async(req,res,next)=>{
    try{
        const users = await User.findAll();
        res.status(200).json({allUsers:users});
    }catch(err){
        console.log('get user is failed',JSON.stringify(err))
        res.status(500).json({error:err})
    }
}

exports.deleteBooking = async(req,res,next)=>{
    try{
        if(req.params.id == 'undefined'){
            console.log("ID is Missing");
            return res.status(400).json({err:"ID is Missing"})
        }
        const userId = req.params.id;
        await User.destroy({where:{id:userId}});
        res.status(200)
    }catch(err){
        res.status(500).json({error:err})
    }
}


exports.editBooking = async(req,res,next)=>{
    try{
        if(req.params.id == 'undefined'){
            console.log("ID is Missing");
            return res.status(400).json({err:"ID is Missing"})
        }
        const userId = req.params.id;
        await User.destroy({where:{id:userId}});
        res.status(200)
    }catch(err){
        res.status(500).json({error:err})
    }
}