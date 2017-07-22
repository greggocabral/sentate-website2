
var slideSpeed = 800;

var mode = 'none';
var modeChanged = false;

function checkMode(action){

	switch(mode){
		case 'none':
			switch(action){
				case 'click-passenger':
					mode = 'passenger';
						$("#company-label").animate({'margin-left': '80%'},slideSpeed,function() {});
					 	$("#passenger-label").animate({'margin-left': '40%'},slideSpeed,function() {});
					 	$(".mode-label").animate({'width': '20%'},slideSpeed,function() {});

					 	$("#passenger-content").animate({'margin-left': '0%'},slideSpeed,function() {});
					 	$("#company-content").animate({'margin-left': '50%'},slideSpeed,function() {});

					 	$("#arrow").slideDown(slideSpeed, function(){});
					 	$("#company-label-text").slideUp(slideSpeed, function(){});

					 	$("#passenger-content").slideDown(slideSpeed, function(){});
					 	$("#company-content").slideUp(slideSpeed, function(){});
				 	
				break;
				case 'click-company':
					mode = 'company';
						$("#passenger-label").animate({'margin-left': '0%'},slideSpeed,function() {});
						$("#company-label").animate({'margin-left': '40%'},slideSpeed,function() {});

					 	$("#passenger-content").animate({'margin-left': '-50%'},slideSpeed,function() {});
					 	$("#company-content").animate({'margin-left': '0%'},slideSpeed,function() {});

					 	$("#arrow").slideDown(slideSpeed, function(){});
					 	$("#passenger-label-text").slideUp(slideSpeed, function(){});

					 	$("#company-content").slideDown(slideSpeed, function(){});
					 	$("#passenger-content").slideUp(slideSpeed, function(){});
					 	
				break;
			}
		break;

		case 'passenger':
			switch(action){
				case 'click-passenger':
					mode = 'none';
					$("#passenger-label").animate({'margin-left': '20%'},slideSpeed,function() {});
					$("#company-label").animate({'margin-left': '60%'},slideSpeed,function() {});
				 	
				 	$("#arrow").slideUp(slideSpeed, function(){});
				 	$("#company-label-text").slideDown(slideSpeed, function(){});
					
					$("#passenger-content").slideUp(slideSpeed, function(){});

				break;
				case 'click-company':
					mode = 'company';
					$("#company-content").slideDown(slideSpeed, function(){});
					$("#passenger-label").animate({'margin-left': '0%'},slideSpeed,function() {});
					$("#company-label").animate({'margin-left': '40%'},slideSpeed,function() {});
					$("#passenger-content").animate({'margin-left': '-50%'},slideSpeed,function() {});
				 	$("#company-content").animate({'margin-left': '0%'},slideSpeed,function() {});

				 	$("#arrow").slideDown(slideSpeed, function(){});
				 	$("#company-label-text").slideDown(slideSpeed, function(){});
				 	$("#passenger-label-text").slideUp(slideSpeed, function(){});
				 	$("#passenger-content").slideUp(slideSpeed, function(){});

				break;
			}
		break;

		case 'company':
			switch(action){
				case 'click-passenger':
					mode = 'passenger';
					$("#passenger-content").slideDown(slideSpeed, function(){});
					$("#company-label").animate({'margin-left': '80%'},slideSpeed,function() {});
				 	$("#passenger-label").animate({'margin-left': '40%'},slideSpeed,function() {});
				 	$("#passenger-content").animate({'margin-left': '0%'},slideSpeed,function() {});
				 	$("#company-content").animate({'margin-left': '50%'},slideSpeed,function() {});

				 	$("#arrow").slideDown(slideSpeed, function(){}); 
				 	$("#passenger-label-text").slideDown(slideSpeed, function(){});
				 	$("#company-label-text").slideUp(slideSpeed, function(){});
				 	$("#company-content").slideUp(slideSpeed, function(){});

				break;
				case 'click-company':
					mode = 'none';

					$("#company-content").slideUp(slideSpeed, function(){});
					$("#company-label").animate({'margin-left': '60%'},slideSpeed,function() {});
				 	$("#passenger-label").animate({'margin-left': '20%'},slideSpeed,function() {});
				 	
				 	$("#arrow").slideUp(slideSpeed, function(){});
				 	$("#passenger-label-text").slideDown(slideSpeed, function(){});


				break;
			}
		break;
	}
		
}


$(document).ready(function() {

	$("#arrow").hide();
	$("#company-content").slideUp(slideSpeed, function(){});
	$("#passenger-content").slideUp(slideSpeed, function(){});

	$("#passenger-label").click(function() { 
		checkMode('click-passenger')
	});	
	$("#company-label").click(function() { 
		checkMode('click-company')
	});	


});






