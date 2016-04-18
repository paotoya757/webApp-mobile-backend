module.exports = function(Cliente) {

	var stripe = require("stripe")("sk_test_OC2jRFbh88gsf2sDlpwRslVO");
	//-------------------------------------------
	// Implementacion
	//-------------------------------------------

	Cliente.createCard = function(data,callback){
		console.log(data);
		token = data.token ;
		userid = data.userid;
		first_time = data.first_time;
		if( first_time ){
			stripe.customers.create({
				source:token,
				description:userid
			}, function(err,customer){
				if(err){
					console.log(err);
					callback(null,err.message);
				} 
				console.log(customer);
				Cliente.findOne({where:{id:userid}}, function(err,clienteObject){
					console.log("clienteObject >> "+clienteObject);
					clienteObject.updateAttributes({tokenTC:customer.id}, function(err,customer){
						console.log("attr updated successfully");
						callback(null,"Card successfully created");
					});
				});
			});
		}
		else{
			console.log("exec cust exists");

			Cliente.find({where:{id:userid}},function(err,resultset){
				if( resultset.length == 0) throw "no encontro usuario con ese id";
				var cust = resultset[0];
				console.log(resultset[0]);
				stripe.customers.createSource(cust.tokenTC,{source:token},
					function(err,card){
						if(err){
							console.log(err);
							callback(null,err.message);
						}
						console.log(card);
						callback(null,"Card successfully created");
					}
				);
			});
			
		}
	};

	//-------------------------------------------
	// Declaracion
	//-------------------------------------------

	Cliente.remoteMethod('createCard',
		{
			http:{path:'/createCard' , verb:'post' },
			accepts:{arg:"data", type:"object" , http:{source:'body'}} ,
			returns:{arg:'msg' , type:'string'}	
		}
	);


};
