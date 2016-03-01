module.exports = function(app) {
	
	var ds = app.dataSources.mypgsql;
	  ds.automigrate('Categoria', function(err) {
		if (err) throw err;		 
	  });

	  ds.automigrate( 'Oferta' , function( err ) {
	  	if(err) throw err;
	  });

	  ds.automigrate( 'Cliente' , function( err ) {
	  	if(err) throw err;
	  });

};