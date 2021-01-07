//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express()

app.use(bodyParser.urlencoded( { extended:true } ));

app.get("/", function(request, response)  {
  response.sendFile(__dirname + "/index.html");
});

app.post("/", function(request, response) {
  var num1 = Number(request.body.num1);
  var num2 = Number(request.body.num2);
  var result = num1 + num2;

  response.send("The result of the calculation is " + result);
});

app.get("/bmicalculator", function(request, response) {
  response.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(request, response) {
  var weight = Number(request.body.weight);
  var height = Number(request.body.height);
  var bmiResult = bmiCalculator(weight,height);

  response.send(bmiResult);

});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});


function bmiCalculator (weight, height) {
    // calculate BMI value
    var bmi = Math.round((weight/(Math.pow(height,2))));
    var interpretation;

    if((bmi>18.5) && (bmi<24.9)){
        interpretation = "Your BMI is " + bmi + ", so you have a normal weight."
    }
    else if (bmi<18.5){
        interpretation = "Your BMI is " + bmi + ", so you are underweight."
    }
    else if (bmi>24.9){
        interpretation = "Your BMI is " + bmi + ", so you are overweight."
    }


    return interpretation;
}
