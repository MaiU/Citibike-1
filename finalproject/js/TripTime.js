var intercept = 23.638
var button;
var tempInput;
var birthInput;
var windInput;
var genderTT = 2.33;
var usertypeCustomerTT = -2.4;
var usertypeSubscriberTT = -15.07;
var birthyearTT = 0.0348;
var ElevAMTT = 0.654;
var ElevPMTT = 0.573
var FivePMTT = 1.163;
var EarlyTT = 0;
var weekdayxTT = -0.667;
var TempTT = 0.0168;
var windTT = -0.002;
var cloudyTT = 0.618;
var rainTT = 0.0073;
var fogTT = -0.168;
var snowTT = -1.314;
var TripTime;
var n_inputs = 6;

function setup(){
  
  createCanvas(800, 550);


  textSize (14);
  button = select('#submit');
  button.mousePressed(calc);
 	stroke(0);
	strokeWeight(1);
	ellipse(180,240,250,250);
	stroke(107);
	strokeWeight(15);
	arc(180,240,250,250,1.5*PI,(23/30*PI-HALF_PI+0.0001));
	stroke(0);
	strokeWeight(0);
	textSize(32);
	textAlign(CENTER);
	text(23 + ' Minutes', 180, 250);
	textSize(20);
	text('Baseline', 180, 430);
	noLoop();
}



function calc() {
    var score = 0;

    for (var i = 1; i <= n_inputs; i++) {
       
        var answers = document.getElementsByName('q' + i);
       
        for (var j = 0; j < answers.length; j++) {
           
            if (answers[j].checked) {
               
                score += +answers[j].value;
                
                break;
            }
        }
    }
	
	//Age//	
	var birthYear = select('#birthyear');
	console.log('birth year = ' + str(birthYear.value()));
	
	//Temp//	
	var temp = select('#Temp');
	console.log('temperature = ' + str(temp.value()));
    
	//Wind Speed//	

    
 var test = Math.round(parseFloat(intercept) + parseFloat(score) + (parseFloat(birthYear.value()) * birthyearTT) + (parseFloat(temp.value()) * TempTT));
	
	//score = parseFloat(genderValue) + (parseFloat(birthYear.value()) * birthyearTT) +  parseFloat(userValue) + parseFloat(dayValue);
		
  
    //console.log(score);
	
	background(255);
	
	 	stroke(0);
	strokeWeight(1);
	ellipse(180,240,250,250);
	stroke(107);
	strokeWeight(15);
	arc(180,240,250,250,1.5*PI,(23/30*PI-HALF_PI+0.0001));
	stroke(0);
	strokeWeight(0);
	textSize(32);
	textAlign(CENTER);
	text(23 + ' Minutes', 180, 250);
	textSize(20);
	text('Baseline', 180, 430);
	
	stroke(0);
	strokeWeight(1);
	ellipse(500,240,250,250);
	stroke(37, 54, 113);
	strokeWeight(15);
	arc(500,240,250,250,1.5*PI,(test/30*PI-HALF_PI+0.0001));
	stroke(0);
	strokeWeight(0);
	textSize(32);
	textAlign(CENTER);
	text(test + ' Minutes', 500, 250);
	textSize(20);
	text('Predicted', 500, 430);

}

