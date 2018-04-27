var city = 'New York';
var button;
var tempInput;
var birthInput;
var windInput;
var genderTT = 2.33;
var usertypeCustomerTT = -2.4;
var usertypeSubscriberTT = -15.07;
var birthyearTT = -0.0348;
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
var n_questions = 6;

function setup(){
  
  createCanvas(800, 550);

  textFont ('Roboto Condensed');
  textSize (14);
  button = select('#submit');
  cityInput = select('#city');
  button.mousePressed(test);
 
  noLoop();
}



function test() {
    var score = 0;
    // The input elements have names q1 ... q6, so we iterate from 1 to 6
    for (var i = 1; i <= n_questions; i++) {
        // Get all input elements with name qX (i.e. q1, q2, ...)
        var answers = document.getElementsByName('q' + i);
        // Iterate over the selected input elements. They are the answers
        // for one question
        for (var j = 0; j < answers.length; j++) {
            // If one of them is selected
            if (answers[j].checked) {
                // add its value to the final score
                score += +answers[j].value;
                // and don't check the other answers of the question
                // (since only one can be selected)
                break;
            }
        }
    }
    print(score);
}