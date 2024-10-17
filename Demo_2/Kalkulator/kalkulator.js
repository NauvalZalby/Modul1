const display = document.getElementById('display');
let currentInput = '';
let previousInput = '';
let operator = '';

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerText;

        if (e.target.classList.contains('number')) {  //memeriksa apkh tombol yg diclick punya class number 
            appendNumber(buttonText);                   // u menambahkan angka ke input
        } else if (e.target.classList.contains('operator')) { //sama kek atas
            chooseOperator(e.target.getAttribute('data-operator'));
        } else if (e.target.id === 'clear') {       //sama
            clearDisplay();                         //hapus layar
        } else if (e.target.id === 'equal') {       
            calculate();                            //fungi calc, htung hasil
        }
    });
});

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function chooseOperator(op) {
    if (currentInput === '') 
        return;
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    display.value = '';
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput); //conf (...) dr string ke angka dgn tipe float
    const curr = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(curr)) return;

    switch (operator) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
        case '%':
            result = prev % curr;
            break;
        case '^':
            result = Math.pow(prev, curr);
            break;
        default:
            return;
    }

    currentInput = result;
    operator = '';           //mengosongkn
    previousInput = '';
    display.value = result; 
}
