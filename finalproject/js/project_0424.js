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
	var wind = select('#Wind');
	console.log('wind = ' + str(wind.value()));
    
 var test = Math.round(parseFloat(intercept) + parseFloat(score) + (parseFloat(birthYear.value()) * birthyearTT) + (parseFloat(temp.value()) * TempTT) + (parseFloat(wind.value()) * windTT));
	
	//score = parseFloat(genderValue) + (parseFloat(birthYear.value()) * birthyearTT) +  parseFloat(userValue) + parseFloat(dayValue);
		
  
    //console.log(score);
	background(255);
	text(test, 300, 50);
}