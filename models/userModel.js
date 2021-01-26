module.exports = () =>{
	
	let d = new Date();  dash="-";  colon=":";
	let getdbdate=  d.getFullYear()+dash+(d.getMonth()+1)+dash+d.getDate()+" "+d.getHours()+colon+d.getMinutes()+colon+d.getSeconds();	

	const userInfo = function(req){
		return new Promise((resolve,reject)=>{	
            req.models.user.find({},function(err,userdetail){
                if(err){
                    reject('Error occured');
                }
                if(userdetail.length>0){
                    resolve(userdetail);
				}
				else{
					reject("User isn't Available")
				}
			
			})
        })
	}
	
	return {
		userInfo:userInfo,
	}
}

