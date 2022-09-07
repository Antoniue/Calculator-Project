function add(num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);
    return Math.round((num1+num2) * 1000) / 1000;
}
function subtract(num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);
    return Math.round((num1 - num2) * 1000) / 1000;
}
function multiply(num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);
    return Math.round((num1 * num2) * 1000) / 1000;
}
function divide(num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);
    return Math.round((num1 / num2) * 1000) / 1000;
}
function power(num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);
    return Math.round((num1 ** num2) * 1000) / 1000;
}
function percent(num1,num2){
    num1 = Number(num1);
    num2 = Number(num2);
    return Math.round((num1 % num2) * 1000) / 1000;
}
function root(num1, num2){
    num1 = Number(num1);
    return Math.round(Math.sqrt(num1) * 1000) / 1000;
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
    return root(num1, num2);
}

function writeScreen(placeholder)
{
    if(placeholder == '.') //if input is a dot we need to add it to the num
    {
        if(screen.textContent == mathArray[0])
        {
            mathArray[0] = mathArray[0] + '.';
            screen.textContent = mathArray[0];
        }
        else if (screen.textContent == mathArray[2])
        {
            mathArray[2] = mathArray[2] + '.';
            screen.textContent = mathArray[2];
        }
    }

    else if(placeholder == '√') //if input is root symbol, we need to immediately get an answer and not wait for num2 or to click =
    {
        mathArray[0] = screen.textContent;
        mathArray[1] = '√';
        mathArray[2] = '';
        summarize(mathArray);
    }

    else if(isNaN(placeholder)) //checks if this is an operator
        mathArray[1] = placeholder; //logs it as operator in the array

    else if(mathArray[1] == '') //if there isn't an operator (checking if we should log this as num1)
    {
        if(mathArray[0] == '') //if this is the first number in num1
        {
            screen.textContent = placeholder;
            mathArray[0] = mathArray[0] + placeholder;
        }
        else if (mathArray[0] != '') //if this ISNT the first number in num1
        {
            screen.textContent = screen.textContent + placeholder;
            mathArray[0] = mathArray[0] + placeholder;
        }
    }

    else if (mathArray[1] != '') //checks if there is an operator so we can log this as num2
    {
        if(mathArray[2] == '') //if this is the first number in num2 so we can clear screen.textContent
        {
            screen.textContent = placeholder;
            mathArray[2] = mathArray[2] + placeholder;
        }
        else if(mathArray[2] != '') //if this ISN'T the first number in num2 so we don't clear screen.textContent
        {
            screen.textContent = screen.textContent + placeholder;
            mathArray[2] = mathArray[2] + placeholder;
        }
    }
}


function summarize(array)
{
    console.log(mathArray);
    let screen = document.querySelector('.screen');
    mathArray[0] = operate(array[0], array[1], array[2]);
    screen.textContent = mathArray[0];
    mathArray[1] = '';
    mathArray[2] = '';
    for(let index = 0; index < operators.length; index++)
    {
    operators[index].style.backgroundColor = 'rgb(66, 66, 66)';
    }
}
function clearAll()
{
    mathArray = ['','',''];
    screen.textContent = '0';
    for(let index = 0; index < operators.length; index++)
    {
    operators[index].style.backgroundColor = 'rgb(66, 66, 66)';
    }
}

let screen = document.querySelector('.screen');
let mathArray = ['','',''];
const buttons = document.querySelectorAll('button');
const equals = document.querySelector('.operatorEquals');
equals.addEventListener(
    'click', () =>
    summarize(mathArray)
);

const clear = document.querySelector('.clear');
clear.addEventListener(
    'click', () => 
    clearAll()
)

for(let index = 0; index < buttons.length; index++)
{
    if(index != 18 && index != 17)
    buttons[index].addEventListener(
        'click', () =>
        writeScreen(buttons[index].textContent)
    )
}

const operators = document.querySelectorAll('#operator');
for(let index = 0; index < operators.length; index++)
{
    operators[index].addEventListener(
        'click', () =>
        operators[index].style.backgroundColor = 'orange'
    )
}