const cabModel = require('../models/cabModel')();

module.exports = () =>{

    const bookCabById = async(req,res,next) => {
        try{
            let result = await cabModel.bookCab(req);  

            await cabModel.storeCabHistory(req,'Booked');

            res.status(200).send({status:result})	
        }
        catch(err){
            res.status(400).send({status:err})	
		}
    }
    
    const unbookCabById = async(req,res,next) => {
        try{
            let result = await cabModel.unbookCab(req);  
            await cabModel.storeCabHistory(req,'Unbooked');
            res.status(200).send({status:result})	
        }
        catch(err){
			res.status(400).send({status:err})	
		}
    }

    const cabList = async(req,res,next) => {
        try{
            let result = await cabModel.cabList(req);  
            res.status(200).send(result)	
        }
        catch(err){
			res.status(400).send({status:err})	
		}
    }

    const getCabHistory = async(req,res,next) => {
        try{
            let result = await cabModel.getCabHistory(req)
            res.status(200).send({status:'success',data:result})	
        }
        catch(err){
			res.status(400).send({status:err})	
		}
    }

    return {
        bookCabById:bookCabById,
        unbookCabById:unbookCabById,
        cabList:cabList,
        getCabHistory:getCabHistory
	}

}