
// Chapter 1
// question 1 

    alert("Hello visitors !")




// question 2 

    alert('Error! Please enter a valid password.')



// question 3

    alert('Welcome to JS Land... \n Happy Coding !');



// question 4

    alert('Welcome to JS Land')
    alert(' Happy Coding !  \n')



// Chapter 2 


// Question 1 
var username;

// Question 2
var myName = "Sadiq Shah";



// Question 3 

    var message = "Hello World";
    alert(message)



// Question 4 

    var name = "Ali Raza";
    var age = 23;
    var course = "Web and Mobile Development ";
    var qualification = "Graduate";

    alert(name);
    alert(age);
    alert(course);
    alert(qualification);

    // alert("Name: "  +  name +   "\n"  +  "Age: " + age+  "\n"  +  "Course " + course  +  "\n"+ "Qualification: " + qualification);




// Question 5 


    alert("PIZZA \n PIZZ \n PIZ \n PI \n P\n");



// Question 6


    emailAddress = "shahsadiq208@gmail.com"
    alert("My Email Address is : " + emailAddress);



// Question 7

    var book = 'A smarter way to learn JavaScript'
    alert("I'm trying to learn from the book " + book);


// Question 8

    document.write("Yah! I can write HTML content through JavaScript  (Note : Please Refresh it for back again)");




// Question 9



    var pattern = "▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬";
    alert(pattern);






// Chapter 3 

// Question 1 



    var age = 24;
    alert(age);


// Question 2 



    var userVisitors = 14;
    alert("You have visited this site" + " " + userVisitors + " " + "times");


// Question 3



    var birthYear = 24;
    document.write("My birth year is" + " " + birthYear + "<br>" + "Data type of my declared variable is" + " " + typeof (birthYear));




// Question 4



    var visitorName = "Sadiq Shah";
    var productTitle = "AI watch";
    var productQty = "1";
    var storeName = "Shah's";
    alert(visitorName + " " + "ordered " + productQty + " " + productTitle + " " + "on " + storeName + " Accessories store");






// Chapter 4 

// Question 1 



    var name, age, qualification;


// Question 2 



    // Legal varaibles 
    var myname = "Sadiq Shah";
    var myName = "Sadiq Shah";
    var my_name = "sadiq shah";
    var _my_name = "sadiq shah";
    var $my_name = "sadiq shah";


    // Illlegal varaibles 
    // var @myname = "Sadiq Shah";
    // var 123myName = "Sadiq Shah";
    // var my name = "sadiq shah";
    // var month&year = "saadiq shah";
    // var birth-year = "1990";



// Question 3



    document.write("<h2>Rules for naming JS variables</h2>");
    document.write("a) Variable names can only contain number,$,_. and letter <b> For example : $my_1stVariable.</b> <br>");
    document.write("b) Variable must begin with a letter, $ or _. <b> For example : $name,_name or name.</b> <br>");
    document.write("c) Variable names are case sensitive.<br>");
    document.write("d) Variable names should not be JS keywords.");











// Chapter 5

// Question 1 



    var num1 = 34;
    var num2 = 45;
    var addNumbers = num1 + num2;
    document.write("Sum of " + num1 + " and " + num2 + " is " + addNumbers);






// Question 2 



    var num1 = 34;
    var num2 = 45;
    var subNumbers = num1 - num2;
    var mulNumbers = num1 * num2;
    var divNumbers = num1 / num2;
    var Module = num1 % num2;



    document.write("Subtraction of " + num1 + " and " + num2 + " is " + subNumbers + "<br>");
    document.write("Multiplication of " + num1 + " and " + num2 + " is " + mulNumbers + "<br>");
    document.write("Division of " + num1 + " and " + num2 + " is " + divNumbers + "<br>");
    document.write("Reminder of " + num1 + " and " + num2 + " is " + Module + "<br>");




// Question 3 



    var number1;
    document.write("Value after variable declaration is:" + number1 + "<br>");


    number1 = 5;
    document.write("Value after variable declaration is:" + number1 + "<br>");


    number1++
    document.write("Initial value: " + number1 + "<br>");


    number1 = number1 + 7;
    document.write("Value after addition is:" + number1 + "<br>");

    number1--;
    document.write("Value after decrement is:" + number1 + "<br>");

    number1 = number1 % 3;
    document.write("The remainder is : " + number1 + "<br>");




// Question 4



    var ticketPrice = 600;
    var numberOfTickets = 5;
    var boughtTickets = ticketPrice * numberOfTickets;
    document.write("Total Cost of : " + numberOfTickets + " tickets to a movie  is " + boughtTickets + "PKR");




