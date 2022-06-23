var num1 = window.prompt('Enter A Number')
var op = window.prompt('Enter Operator')
var num2 = window.prompt('Enter Another Number')

num1 = parseFloat(num1);
num2 = parseFloat(num2);

if ( op == '+') {
    calculate = window.prompt(num1 + num2)
}
else if ( op == '-') {
    calculate = window.prompt(num1 - num2)
}
if ( op == '*') {
    calculate = window.prompt(num1 * num2)
}
else if ( op == '/') {
    calculate = window.prompt(num1 / num2)
}

