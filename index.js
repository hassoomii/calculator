const oneButton = document.getElementById('1');
const twoButton = document.getElementById('2');
const threeButton = document.getElementById('3');
const fourButton = document.getElementById('4');
const fiveButton = document.getElementById('5');
const sixButton = document.getElementById('6');
const sevenButton = document.getElementById('7');
const eightButton = document.getElementById('8');
const nineButton = document.getElementById('9');
const zeroButton = document.getElementById('0');
const clearButton = document.getElementById('clearScreen');
const solveButton = document.getElementById('solve');
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
const displayText = document.getElementById('outputText');
let display = '';

function expressionInput(buttonName, characterQuo){
    buttonName.addEventListener('click', () => {
        console.log(characterQuo);
        display += characterQuo;
        updateDisplay();
    }); 
};

function updateDisplay(){
    displayText.textContent = display;
};

expressionInput(oneButton, '1');
expressionInput(twoButton, '2');
expressionInput(threeButton, '3');
expressionInput(fourButton, '4');
expressionInput(fiveButton, '5');
expressionInput(sixButton, '6');
expressionInput(sevenButton, '7');
expressionInput(eightButton, '8');
expressionInput(nineButton, '9');
expressionInput(zeroButton, '0');
expressionInput(addButton, '+');
expressionInput(subtractButton, '-');
expressionInput(multiplyButton, '*');
expressionInput(divideButton, '/');

clearButton.addEventListener('click', () => {
    display = '';
    updateDisplay();
});

solveButton.addEventListener('click', () => {
    display = eval(display);
    updateDisplay();
});