var intercept = 1397
var button;
var tempInput;
var birthInput;
var windInput;
var genderTT = 2.33;
var usertypeCustomerTT = -2.4;
var usertypeSubscriberTT = -15.07;
var birthyearTT = 0.157;
var ElevAMTT = 0.654;
var ElevPMTT = 0.573
var FivePMTT = 1.163;
var EarlyTT = 0;
var weekdayxTT = -0.667;
var TempTT = 21.8;
var windTT = -63.4;
var cloudyTT = 0.618;
var rainTT = 0.0073;
var fogTT = -0.168;
var snowTT = -1.314;
var TripTime;
var n_inputs = 6;

function setup(){
  
  createCanvas(800, 550);
 img = loadImage("Bike.jpg"); 

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
 var lengthMultiplier = 10;
 

 //var length = sqrt(test);	
 //var l2 = Math.round(length);
	//score = parseFloat(genderValue) + (parseFloat(birthYear.value()) * birthyearTT) +  parseFloat(userValue) + parseFloat(dayValue);
		
  
    //console.log(score);
	background(255);
	textSize(40);
	textAlign(LEFT);
	text(test + ' Riders', 280, 45);
	
	//for(var i = 35; i < test; i += 20) {
    //for(var j = 35; j < test;  j += 20) {
		//noStroke();
		//fill(37, 54, 113);
		//rect(35, test *i , 13, 12);
	
		
	image(img, 100, 100, img.width/5, img.height/5);
	
	

}