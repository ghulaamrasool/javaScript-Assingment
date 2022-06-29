// Q no 1

var number = +prompt("Enter a positive integer : ")

    document.write("Number:  " + number + "<br>");
    document.write("round of value: " + Math.round(number) + "<br>");
    document.write("floor value: " + Math.floor(number) + "<br>");
    document.write("Ceil value: " + Math.ceil(number) + "<br>");

// Q no 2

var number = +prompt("Enter a negative floating value : ")

    document.write("Number:  " + number + "<br>");
    document.write("round of value: " + Math.round(number) + "<br>");
    document.write("floor value: " + Math.floor(number) + "<br>");
    document.write("Ceil value: " + Math.ceil(number) + "<br>");

// Q no 3

    var number = prompt("Enter a number : ")
    if (number < 0) {

        var absNumber = number * -1;
        document.write("The Absolute value of " + number + "is" + absNumber)
    }
    else {
        document.write("The Absolute value of " + number + " is " + number)
    }
