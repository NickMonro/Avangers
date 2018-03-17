$(document).ready(function() { 
	
	$(".myImg").click(function(){	
	  	var img = $(this);	
		var src = img.attr('value'); 
		var alt = img.attr('alt');
		$("body").append("<div class='popup'>"+ 
						 "<div class='popup_bg'></div>"+ 
						 "<img src="+src+" class='popup_img' />"+"<p class='resp'>"+alt+"</p>"+ 
						 "</div>"); 
		$(".popup").fadeIn(800); 
		$(".popup_bg").click(function(){		   
			$(".popup").fadeOut(800);	
			setTimeout(function() {	
			  $(".popup").remove();
			}, 800);
		});
	});
 
});