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