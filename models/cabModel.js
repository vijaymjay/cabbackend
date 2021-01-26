module.exports = () =>{
	
	let d = new Date();  dash="-";  colon=":";
	let getdbdate=  d.getFullYear()+dash+(d.getMonth()+1)+dash+d.getDate()+" "+d.getHours()+colon+d.getMinutes()+colon+d.getSeconds();	

	const bookCab = function(req){
        return new Promise((resolve,reject)=>{	
            req.models.cab.find({'id':req.params.cab_id,'available':1},function(err,cabstatus){
                if(err){
                    reject('Error occured');
                }
                if(cabstatus.length>0){
                    cabstatus[0].available = 0;
                    cabstatus[0].save(function (err) {
                        if(err){
                            reject('Error occured')
                        }
                        resolve('Cab Booked Successfully')
                    });
				}
				else{
					reject('A user already in a ride, so book another ride')
				}
			
			})
        })
    }
	
	const unbookCab = function(req){
        return new Promise((resolve,reject)=>{	
            req.models.cab.find({'id':req.params.cab_id,'available':0},function(err,cabstatus){
                if(err){
                    reject('Error occured');
                }
                if(cabstatus.length>0){
                    cabstatus[0].available = 1;
                    cabstatus[0].save(function (err) {
                        if(err){
                            reject('Error occured')
                        }
                        resolve('Cab UnBooked Successfully')
                    });
				}
				else{
					reject("Cab isn't Booked")
				}
			
			})
        })
	}
	
	const cabList = function(req){
		return new Promise((resolve,reject)=>{	
            req.models.cab.find({'available':1},function(err,cablist){
                if(err){
                    reject('Error occured');
                }
                if(cablist.length>0){
                    resolve(cablist);
				}
				else{
					reject("Cab isn't Available")
				}
			
			})
        })
	}

	const storeCabHistory = function(req,status){
		return new Promise((resolve,reject)=>{	

			let obj = {cab_id:req.params.cab_id,status:status,booked_datetime:getdbdate}			

			req.models.cab_history.create(obj, function (err, histroyinfo) { 
				if(err){
					reject(err);
				}					
				resolve(histroyinfo);	
			}); 	
		})
	}

	const getCabHistory = function(req){
		return new Promise((resolve,reject)=>{	
            req.models.cab_history.find({'cab_id':req.params.cab_id},function(err,cabHistory){

                if(err){
                    reject('Error occured');
                }
                if(cabHistory.length>0){
                    resolve(cabHistory);
				}
				else{
					reject("cabHistory isn't Available")
				}
			
			})
        })		
	}
	
	
	return {
		bookCab:bookCab,
		unbookCab:unbookCab,
		cabList:cabList,
		storeCabHistory:storeCabHistory,
		getCabHistory:getCabHistory
	}
}

