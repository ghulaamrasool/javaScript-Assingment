// Qno 1

var num = Math.floor(Math.random() * 6)+1;
console.log(num)

// Qno 2 Head/Tails

var user1=prompt("Enter First player Name").toUpperCase();
var toss1=prompt("Enter H/T").toLowerCase();
var user2=prompt("Enter Second player Name").toUpperCase();
var toss2=prompt("Enter H/T").toLowerCase();
var num2 = Math.floor(Math.random() * 2)+1;
// console.log(num2)
if(num2===1 && toss1==="h"){
    document.write(user1 +" Win")
}
else if(num2==2 && toss2==="h"){
    document.write(user2+" Win")
}
else if(num2===2 && toss1==="t"){
    document.write(user1+"Win")
}
else if(num2===2 && toss2==="t"){
    document.write(user2+"Win")
}

// Qno 3 Rendom Password

var num1 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var num3 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var spe = ['@', '!', '$', '%']
var ALPHA = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
]
var alpha = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
]
var Cap = ALPHA[Math.floor(Math.random() * ALPHA.length)]
var num2 = num3[Math.floor(Math.random() * num3.length)]
var special = spe[Math.floor(Math.random() * spe.length)]
var small = alpha[Math.floor(Math.random() * alpha.length)]
var num1 = num1[Math.floor(Math.random() * num1.length)]
var special1 = spe[Math.floor(Math.random() * spe.length)]
var Cap1 = ALPHA[Math.floor(Math.random() * ALPHA.length)]
var Cap3 = alpha[Math.floor(Math.random() * alpha.length)]

var small1 = alpha[Math.floor(Math.random() * alpha.length)]
document.write(
  num1 + special + num2 + special1 + Cap + small + Cap + small1 + Cap3,
)
