module.exports = function(Oferta,Cliente,Ticket) {
	var stripe = require("stripe")("sk_test_OC2jRFbh88gsf2sDlpwRslVO");
	//-------------------------------------------
	// Implementacion
	//-------------------------------------------

	Oferta.buyTickets = function(data,callback){
		console.log("eyy esto es lo que llego al server >> " + data)
		var oferta = data.oferta;
		var amount = data.amount;
		var userid = data.userid;

		Oferta.beginTransaction(function(err,tx){
			if(err) console.log('errorrrr -> ' + err);
			Oferta.findById(oferta.id, function(err,ofertaObj){
				console.log(ofertaObj);
				if(ofertaObj.tickets_disponibles > 0){
					Cliente.findOne({where:{id:userid}},function(err,clienteObj){
						console.log(clienteObj);
						stripe.charges.create({
							amount:amount,
							currency:'usd',
							customer: clienteObj.tokenTC
						}
						,function(err,charge){
							if(err) console.log(err);

							//update ofertas - ticket - cliente
							ofertaObj.tickets_disponibles--;
							var options = {transaction:tx};

							ofertaObj.save(options,function(err,ofertaInstance){
								if(err){ options.transaction.rollback(); }
								console.log("oferta.tickets_disponibles-- >> "+instance);
								Ticket.create(options,{
									costoTotal:amount,
									numPersonas:1,
									validado:false,
									clienteid:userid,
									ofertaid:ofertaInstance.id
								} 
								, function(err,ticketModel){
									if(err){ options.transaction.rollback(); }
									console.log( "AT LAST ticket done:"+ticketModel);
									options.transaction.commit(function(err){});
								});
							});

						});
					});
				}
				else
					tx.rollback(function(err){
						console.log("rollback executaed");
						callback(null,"No more tickets for sale");
					});
			});
		});
	};

	//-------------------------------------------
	// Declaracion
	//-------------------------------------------

	Oferta.remoteMethod('buyTickets',
		{
			http:{path:'/buyTickets' , verb:'post' },
			accepts:{arg:"data", type:"object" , http:{source:'body'}} ,
			returns:{arg:'msg' , type:'string'}	
		}
	);
};
