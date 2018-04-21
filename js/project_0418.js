var divWidth = document.getElementById("project_sketch").style.marginLeft;
console.log(divWidth);

var sketch = function(p){

  // ***** Global variables ***** //

  var topY = 50;
  var bottomY = 500;
  var leftX = 50;
  var rightX = 700;
  var textLeft = 30;
  var buttonLabelsWeather = ['Cloudy', 'Rain', 'Fog', 'Snow'];
  var buttonLabelsTime = ['11 AM', '5 PM', '11 PM'];
  var buttonLabelsGender = ['Male', 'Female'];
  var buttonLabelsCustomer = ['Subscriber', 'Non-Subscriber'];
  var buttonLabelsDay = ['Weekday', 'Weekend'];
  var buttonStartX = 320;
  var buttonStartY = 15;
  var buttonLength = 120;
  var buttonHeight = 20;
  var buttonSpacing = 10;
  var selectedButton = 0;
  var topBudget = new p5.Table;
  var bottomBudget = new p5.Table;
  // ***** Global variables for Rider_Num ***** //
  var gender = -0.0000000000000325;
  var usertypeCustomer = 0.000000000000008081;
  var usertypeSubscriber = 0.00000000000003729;
  var birthyear = 0.000000000000000275
  var ElevAM = -0.000000000000024;
  var ElevPM = 0.000000000000905;
  var FivePM = 0.00000000000000368;
  var weekdayx = -0.0000000000001499;
  var Temp = -0.00000000000000262;
  var wind = 0.00000000000000507;
  var cloudy = 0.0000000000000695;
  var rain = -0.0000000000000138;
  var fog = -0.0000000000000213;
  var snow = -0.0000000000000667;

  // ***** Global variables for Trip_Time ***** //
  var genderTT = 2.33;
  var usertypeCustomerTT = -2.4;
  var usertypeSubscriberTT = -15.07;
  var birthyearTT = -0.0348;
  var ElevAMTT = 0.654;
  var ElevPMTT = 0.573
  var FivePMTT = 1.163;
  var weekdayxTT = -0.667;
  var TempTT = 0.0168;
  var windTT = -0.002;
  var cloudyTT = 0.618;
  var rainTT = 0.0073;
  var fogTT = -0.168;
  var snowTT = -1.314;

  p.setup = function() {
   // p.createCanvas(800, 550);
    p.background(255);

    buttonFemale = p.createButton('Female');
    console.log(buttonFemale);
    buttonFemale.position(30, 100);

    buttonMale = p.createButton('Male');
    buttonMale.position(120, 100);

    buttonWeek = p.createButton('Week');
    buttonWeek.position(30, 220);

    buttonWeekend = p.createButton('Weekend');
    buttonWeekend.position(120, 220);

    buttonTime01 = p.createButton('Morning');
    buttonTime01.position(30, 280);

    buttonTime02 = p.createButton('Afternoon');
    buttonTime02.position(30, 310);

    buttonTime03 = p.createButton('Night');
    buttonTime03.position(30, 340);

    buttonWeather01 = p.createButton('Cloudy');
    buttonWeather01.position(30, 400);

    buttonWeather02 = p.createButton('Rain');
    buttonWeather02.position(30, 430);

    buttonWeather03 = p.createButton('Snow');
    buttonWeather03.position(120, 400);

    buttonWeather04 = p.createButton('Fog');
    buttonWeather04.position(120, 430);

    inputTemp01 = p.createInput();
    inputTemp01.position(120, 490)

    buttonTemp01 = p.createButton('Temperature');
    buttonTemp01.position(30, 490);

    buttonCustomer = p.createButton('Customer');
    buttonCustomer.position(30, 130);

    buttonSubscriber = p.createButton('Subscriber');
    buttonSubscriber.position(120, 130);

    inputYear01 = p.createInput();
    inputYear01.position(120, 160)

    buttonYear01 = p.createButton('Birth Year');
    buttonYear01.position(30, 160);

    inputWind = p.createInput();
    inputWind.position(120, 520)

    buttonWind = p.createButton('Wind');
    buttonWind.position(30, 520);
  }
}

new p5(sketch, 'project_sketch');
