// ESERCIZIO JSnack1 -------------------------------------------------------------------------------------------------------

function snack1Function() {

  var input1Ex1 = document.getElementById("input1_ex1").value;
  var input2Ex1 = document.getElementById("input2_ex1").value;
  var outputEx1 = document.getElementById("output_ex1");

  // Valore minimi
  input1Ex1 = parseInt(input1Ex1);
  //Valore massimo
  input2Ex1 = parseInt(input2Ex1);

  outputEx1.innerHTML =  Math.floor(Math.random() * (input2Ex1 - input1Ex1 + 1)) + input1Ex1;
}