// Question 5



    var tableNumber = 4;
    document.write("<h2>Table of 4 </h2>")
    document.write("4x1= " + 4 * 1 + "<br>" + "4x2= " + 4 * 2 + "<br>" + "4x3= " + 4 * 3 + "<br>" + "4x4= " + 4 * 4 + "<br>" + "4x5= " + 4 * 5 + "<br>" + "4x6= " + 4 * 6 + "<br>" + "4x7= " + 4 * 7 + "<br>" + "4x8= " + 4 * 8 + "<br>" + "4x9= " + 4 * 9 + "<br>" + "4x10= " + 4 * 10 + "<br>")




// Question 6

    var Celsius = 25;
    var fahrenheit = 70;

    c = (fahrenheit - 32) * 5 / 9;
    f = (Celsius * 9 / 5) + 32;


    document.write(Celsius + "<sup>o</sup>C is " + f + "<sup>o</sup>C");
    document.write("<br>");
    document.write(fahrenheit + "<sup>o</sup>F is " + c + "<sup>o</sup>C ");





// Question 7


    var item1 = 4000;
    var item2 = 2500;
    var item1Qty = 5;
    var item2Qty = 2;
    var shippingCharges = 800;


    var priceViaQtyItem1 = item1 * item1Qty;
    var priceViaQtyItem2 = item2 * item2Qty;

    var priceCal = priceViaQtyItem1 + priceViaQtyItem2;

    var totalCost = priceViaQtyItem1 + priceViaQtyItem2 + shippingCharges;

    document.write("<h2>Your Order</h2>");

    document.write("PRODUCT ----------------------------- SUBTOTAL");
    document.write("<br>");
    document.write("AI Watch (item1)  × " + item1Qty + " ----------------- " + priceViaQtyItem1 + "PKR");
    document.write("<br>");
    document.write("Mac Book (item2)  × " + item2Qty + " ----------------- " + priceViaQtyItem2 + "PKR");
    document.write("<br>");
    document.write("Subtotal " + " ---------------------------------- " + priceCal + "PKR");
    document.write("<br>");
    document.write("Total cost of your order is :  " + " --------- " + totalCost + "PKR");
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>')


// / Question 8


    var totalMarks = 980;
    var obtMarks = 804;
    var per = obtMarks / totalMarks * 100;

    document.write("Total Marks : " + totalMarks + "<br>Obtained Marks : " + obtMarks + "<br>Percentage : " + per + "%");
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>')





// / Question 9

    var oneUSD = 193.65;
    var oneRiyal = 51.63;


    var PKR2USD = oneUSD * 10;
    var PKR2Riyal = oneRiyal * 10;
    var totalCost = PKR2USD + PKR2Riyal;
    document.write("<h1>Currency In PKR</h1>");
    document.write("Total Currency in PKR : " + totalCost);




// / Question 10



    var SingleExpression = 5 * 10 / 2;
    document.write("Single Expression calculation is : " + SingleExpression);





// / Question 11

    var currentYear = 2022;
    var birthYear = 1998;

    var myAge = currentYear - birthYear;

    document.write("<h1>Age Calculator</h1>")
    document.write("Current Year : " + currentYear + "<br>Birth Year is" + birthYear + "<br>My age is  : " + myAge);




// / Question 12


    var radius = 20;
    var pi = 3.142;
    var cf = 2 * pi * radius;
    var area = pi * radius * radius;

    document.write("<h1>The Geometrizer</h1>");
    document.write('Radius of Circle is : ' + radius);
    document.write("<br>");
    document.write('The Circumference of Circle is : ' + cf);
    document.write("<br>");
    document.write('The Area of Circle is : ' + pi);




// / Question 13


    var favsnack = "TUC";
    var currentAge = 24;
    var maxAge = 65;
    var snankPerDay = 2;
    var snankPerDay = 2;
    var ageCalculate = maxAge - currentAge;
    var totalSnaks = ageCalculate * snankPerDay;
    document.write("<h1>The Lifetime Supply Calculator</h1>");
    document.write("<br>");
    document.write("Favorite Snack:  " + favsnack);
    document.write("<br>");
    document.write("Current Age: " + currentAge);
    document.write("<br>");
    document.write("Estimated Maximum Age:  " + maxAge);
    document.write("<br>");
    document.write("Amount of Snacks per day:  " + snankPerDay);
    document.write("<br>");
    document.write("You will need " + totalSnaks + " " + favsnack + " to last you untill the ripe old age of " + maxAge);








