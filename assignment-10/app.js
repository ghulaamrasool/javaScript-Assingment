// // Q no 1

function gr(){

    var now = new Date();
    document.write(now + "<br>");
}
gr();

// // Q no 3

function sum(){
var num1 = +prompt ("Enter first value")
var num2 = +prompt ("Enter second value")

document.write(num1 + num2)
}
sum();

// //Q no 4

function calculator(){
var firstNum = +prompt ("Enter first numer ")
var opt = prompt ("Enter opperator +,-,*,/");
var secNum = +prompt ("Enter second numer ")
if(opt === "+"){
    document.write( "The result is addition: " + (firstNum + secNum))

}
else if(opt=== "-"){
    document.write( "The result is subtraction: " + (firstNum - secNum))

}
else if(opt=== "*"){
    document.write("The result is Multiply: " + (firstNum * secNum))

}
else if(opt=== "/"){
    document.write("The result is Devide: " + (firstNum / secNum))

}
}
calculator();

// // Q no 5

function square (){
var user = +prompt("Enter value for Square")
document.write("The squares of " +user+ " is: " + "<h1>" + user * user + "</h1>")
}
square();

// Q no 6

function fact(){
    var fac = 1
    var num = +prompt("Enter number")
    for(var i = 1; i<= num; i++ ){
    fac = fac*i
}
        document.write("Factorial is: " + fac)

}
fact();

// // Q no 7

function count(){
    var num1 = +prompt("Enter first number")
    var num2 = +prompt("Enter second number")
    for(i = num1; i <= num2; i++){
        document.write(i + "<br>")
    }

}

count();

// // Q no 9

// //      ARGMNT AS A NUMBER

function area(width,length){

    document.write(width*length)

}
area(5,4);

//      ARGMNT AS A VAR

function area2(a,b){
    console.log("Assalam-u-alaikum "+ a + " " + b)
}
area2("Ghulam", " Rasool")
area2("Ghous", " Ahmad")
area2("Ubaid", " Ali")

// // Q no 10

function pr() {
  var word = prompt('Enter your word')

  var check = word.split('').reverse().join('')

  document.write("<h1>" + check + "</h1>")
  if (word === check) {
    document.write("Yes, this is Palimdrome word.")
  } else alert("sorry, not a palimdrome word.")
}
pr()

// Q no 11

function titlecase(){
    var userInput = prompt("Enter a line.").toLowerCase();
    document.write("User input : " + userInput + "<br>")
    document.write("Title case : ")
    var a = userInput.split(' ');
    for(i = 0; i < a.length; i++) {
        a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1) + " ";
        document.write(a[i]).t
    
    }
}
titlecase();

// Q no 12

// function string (){
//     var enterStr = prompt("Enter any sentance");

// }
               //////\\\\\\\/////\\\\////\\\\PROCCECING///\\\///\\\\////\\\\////

// Q n0 14

function circumference_area(){
    function circumference(){
    
    var r = +parseFloat(prompt("Enter the radius of the circle for circumference"));
    document.write("Circumference of a circle is: " + (2 * Math.PI * r ) + "<br>" );
    }
    function area(){
    var r = +parseFloat(prompt("Enter the radius of the circle for area"));
         
         var area = (Math.PI * r*r)
         document.write("Area of a Circle: " + area)
    
    }
    circumference();
    area();
    }
    circumference_area()

