// ASSIGNMENT:1

// Q1
const AddTwoNumbers = (a,b) =>
{
    return a+b;
}
console.log(AddTwoNumbers(2,5));

// Q2
const isValid = (a,b) =>
{
    if(a>b)
    {
        return true;
    }
    else
    {
        return false;
    }
}
console.log(isValid(5,3));

//Q3
const Check = (a,b) =>
{
    if(a%10==0 || b%10==0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
console.log(Check(20,34));

//Q4
const First_Digit = (a) =>
{
    return String(a)[0];
}
console.log(First_Digit(676));

//Q5
const Last_Digit = (a) =>
{
    a=a%10;
    return a;
}
console.log(Last_Digit(2345));

//Q6
let Find_The_Remainder = (a,b) =>
{
    return b%a;
}
console.log(Find_The_Remainder(2,9));

//Q7
const Multiply_Two_Number = (a,b) =>
{
    return a*b;
}
console.log(Multiply_Two_Number(2,5));

//Q8
const sum = (a,b,c) =>
{
    return a+b+c;
}
console.log(sum(50,20,100));

const avg = (a,b,c) =>
{
    return (a+b+c)/3;
}
console.log(avg(50,20,100));



