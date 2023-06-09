const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", (req, res) => {
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);
  let result = num1 + num2;

  res.send(`Your result of calculation is ${result}`);
});

// Here code bellow for BMI Calculator

app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/bmicalculator", function (req, res) {
  let weight = Number(req.body.weight);
  let height = Number(req.body.height);

  let bmiResult = Math.floor(weight / (height * height));

  res.send(`Your BMI ${bmiResult}`);
});
app.listen(3000, function () {
  console.log("App listening on port 3000");
});
