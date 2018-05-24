
var answer1 = parseInt( prompt("Enter 1 side"));
var answer2 = parseInt( prompt("Enter 2 side"));
var answer3 = parseInt( prompt("Enter 3 side"));


console.log(typeof(answer1),typeof(answer2),typeof(answer3));
var halfperimeter = ((answer1+answer2+answer3)/2);
var square = (Math.sqrt(halfperimeter*((halfperimeter-answer1)*(halfperimeter-answer2)*(halfperimeter-answer3))));
console.log(square);
if (answer1 <= 0 || answer2 <= 0 || answer3 <= 0)
{alert("INVALID")}

else if (answer1 == answer2 && answer2 == answer3)
{alert("EQUILATERAL")}

else if (answer1 >= answer2+answer3 || answer3 >= answer2+answer1 || answer2 >= answer1+answer3) 
{alert("INVALID")}

else if (answer2==answer3 || answer1==answer2 || answer3==answer1)
{alert("ISOSCELES")}
else{
    alert("Scalene");
}

