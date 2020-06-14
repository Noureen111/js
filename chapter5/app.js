//1
var a = +prompt("Enter 1st number: ");
var b = +prompt("Enter 2st number: ");

var c = a+b;

document.write("Sum of " + a + " and " +b+ " is " + c);

//2
var s = a-b;
document.write("<br>"+"<br>"+"Difference of " + a + " and " +b+ " is " + s);

var m = a * b;
document.write("<br>" + "Product of " + a + " and " +b+ " is " + m);

var d = b/a;
document.write("<br>" + "Quotiant of " + b + " and " +a+ " is " + d);

var mod = a%b;
document.write("<br>" + "Remainder of " + a + " and " +b+ " is " + mod);

document.write("<br>"+"<br>"+"-----------------------------------------------------------" + "<br>"+"<br>"+"<br>");

//3
//(a)
var v;
//(b)
document.write("<br>"+"<br>"+"<br>"+"<br>"+"value after variable declaration is: " + v);
//(c)
v = 10;
//(d)
document.write("<br>"+"Initial value: " + v);
//(e)
++v;
//f
document.write("<br>"+"Value after increment: " + v);
v = v + 7;
//g
document.write("<br>"+ "Value after additoin is: " + v);
//i
--v;
//j
document.write("<br>"+ "Value after decrement: " + v);
//k
v = v % 3;
document.write("<br>"+ "The remainder is: " + v);

document.write("<br>"+"<br>"+"-----------------------------------------------------------" + "<br>"+"<br>"+"<br>");

//4
var ticket = 600;
ticket = ticket * 5;
document.write("<br>"+"<br>"+"<br>"+"<br>"+"Total cost to buy 5 tickets to a movie is " + ticket + " PKR");

document.write("<br>"+"<br>"+"-----------------------------------------------------------" + "<br>"+"<br>"+"<br>");

//5
var num = +prompt("Enter number to have a table: ");
document.write("<br>"+"<br>"+"<br>"+"<br>");
for(var i=1; i<=10; i++)
{
    document.write(num + "x" + i + "=" + num*i);
    document.write("<br>");
}

document.write("<br>"+"<br>"+"-----------------------------------------------------------" + "<br>"+"<br>"+"<br>");

//6
//(a)
 var t1 = 25;
 //(b)
 var t2 = (t1 * 9/5) + 32;
 document.write("<br>" + t1 + "&#8451" + " is " + t2 + "&#8457");
//(c)
var t3 =70;
//(d)
var t4 = (t3 - 32) * 5/9;
document.write("<br>" + t3 + "&#8457" + " is " + t4 + "&#8451");

document.write("<br>"+"<br>"+"-----------------------------------------------------------" + "<br>"+"<br>"+"<br>");


//7
//(a)
var p1 = 650;
var p2 = 100;
var q1 = 3;
var q2 = 7;

document.write("<br>" + "<h1>" + "Shopping Cart" + "</h1>" + "<br>" + "<br>" + "<br>")

var ans = (p1 * q1) + (p2 * q2) + 100;

document.write("<br>" + "Price of item 1 is " + p1);
document.write("<br>" + "Quantity of item 1 is " + q1);
document.write("<br>" + "Price of item 2 is " + p2);
document.write("<br>" + "Quantity of item 2 is " + q1);
document.write("<br>" + "Shipping charges 100");

document.write("<br>" + "<br>" + "Total cost of your order is " + ans);


document.write("<br>"+"<br>"+"-----------------------------------------------------------" + "<br>"+"<br>"+"<br>");

//8

document.write("<br>" + "<h1>" + "Marks Sheet" + "</h1>" + "<br>" + "<br>" + "<br>");

var total = 980;
var obtained = 804;
var perc = 804 / 980 * 100;

document.write("Total marks: " + total);
document.write("<br>" + "Marks obtained: " + obtained);
document.write("<br>" + perc);


document.write("<br>"+"<br>"+"-----------------------------------------------------------" + "<br>"+"<br>"+"<br>");


//9
document.write("<br>" + "<h1>" + "Currency in PKR" + "</h1>" + "<br>" + "<br>" + "<br>");

var dollar = 10;
var riyal = 25;

var us = 104.80;
var saudi = 28;
curr = (us * dollar) + (saudi * riyal);
document.write("<br>" + "Total Currency in PKR; " + curr);

document.write("<br>"+"<br>"+"-----------------------------------------------------------" + "<br>"+"<br>"+"<br>");




//10

var num2 = 20;
num2 = num2 +5 * 10 /2;


//11
//(a)
var y = 2020;
//(b)
var byear = 1999;
//(c)
ans = y - byear;
document.write("<br>" + "<h1>" + "Age calculator" + "</h1>");
document.write("<br>" + "<br>" + "<br>" + "<br>" + "Current Year: " + y);
document.write("<br>" + "Birth Year: " + byear);
document.write("<br>" + "Your Age: " + ans);

document.write("<br>"+"<br>"+"-----------------------------------------------------------" + "<br>"+"<br>"+"<br>");



//12
//(a)
var radius = 20;
var circum = 2 * 3.142 * radius;
var area = 3.142 * radius * radius;
document.write("<br>" + "<h1>" + "The Geometrizer" + "</h1>");
document.write("<br>" + "<br>" + "<br>" + "<br>" + "Radius of a circle: " + radius);
document.write("<br>" + "The circumference is: " + circum);
document.write("<br>" + "The area is: " + area);


document.write("<br>"+"<br>"+"-----------------------------------------------------------" + "<br>"+"<br>"+"<br>");


//13
//(a) 
var snack = "slanty";
//(b)
var age2 = 20;
//(c)
var m_age = 60;
//(d)
var amount = 3;
//(e)
ans = (60 - 20) * 3;
document.write("<br>" + "<h1>" + "The Lifetime Supply Calculator" + "</h1>");
document.write("<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "Favourite Snack: " + snack);
document.write("<br>" + "Current Age: " + age2);
document.write("<br>" + "Estimated Maximum Age: " + m_age);
document.write("<br>" + "Amount of snacks per day: " + amount);
document.write("<br>" + "You will need " + ans + " " + snack + " to last you untill the ripe old age of " + m_age);

document.write("<br>"+"<br>"+"-----------------------------------------------------------" + "<br>"+"<br>"+"<br>");

