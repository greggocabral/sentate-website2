
var slideSpeed = 800;

var mode = 'none';
var modeChanged = false;

function checkMode(action){

	switch(mode){
		case 'none':
			switch(action){
				case 'click-passenger':
					mode = 'passenger';
					$("#company-label").animate({'width': '10%'},slideSpeed,function() {});
				 	$("#passenger-label").animate({'width': '80%'},slideSpeed,function() {});
				 	$("#aux-label").animate({'width': '10%'},slideSpeed,function() {});
				 	// $("#company-label").css({'visibility': 'hidden'});
				 	$("#passenger-content").slideDown(slideSpeed);
				 	$(".mode-content").animate({'height': 'inherited'},slideSpeed,function() {});
				break;
				case 'click-company':
					mode = 'company';
					$("#aux-label").animate({'width': '0%'},slideSpeed,function() {});
					$("#passenger-label").animate({'width': '10%'},slideSpeed,function() {});
					$("#company-label").animate({'width': '80%'},slideSpeed,function() {});
					$(".mode-content").animate({'height': 'inherited'},slideSpeed,function() {});
				break;
			}
		break;

		case 'passenger':
			switch(action){
				case 'click-passenger':
					mode = 'none';
					$("#company-label").animate({'width': '50%'},slideSpeed,function() {});
				 	$("#passenger-label").animate({'width': '50%'},slideSpeed,function() {});
				 	$("#aux-label").animate({'width': '0%'},slideSpeed,function() {});
				break;
				case 'click-company':
					mode = 'company';
					$("#aux-label").animate({'width': '0%'},slideSpeed,function() {});
					$("#passenger-label").animate({'width': '10%'},slideSpeed,function() {});
					$("#company-label").animate({'width': '80%'},0.5*slideSpeed,function() {});
				break;
			}
		break;

		case 'company':
			switch(action){
				case 'click-passenger':
					mode = 'passenger';
					$("#aux-label").animate({'width': '10%'},slideSpeed,function() {});
					$("#company-label").animate({'width': '10%'},slideSpeed,function() {});
				 	$("#passenger-label").animate({'width': '80%'},slideSpeed,function() {});
				break;
				case 'click-company':
					mode = 'none';
					$("#company-label").animate({'width': '50%'},slideSpeed,function() {});
				 	$("#passenger-label").animate({'width': '50%'},slideSpeed,function() {});
				 	$("#aux-label").animate({'width': '0%'},slideSpeed,function() {});
				break;
			}
		break;
	}
		
}


$(document).ready(function() {


	$("#passenger-label").click(function() { 
		checkMode('click-passenger')
	});	
	$("#company-label").click(function() { 
		checkMode('click-company')
	});	


});






