function add(num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);
    return num1+num2;
}
function subtract(num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);
    return num1 - num2;
}
function multiply(num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);
    return num1 * num2;
}
function divide(num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);
    return num1 / num2;
}
function power(num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);
    return num1 ** num2;
}
function percent(num1,num2){
    num1 = Number(num1);
    num2 = Number(num2);
    return num1 % num2;
}
function root(num1){
    num1 = Number(num1);
    return Math.sqrt(num1);
}
function operate(num1, operator, num2)
{
    if(operator == '+')
    return add(num1,num2);
    if(operator == "-")
    return subtract(num1,num2);
    if(operator == "x")
    return multiply(num1,num2);
    if(operator == "/")
    return divide(num1,num2);
    if(operator == "^")
    return power(num1,num2);
    if(operator == "%")
    return percent(num1,num2);
    if(operator == "√")
    return root(num1);
}
function writeScreen(placeholder)
{
    let screen = document.querySelector('.screen');
    let previous = screen.textContent;
    if(previous == 0)
    screen.textContent = placeholder;

    else
    {
    let temp = previous.split(' ');
    console.log(temp);
    if(temp.length == 2)
    if(isNaN(temp[1]))
    {
    previous = previous+' ';
    }

    if(!isNaN(placeholder))
    screen.textContent = previous+placeholder;

    if(isNaN(placeholder))
    screen.textContent = previous+' '+placeholder;
    }
}
function summarize()
{
    let screen = document.querySelector('.screen');
    let screenParts = screen.textContent.split(' ');
    console.log(screenParts);
    screen.textContent = operate(screenParts[0], screenParts[1], screenParts[2]);
}

const buttons = document.querySelectorAll('button');
const equals = document.querySelector('.operatorEquals');
equals.addEventListener(
    'click', () =>
    summarize()
);
for(let index = 0; index < buttons.length; index++)
{
    if(index != 18)
    buttons[index].addEventListener(
        'click', () =>
        writeScreen(buttons[index].textContent)
    )
}