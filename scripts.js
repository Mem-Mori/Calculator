let operation = [];
let temp = [];
let solution = [];
let display = [];

// Clear All
document.getElementById("delete").addEventListener('click', function() {
    solution = [];
    temp = [];
    operation = [];
    display = [];
    operatorOff();
    document.getElementById('arith').textContent = '';
    document.getElementById('solution').textContent = '';
});

// Division
document.getElementById("divide").addEventListener('click', function() {
    if (operation[1] && temp[0]) {
        calculate();
    }
    if(temp[0]) {
        operation.push(temp.join(''));
    };
    temp = [];
    operation.push(' / ');
    display.push(' / ');
    document.getElementById('arith').textContent = display.join('');
    decimal();
    operatorOff();
    solution = [];
});

// Multiplication
document.getElementById("multiply").addEventListener('click', function() {
    if (operation[1] && temp[0]) {
        calculate();
    }    
    if(temp[0]) {
        operation.push(temp.join(''));
    };
    temp = [];
    operation.push(' * ');
    display.push(' * ');
    document.getElementById('arith').textContent = display.join('');
    decimal();
    operatorOff();
    solution = [];
});

// Subtraction
document.getElementById("subtract").addEventListener('click', function() {
    if (operation[1] && temp[0]) {
        calculate();
    }
    if(temp[0]) {
        operation.push(temp.join(''));
    };
    temp = [];
    operation.push(' - ');
    display.push(' - ');
    document.getElementById('arith').textContent = display.join('');
    decimal();
    operatorOff();
    solution = [];
});

// Addition
document.getElementById("add").addEventListener('click', function() {
    if (operation[1] && temp[0]) {
        calculate();
    }
    if(temp[0]) {
        operation.push(temp.join(''));
    };
    temp = [];
    operation.push(' + ');
    display.push(' + ');
    document.getElementById('arith').textContent = display.join('');
    decimal();
    operatorOff();
    solution = [];
    
});

// One
document.getElementById("one").addEventListener('click', function() {
    temp.push('1');
    display.push('1');
    update();
    operatorOn();
});

// Two
document.getElementById("two").addEventListener('click', function() {
    temp.push('2');
    display.push('2');
    update();
    operatorOn();
});

// Three
document.getElementById("three").addEventListener('click', function() {
    temp.push('3');
    display.push('3');
    update();
    operatorOn();
});

// Four
document.getElementById("four").addEventListener('click', function() {
    temp.push('4');
    display.push('4');
    update();
    operatorOn();
});

// Five
document.getElementById("five").addEventListener('click', function() {
    temp.push('5');
    display.push('5');
    update();
    operatorOn();
});

// Six
document.getElementById("six").addEventListener('click', function() {
    temp.push('6');
    display.push('6');
    update();
    operatorOn();
});

// Seven
document.getElementById("seven").addEventListener('click', function() {
    temp.push('7');
    display.push('7');
    update();
    operatorOn();
});

// Eight
document.getElementById("eight").addEventListener('click', function() {
    temp.push('8');
    display.push('8');
    update();
    operatorOn();
});

// Nine
document.getElementById("nine").addEventListener('click', function() {
    temp.push('9');
    display.push('9');
    update();
    operatorOn();
});

// Zero
document.getElementById("zero").addEventListener('click', function() {
    temp.push('0');
    display.push('0');
    update();
    operatorOn();
});

// Back / delete last entry key
document.getElementById("clear").addEventListener('click', function() {
    temp.pop();
    display.pop();
    document.getElementById('arith').textContent = display.join('');
});


// Decimal key
document.getElementById("dec").addEventListener('click', function() {
    temp.push('.');
    display.push('.');
    let button = document.getElementById('dec');
    button.disabled = true;
});

// Enter / = key
document.getElementById("calc").addEventListener('click', function() {
    if (operation[1] && temp[0]) {
        calculate();
    }
});

