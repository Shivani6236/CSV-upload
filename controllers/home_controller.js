//import CSV
const CSV=require('../models/csv');

module.exports.Home=async function(req,res){
    try{
        let allfiles=await CSV.find();
        return res.render('home',{
            aa:allfiles
        })
    }catch(err){
        if(err){console.log("error while rendering home,",err);return}
    }
}
