$(function(){
	/**************************jeudi******************/

	let images = [
	"http://wowslider.com/sliders/demo-69/data1/images/bubbles.jpg",
	"http://wowslider.com/sliders/demo-76/data1/images/purse407176_1280.jpg",
	"http://cruzjon.com/projects/image-slider/build/img/sur.jpg"];
	let index = 0;

	setInterval(function(){

		if(index == images.length) // Verification dernier image
			index = 0;

		$("#sliderImage").attr("src",images[index]); // Modification source image via array

		index++; // increment index


	},3000);// document readi, il vas etre executer une foix tt le programe soit fini 

	
	var request = $.ajax({
	  url: "https://jsonplaceholder.typicode.com/users",
	  method: "GET",// requette en ajax , en quelle page en va envoyer notre requette avec quelle methode
	  dataType: "json" // optionel,
	});
	 
	request.done(function( data ) {
		var content = "";
		data.forEach(function(element){// fonction pour changer les nom de Categorie
			content += '<li id="User-'+element.id+'"><a href="#">'+element.name+'</a></li>';
		});
		$("#right_column ul").html(content);
		/************ START NEW **************/
		$("#right_column ul > li").click(function(e) {
			e.preventDefault();
			
			/** Recuperation de l'id **/
			var idUser = $(this).attr("id");
			console.log(idUser.split("-")); // User-3 = array("User",3); // Couper par rapport au caratere '-'
			idUser = idUser.split("-");
			
			/** Requet Ajax **/
			var ficheUser = $.ajax({
				url: "https://jsonplaceholder.typicode.com/users",
				method: "GET",
				data: { id: idUser[1] },
				dataType: "json" // optionel
			});
			ficheUser.done(function( dataUser ) {
				console.info(dataUser[0].username+" "+dataUser[0].email);
			});
		}); //la repense de la requette 
		/************ END NEW **************/
	});
	 
	request.fail(function( jqXHR, textStatus ) {
	  alert( "Request failed: " + textStatus );// la repense de la requette en cas de pas de reponse 
	});

	/**************************Vendredi*****************/

	$.ajax({
		url: "https://jsonplaceholder.typicode.com/posts",// pour envoyer la requette 
		method: "GET",
		dataType: "json" // optionel
	}). done(function(dataPosts){
		console.log(dataPosts);
		for(let i=0 ; i<4; i++){
			console.log($(".one_quartier > strong").eq(i).text(dataPosts[i].title));// recuperer de la classe one-quarter 
						//de tout la balise strong et on demande demander de changer les titre 
						//dataPosts[i].body.slice(0, 97)+ "...";
						console.log($("jsDescription").eq(i).text(dataPosts[i].body.slice(0, 97)+"..."));
						$(".one_quarter a").eq(i).click(function(e){
								
							e.preventDefault();
							if( $(this).text() != "Read less >>")
								{
								$("jsDescription").eq(i).text(dataPosts[i].body);
								$(this).text("Read less >>");

									}
							else		{
								$("jsDescription").eq(i).text(dataPosts[i].body.slice(0, 97)+"...");
								$(this).text("Read More >>");
									}

								})

			}
		})
	.fail(function(jqXHR,textStatus){
		alert("Request failed: " + textStatus);
	});

		/**************************Vendredi*****************/
	let increment = 0;
	let picture;

	$.get("https://jsonplaceholder.typicode.com/photos")// fct qu il affiche les images (10 image aligner 3 par 3 )
	.done(function(data){
		console.log(data);
		for(let a= 0; a < 3; a++)
		$(".one_third").eq(a).children().attr('src',data[a].url);
			picture=data; 
	});

$("figcaption > a").click (function (e){
	e.preventDefault();
	 var content = ""; 
	 var indexLi = $('.one_third').length;
	//console.log(picture);

			for(let i= increment; i < increment + 10; i++ )
				{
					var classHtml ="";
					if ( ( indexLi+1 ) %3 ==0) 
						classHtml ="last box " ;
					content += '<li class="one_third"><img src="'+picture[i].url+'" width="290" height="180" alt=""></li>';
					
				//console.log(i);
				}
				$(".clear").append(content);
				increment += 10;
				});



});