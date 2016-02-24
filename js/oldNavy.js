


$(".navbarToggle").click(function(){ 
    $(".navigation").toggle();
    $(".store-links, #postings, #map, #brand, .img-responsive").css({"opacity": "0.2"});
    $(".navbar-text, .navbar-default, .navigation>li>a").css({"color": "black"});
    $(".carousel-indicators, #input-box, #brand, img#search-2.search, #jumbo-banner, #social-and-banner-text").css({"opacity": "0.2"});
});


$("a.nav-close").click(function(){
    $(".carousel-indicators, #input-box, #brand, img#search-2.search, #jumbo-banner, #social-and-banner-text").css({"opacity": "1"});
    $(".store-links, #postings, #map, #brand, .img-responsive").css({"opacity": "1"});
    $(" .navigation").toggle();

});




// $.getJSON('js/jobs.JSON', function (data){
// 	$.each(data.stores, function(){
// 		$("div#storeList").append('<ul><li class= "job-title" >' + this['job'] + 
// 			'</li> <li class= "job-location">' + this['location'] +  
// 			'</li> <li class= "job-description">' + this['description'] + 
// 			'</li> <li class= "apply1">' + this['apply'] + '</li></ul><br/>');
//   });

// });


// $.getJSON('js/jobs.JSON', function (data){
// 	$.each(data.headquarters, function(){
// 		$("div#stores").append('<ul><li class= "job-title" >' + this['job'] + 
// 			'</li> <li class= "job-location">' + this['location'] +  
// 			'</li> <li class= "job-description">' + this['description'] + 
// 			'</li> <li class= "apply2">' + this['apply'] + '</li></ul><br/>');
//   });
// });



// $.getJSON('js/jobs.JSON', function (data){
// 	$.each(data.international, function(){
// 		$("div#international").append('<ul><li class= "job-title" >' + this['job'] + 
// 			'</li> <li class= "job-location">' + this['location'] +  
// 			'</li> <li class= "job-description">' + this['description'] + 
// 			'</li> <li class= "apply3">' + this['apply'] + '</li></ul><br/>');
//   });
// });




