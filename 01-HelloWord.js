// alert("Hello Word!");

//Variáveis
var num = 1;
num = 3;
var price = 1.5;
var myName = "Fabrício";
var trueValue = true;
var nullVar = null;
var und;

console.log("num: " + num);
console.log("myName: " + myName);
console.log("trueValue: " + trueValue);
console.log("price: " + price);
console.log("nullVar: " + nullVar);
console.log("und: " + und);

//Escopo de variáveis
var myVariable = "Global";
myOtherVariable = "Global";
function myFunction() {
  var myVariable = "Local";
  return myVariable;
}
function myOtherFunction() {
  myOtherVariable = "Local";
  return myOtherVariable;
}
console.log(myVariable);
console.log(myFunction());
console.log(myOtherVariable);
console.log(myOtherFunction());
console.log(myOtherVariable);

//Operadores

//Verdadeiro e Falso

//Funções dos operadores de igualdade

//Instruções condicionais

//Laços

//Funções

//POO em Javascript
