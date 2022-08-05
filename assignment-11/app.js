// Q no 1

var a = +prompt("Enter the power of A .");
var b = a + 1;
var value = Math.pow(a,b)
document.write(a+"<br>")
document.write(b+"<br>")
document.write("Power of A : "+value+"<br>")


// // Q no 2

var year = +prompt("Enter a year")
if (year %4 === 0){
    alert("it's a leap year..!")
}else {document.write("it's not a leap year.")}
document.write(year+"<br>")

// // Q mo 3



// // Q no 4

function sub (){
var math = +prompt("Eunter first subject number.");
var english = +prompt("Eunter second subject number.");
var urdu = +prompt("Eunter third subject number.");
var total = 300;
var marks_obtained = math+english+urdu;
var percentage = (marks_obtained/total)*100;
var average = marks_obtained/3
document.write("Percentage is : "+percentage+ "<br>");
document.write("Average marks is : "+average + "<br>")

}
sub()

// Q no 6 

var v = "a,e,i,o,u"
var user = prompt("Enter a sentance.").toLocaleLowerCase();

    document.write("User input : " + user+ "<br>")
     document.write("Remove all vowels charactors : "+user.replace(/[aeiuo]/ig,'')+"<br>")

// Q no 7

var user = ("Pleases read this application and give me gratuity");
var vowel = ("aeiou");
switch (user){
    case "vowel" :
 
}



//Q no 8


function dkm(){
var distance = +prompt("Distance between Hyderabd and karachi is: ")
document.write("The Distance in Kilometer is " + distance + "<br>");
function dm(){
    var dm = distance*1000;
    document.write("The distance in meters is: " + dm + "<br>")
function df(){
var df = distance*3280.84
document.write("The distance in feet is: " + df + "<br>")
function di(){
    var di = distance*39370.08
document.write("The distance in inches is: " + di + "<br>")

function dc(){
var dc = distance*100000.0032
document.write("The distance in centimeters is: " + dc + "<br>")
}
dc()
}
di()
}
df()
}
dm()
}
dkm()

// var distance = +prompt("Type distance in km");
// var meters = distance*1000;
// var feet = distance*3280;
// var inches = distance*39370;
// var centimeters = distance*100000;

// document.write("Kilometers is this : " + distance+"<br>");
// document.write(meters+"<br>");
// document.write(feet+"<br>");
// document.write(inches+"<br>");
// document.write(centimeters+"<br>");