// Chapter 6-9

// Question 1 



    var a = 10;
    document.write("Result:");
    document.write("<br>");
    document.write("Value of a is: " + a);
    document.write("<br>");
    document.write("------------------------------------------")
    document.write("<br><br>");


    ++a;
    document.write("The value of ++a is : " + a);
    document.write("<br>");
    document.write("Now the value of a : " + a);
    document.write("<br>");
    document.write("<br>");


    document.write("The value of a++ is : " + a);
    document.write("<br>");
    a++;
    document.write("Now the value of a : " + a);
    document.write("<br>");
    document.write("<br>");




    --a;
    document.write("The value of --a is : " + a);
    document.write("<br>");
    document.write("Now the value of a : " + a);
    document.write("<br>");
    document.write("<br>");


    document.write("The value of a-- is : " + a);
    document.write("<br>");
    a--;
    document.write("Now the value of a : " + a);






// Question 2 


    var a = 2, b = 1;
    var result = --a - --b + ++b + b--;
    //   1  -  0  +  1  +  1
    //   1 + 1 + 1
    //   3

    document.write("Explaination");
    document.write("<br>");
    document.write("------------------------------------------");
    document.write("<br>");
    document.write("--a is the pre decrement of a, current value of a is 2 after decrement --a =  1  <br>");
    document.write("--b is the pre decrement of b, current value of b is 0 after decrement --b =  0  <br>");
    document.write("++b is the pre increment of b, current value of b is 1 after increment ++b =  1  <br>");
    document.write("++b is the post decrement of b, it will decrease the value after call the varibale current value of b is 1 after decrement  b-- =  1");


    document.write("<br>");
    document.write("Current value of a is : 1");
    document.write("<br>");
    document.write("Current value of b is : 1");


    document.write("<br>");
    document.write("Result : " + result);





// Question 3



    var name = prompt("Enter your name : ");
    document.write("Welcome " + name);




// Question 4


    var tableNo = prompt("Enter a number : ");
    document.write(tableNo + "x1= " + tableNo * 1 + "<br>" + tableNo + "x2= " + tableNo * 2 + "<br>" + tableNo + "x3= " + tableNo * 3 + "<br>" + tableNo + "x4= " + tableNo * 4 + "<br>" + tableNo + "x5= " + 4 * 5 + "<br>" + tableNo + "x6= " + tableNo * 6 + "<br>" + tableNo + "x7= " + tableNo * 7 + "<br>" + tableNo + "x8= " + tableNo * 8 + "<br>" + tableNo + "x9= " + tableNo * 9 + "<br>" + tableNo + "x10= " + tableNo * 10 + "<br>")



// Question 5




    var nameSub1 = prompt("Enter a your subject name : ");
    var subMarks1 = parseInt(prompt("Enter Obtained marks of this subject"));

    var nameSub2 = prompt("Enter a your subject name : ");
    var subMarks2 = parseInt(prompt("Enter Obtained marks of this subject"));

    var nameSub3 = prompt("Enter a your subject name : ");
    var subMarks3 = parseInt(prompt("Enter Obtained marks of this subject"));


    var eachmarks = 100;
    var eachpercentage1 = subMarks1 / eachmarks * 100;
    var eachpercentage2 = subMarks2 / eachmarks * 100;
    var eachpercentage3 = subMarks3 / eachmarks * 100;

    var totalMarksStd = 300;
    var obtainedMarks = subMarks1 + subMarks2 + subMarks3;
    var Percentage = obtainedMarks / totalMarksStd * 100;
    document.write(`<table>
    <tr>  
        <th>Subjects</th>  
        <th>Total Marks</th>  
        <th>Obtained Marks</th> 
        <th>Percentage</th>  
    </tr>  

    <tr>
        <td>${nameSub1}</td>
        <td>${eachmarks}</td>
        <td>${subMarks1}</td>
        <td>${eachpercentage1}%</td>
    </tr>

    <tr>
    <td>${nameSub2}</td>
    <td>${eachmarks}</td>
    <td>${subMarks2}</td>
    <td>${eachpercentage2}%</td>
</tr>

<tr>
<td>${nameSub3}</td>
<td>${eachmarks}</td>
<td>${subMarks3}</td>
<td>${eachpercentage3}%</td>
</tr>  


<tr>
<td></td>
<td>${totalMarksStd}</td>
<td>${obtainedMarks}</td>
<td>${Percentage}%</td>
</tr>  
    </table>`)

