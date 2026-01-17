let input1 = prompt("Enter the first number:");
let input2 = prompt("Enter the second number:");

// Write your code here and print the output using alert function
let sum = Number(input1) + Number(input2);

if(sum == NaN || sum == undefined)
{

alert("Invalid input. Please enter a valid number.");

}

else

{

alert(`The sum of ${input1}  and ${input2} is ${sum}.`);

}
