const userModel = require('../models/userModel')();

module.exports = () =>{

    const userinfo = async(req,res,next) => {
        try{
            let result = await userModel.userInfo(req);  
            res.status(200).send(result)	
        }
        catch(err){
			res.status(400).send({status:err})	
		}
    }

    return {
        userinfo:userinfo
	}

}