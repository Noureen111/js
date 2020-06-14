//1
var a = +prompt("Enter number: ");
document.write("Result" + "<br>" + "The value of a is: "+ a);

document.write("<br>" + "<br>" + "'''''''''''''''''''''''''''''''''");

++a;
document.write("<br>" + "<br>" + "<br>" + "The value of ++a is: "+ a);

// a++;
document.write("<br>" + "<br>" + "<br>" + "The value of a++ is: "+ a++);
document.write("<br>" + "Now the value of a is: "+ a);

--a;
document.write("<br>" + "<br>" + "<br>" + "The value of --a is: "+ a);
document.write("<br>" + "Now the value of a is: "+ a);

// a--;
document.write("<br>" + "<br>" + "<br>" + "The value of a-- is: "+ a--);
document.write("<br>" + "The value of a is: "+ a);

document.write("<br>" + "<br>" + "-------------------------------------------------------------" + "<br>" + "<br>" + "<br>");

//2
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("<br>"+"<br>"+"<br>"+"<br>"+"a is " + a);
document.write("<br>"+"b is " + b);
document.write("<br>"+"result is " + result);


document.write("<br>" + "<br>" + "-------------------------------------------------------------" + "<br>" + "<br>" + "<br>");

//3
var name = prompt("Enter your name: ");
document.write("Hello " + name);


document.write("<br>" + "<br>" + "-------------------------------------------------------------" + "<br>" + "<br>" + "<br>");



//4 wasn't given
//5
var num2 = 0;
num2 = +prompt("ENter number for table: ");

if(num2 === 0)
{
    num2 = 5;
}

for(var i=1; i<=10; i++)
{
    document.write(num2 + "x" + i + "=" + num2*i);
    document.write("<br>");
}


document.write("<br>" + "<br>" + "-------------------------------------------------------------" + "<br>" + "<br>" + "<br>");


//6
//(a)
var s1 = prompt("Enter subject1 name: ");
var s2 = prompt("Enter subject2 name: ");
var s3 = prompt("Enter subject3 name: ");
//(b)
var total = 100;
//(c)
var o1 = +prompt("Obtained marks for subject1: ");
//(d)
var o2 = +prompt("Obtained marks for subject2: ");
var o3 = +prompt("Obtained marks for subject3: ");


document.write("<br>" + "<b>" + "Subject\tTotal Marks\tObtained Marks\tPercentage" + "</b>");
document.write("<br>" + s1 + "\t" + "100" + "\t" + o1 + "    " + o1 + "%");
document.write("<br>" + s2 + "\t" + "100" + "\t" + o2 + "\t" + o2 + "%");
document.write("<br>" + s3 + "\t" + "100" + "\t" + o3 + "\t" + o3 + "%");

var ans1 = 01 + 02 + o3;
var ans2 = (ans1 / 300)*100;

document.write("<br>" + "<br>" + "\t" + "300" + "\t" + ans1 + "\t" +ans2+"%");