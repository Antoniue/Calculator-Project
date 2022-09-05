function add(num1, num2){
    return num1+num2;
}
function subtract(num1, num2){
    return num - num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    return num1 / num2;
}
function power(num1, num2){
    return num1 ** num2;
}
function percent(num1,num2){
    return num1 % num2;
}
function root(num1){
    return Math.sqrt(num1);
}
function operate(num1, operator, num2)
{
    if(operator == "+")
    return add(num1,num2);
    if(operator == "-")
    return subtract(num1,num2);
    if(operator == "*")
    return multiply(num1,num2);
    if(operator == "/")
    return divide(num1,num2);
    if(operator == "^")
    return power(num1,num2);
    if(operator == "%")
    return percent(num1,num2);
    if(operator == "//")
    return root(num1);
}