// ESERCIZIO JSnack1 -------------------------------------------------------------------------------------------------------

function snack1Function() {

  var input1Ex1 = document.getElementById("input1_ex1").value;
  var input2Ex1 = document.getElementById("input2_ex1").value;
  var outputEx1 = document.getElementById("output_ex1");

  // Valore minimo
  input1Ex1 = parseInt(input1Ex1);
  // Valore massimo
  input2Ex1 = parseInt(input2Ex1);

  outputEx1.innerHTML =  Math.floor(Math.random() * (input2Ex1 - input1Ex1 + 1)) + input1Ex1;
}





// ESERCIZIO JSnack2 -------------------------------------------------------------------------------------------------------

let arrayEx2 = [];
let sommaEx2 = 0;

function snack2Function() {

  var inputEx2 = document.getElementById("input_ex2").value;
  var output1Ex2 = document.getElementById("output1_ex2");
  var output2Ex2 = document.getElementById("output2_ex2");

  inputEx2 = parseInt(inputEx2)
  sommaEx2 += inputEx2;
 
  if (sommaEx2 < 50) {
    arrayEx2.push(inputEx2);
    output1Ex2.innerHTML = `[${arrayEx2.toString()}]`;
    output2Ex2.innerHTML = sommaEx2;

  } else {
    document.getElementById("form_ex2").style.display = "none";
  }
}





// ESERCIZIO JSnack3 -------------------------------------------------------------------------------------------------------

var currentArray3 = [];

function snack3Function() {
 
  var outputEx3 = document.getElementById("output_ex3");
  var inputEx3 = document.getElementById("input_ex3").value;
  inputEx3 = parseInt(inputEx3);
  
  var arrayEx3 = "";
  
  for (let i = 0; i < inputEx3; i++) {
    generaArray3();
    arrayEx3 += "<br>" + "[" + currentArray3 + "]";
    currentArray3 = [];
  }

  outputEx3.innerHTML = arrayEx3;
}

function generaArray3() {

  for (let i = 0; i < 10; i++) {
    let casualNumber3 = Math.floor(Math.random() * (100)) + 1;
    currentArray3.push(casualNumber3)
  }
}





// ESERCIZIO JSnack4 -------------------------------------------------------------------------------------------------------

var lastNumber4 = -Infinity;
var numberList4 = "";

function snack4Function() {

  var outputEx4 = document.getElementById("output_ex4");
  var inputEx4 = document.getElementById("input_ex4").value;
  inputEx4 = parseInt(inputEx4);

  if (inputEx4 > lastNumber4) {
    numberList4 += "<br>" + "[" + inputEx4 + "]"
    console.log()
    lastNumber4 = inputEx4;
  } else {
    outputEx4.innerHTML = numberList4;
    document.getElementById("form_ex4").style.display = "none";
  }
}





// ESERCIZIO JSnack5 -------------------------------------------------------------------------------------------------------

let casualNumber5 = Math.floor(Math.random() * (100)) + 1;
var contatore5 = 0;

function snack5Function() {

  var outputEx5 = document.getElementById("output_ex5");
  var inputEx5 = document.getElementById("input_ex5").value;
  inputEx5 = parseInt(inputEx5);

  if (casualNumber5 > inputEx5) {
    contatore5++;
    outputEx5.innerHTML = "Il numero a cui ho pensato è più grande, ritenta!";
  } else if (casualNumber5 < inputEx5) {
    contatore5++;
    outputEx5.innerHTML = "Il numero a cui ho pensato è più piccolo, ritenta!";
  } else {
    contatore5++;
    outputEx5.innerHTML = "Hai indovinato!" + "<br>" + "Numero di tentativi: " + contatore5;
    
  }
}