// Update display readout
const update = function() {
    document.getElementById('arith').textContent = display.join('');
    document.getElementById('solution').textContent = '';
};


// Quick maffs
const operate = function(num1, operator, num2) {
    if ( (num1 == 0) && operator == ' / ' && (num2 == 0) ) {
        solution.push('Physics Engine has Crashed');
    } else if ((num2 == 0) && (operator == ' / ')) {
        solution.push('Divide by 0 Error');
        } else {
            switch (operator) {
                case ' + ':
                    solution.push(
                        (+(num1)) + (+(num2))
                        );
                    break;
                case ' - ':
                    solution.push(
                        (+(num1)) - (+(num2))
                        );
                    break;
                case ' * ':
                    solution.push(
                        (+(num1)) * (+(num2))
                        );
                    break;
                case ' / ':
                    solution.push(
                        (+(num1)) / (+(num2))
                        );
                    break;
            }
        }    
    
}


//Start with operator keys disabled to force number entry
const operatorOff = function() {
    let aButton = document.getElementById('add');
    let sButton = document.getElementById('subtract');
    let mButton = document.getElementById('multiply');
    let dButton = document.getElementById('divide');
    aButton.disabled = true;
    sButton.disabled = true;
    mButton.disabled = true;
    dButton.disabled = true;
}

//Start with operator keys disabled to force number input
operatorOff();

// Reactivate operator keys/buttons
const operatorOn = function() {
    let aButton = document.getElementById('add');
    let sButton = document.getElementById('subtract');
    let mButton = document.getElementById('multiply');
    let dButton = document.getElementById('divide');
    aButton.disabled = false;
    sButton.disabled = false;
    mButton.disabled = false;
    dButton.disabled = false;
}

// Reactivate decimal key/button
const decimal = function() {
    let button = document.getElementById('dec');
    button.disabled = false;
}

// Enter key processes, seperated to be used with operator keys
const calculate = function() {
    operation.push(temp.join(''))
    solution = [];
    solution.push(operate(operation[0], operation[1], operation[2]));
    document.getElementById('solution').textContent = solution[0];
    temp = [];
    operation = [];
    operation.push(solution[0]);
    display = [];
    display.push(solution[0]);
    decimal();
    operatorOn();
}

// Keypress Integration
window.onkeydown = function(event) {
    let x = event.key;
    let choice
    switch(x) {
        case '0':
            choice = document.querySelector('#zero');
            choice.click();
            break;
        case '1':
            choice = document.querySelector('#one');
            choice.click();
            break;
        case '2':
            choice = document.querySelector('#two');
            choice.click();
            break;
        case '3':
            choice = document.querySelector('#three');
            choice.click();
            break;
        case '4':
            choice = document.querySelector('#four');
            choice.click();
            break;
        case '5':
            choice = document.querySelector('#five');
            choice.click();
            break;
        case '6':
            choice = document.querySelector('#six');
            choice.click();
            break;
        case '7':
            choice = document.querySelector('#seven');
            choice.click();
            break;
        case '8':
            choice = document.querySelector('#eight');
            choice.click();
            break;
        case '9':
            choice = document.querySelector('#nine');
            choice.click();
            break;
        case '.':
            choice = document.querySelector('#dec');
            choice.click();
            break;
        case '+':
            choice = document.querySelector('#add');
            choice.click();
            break;
        case '-':
            choice = document.querySelector('#subtract');
            choice.click();
            break;
        case '*':
            choice = document.querySelector('#multiply');
            choice.click();
            break;
        case '/':
            choice = document.querySelector('#divide');
            choice.click();
            break;
        case 'Backspace':
            choice = document.querySelector('#clear');
            choice.click();
            break;
        case 'Enter':
            choice = document.querySelector('#calc');
            choice.click();
            break;
        case '.':
            choice = document.querySelector('#dec');
            choice.click();
            break;
        case 'Delete':
            choice = document.querySelector('#delete');
            choice.click();
            break;
    }
}