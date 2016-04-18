module.exports = function(app) {
	
	var ds = app.dataSources.mypgsql;

        ds.automigrate('Ticket', function(){

        });

          ds.automigrate('Lugar', function(){
            
          });
            
    	  ds.automigrate('Categoria', function(err) {
    		if (err) throw err;		 
    	  		var data =
    	  			[
    	  				{
    	  					"nombre":"SALUD"
    	  				},
    	  				{
    	  					"nombre":"DIVERSION"
    	  				},
    	  				{
    	  					"nombre":"ELECTRODOMESTICOS"
    	  				},
    	  				{
    	  					"nombre":"MERCADO"
    	  				},
    	  				{
    	  					"nombre":"RESTAURANTE"
    	  				}
    	  			]  
    	  		;
    	  		app.models.Categoria.create( data , function(){} );
    	  });

    	  ds.automigrate( 'Oferta' , function( err ) {

          });

        ds.autoupdate('Cliente' , function(){}) ;

/* 
    	  ds.automigrate( 'Cliente' , function( err ) {
    	  	app.models.Cliente.create(  
  [{
    "no_id": 1,
    "genero": "F",
    "nombre": "Beverly Elliott",
    "email": "belliott0@eepurl.com",
    "edad": 22,
    "tokenTC": "1DKBsrXvibGUVeR557o79fbBK9zF9AH4pz",
    "password": "rFzfWtZiHoK",
    "username": "belliott0"
  }, {
    "no_id": 2,
    "genero": "F",
    "nombre": "Jessica Cunningham",
    "email": "jcunningham1@yale.edu",
    "edad": 47,
    "tokenTC": "1NAo8Ek6oTpTxTVG4U29BbBUY7y7o3bLJA",
    "password": "Hxpj280pw6",
    "username": "jcunningham1"
  }, {
    "no_id": 3,
    "genero": "M",
    "nombre": "Eugene Hudson",
    "email": "ehudson2@typepad.com",
    "edad": 34,
    "tokenTC": "1GKXv12fxLjHnst4HtUqjEkkpztUXZfs12",
    "password": "Qd3IW9e8SVpd",
    "username": "ehudson2"
  }, {
    "no_id": 4,
    "genero": "M",
    "nombre": "Steve Gibson",
    "email": "sgibson3@canalblog.com",
    "edad": 34,
    "tokenTC": "1NvT8C3nZ5Fnv92ahjvd1HYDCDNhcXGBXE",
    "password": "hKc3f5uX0sYE",
    "username": "sgibson3"
  }, {
    "no_id": 5,
    "genero": "F",
    "nombre": "Christine Spencer",
    "email": "cspencer4@senate.gov",
    "edad": 50,
    "tokenTC": "15imjQKkBitA1byDx7uFkavykWF9Hm8CWL",
    "password": "cshRoxhbR",
    "username": "cspencer4"
  }, {
    "no_id": 6,
    "genero": "F",
    "nombre": "Denise Bowman",
    "email": "dbowman5@usnews.com",
    "edad": 30,
    "tokenTC": "1NbyrN3C8xfTBhiQ1t59epXDrbc7zBQokc",
    "password": "w8Kdqp2",
    "username": "dbowman5"
  }, {
    "no_id": 7,
    "genero": "F",
    "nombre": "Tammy Duncan",
    "email": "tduncan6@google.ca",
    "edad": 24,
    "tokenTC": "1KruaMwh334ToAS65QGJQ6wBAHcQUtuXY2",
    "password": "Hsxhl7Emxu",
    "username": "tduncan6"
  }, {
    "no_id": 8,
    "genero": "F",
    "nombre": "Jacqueline Hall",
    "email": "jhall7@meetup.com",
    "edad": 25,
    "tokenTC": "13ove4G7pmifG5Yu6qEkDZn7ezvv5X9hKx",
    "password": "hHh9plW80k",
    "username": "jhall7"
  }, {
    "no_id": 9,
    "genero": "F",
    "nombre": "Betty Marshall",
    "email": "bmarshall8@discuz.net",
    "edad": 48,
    "tokenTC": "1E1taRam4BUcvWfsb1qKCGDnSb3ByekPiy",
    "password": "KkQ8kXDROGU",
    "username": "bmarshall8"
  }, {
    "no_id": 10,
    "genero": "F",
    "nombre": "Ruby Simmons",
    "email": "rsimmons9@vistaprint.com",
    "edad": 22,
    "tokenTC": "1JMYHxKo1v7h5jHS1g6FC1ozZdSgqv1Wbf",
    "password": "ypUAhvo6",
    "username": "rsimmons9"
  }, {
    "no_id": 11,
    "genero": "F",
    "nombre": "Joan Stone",
    "email": "jstonea@cbsnews.com",
    "edad": 20,
    "tokenTC": "1GoGuSjoRADReNyBPhLydDkwDi6bnUBf6j",
    "password": "gINZI0M",
    "username": "jstonea"
  }, {
    "no_id": 12,
    "genero": "M",
    "nombre": "Harry Green",
    "email": "hgreenb@hhs.gov",
    "edad": 27,
    "tokenTC": "19i6275gAxYXcoWQW8hxWPfasqyAWquFes",
    "password": "baB7LBiutEi9",
    "username": "hgreenb"
  }, {
    "no_id": 13,
    "genero": "F",
    "nombre": "Pamela Moreno",
    "email": "pmorenoc@unesco.org",
    "edad": 40,
    "tokenTC": "1bfdi6TU7UsYyfY9cbxcNaW1kxfesLCEG",
    "password": "qGTbDFUDS",
    "username": "pmorenoc"
  }, {
    "no_id": 14,
    "genero": "M",
    "nombre": "Carlos Sims",
    "email": "csimsd@artisteer.com",
    "edad": 27,
    "tokenTC": "1N52h7rF83XTQu5W4fmQQwDuKcFKtLc7Hp",
    "password": "pZAR3G",
    "username": "csimsd"
  }, {
    "no_id": 15,
    "genero": "F",
    "nombre": "Rose Rivera",
    "email": "rriverae@desdev.cn",
    "edad": 40,
    "tokenTC": "16RoT21MkFPkhriKvQqXD83FnDCJVzYXMh",
    "password": "bMQudFNnqrf",
    "username": "rriverae"
  }, {
    "no_id": 16,
    "genero": "F",
    "nombre": "Doris Williamson",
    "email": "dwilliamsonf@squarespace.com",
    "edad": 29,
    "tokenTC": "1Ck7N3aGYfTM8H8wEFBB4Tob4DjYZ7y5yP",
    "password": "w7Nbldn",
    "username": "dwilliamsonf"
  }, {
    "no_id": 17,
    "genero": "F",
    "nombre": "Christine Bell",
    "email": "cbellg@ameblo.jp",
    "edad": 27,
    "tokenTC": "1ECVA33dpiAYy2FTfBwc8cSpc8v2kWHomM",
    "password": "7m1VqhNUHHO",
    "username": "cbellg"
  }, {
    "no_id": 18,
    "genero": "F",
    "nombre": "Ashley Simmons",
    "email": "asimmonsh@dot.gov",
    "edad": 39,
    "tokenTC": "1LMpRCnQTZrHt7agfKxFodAC3cMpfbE7eV",
    "password": "aWAuEZ4bOrVM",
    "username": "asimmonsh"
  }, {
    "no_id": 19,
    "genero": "F",
    "nombre": "Sara Moore",
    "email": "smoorei@opensource.org",
    "edad": 47,
    "tokenTC": "15tuqAfwyiiFAYkHBgVY6FMw6HRPvzbqgX",
    "password": "M7IoLPTK",
    "username": "smoorei"
  }, {
    "no_id": 20,
    "genero": "F",
    "nombre": "Judith Johnson",
    "email": "jjohnsonj@people.com.cn",
    "edad": 21,
    "tokenTC": "18kVm7NXZt9EJ4Vj8K51rbxYFWjHrpd7qV",
    "password": "8eY8xkLvy78",
    "username": "jjohnsonj"
  }]
  	  	, function(err){ if (err) throw err } );
  	  	if(err) throw err;
	  });
*/

};