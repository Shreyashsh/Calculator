let numBts = document.querySelectorAll('.box.number');
let opBts = document.querySelectorAll('.box.operator');
let num1;
let lenNum1;
let op;

numBts.forEach(numbt=>{
    numbt.addEventListener('click', function(){
        document.getElementById('pane').innerText += this.innerText;
    });
});

opBts.forEach(opbt=>{
    opbt.addEventListener('click', function(){
        let pane = document.getElementById('pane');
        num1 = pane.innerText;
        pane.innerText += this.innerText;
        op = this.innerText;
        lenNum1 = pane.innerText.length;
    })
});

let eq = document.getElementById('eq');
eq.addEventListener('click', function(){
    let pane = document.getElementById('pane');
    let num2 = pane.innerText.substring(lenNum1, pane.innerText.length);
    pane.innerText = operate(num1, num2, op);
})

let reset = document.getElementById('reset');
reset.addEventListener('click', function(){
    num1 = undefined;
    op = undefined;
    lenNum1 = undefined;
    document.getElementById('pane').innerText = "";
})

const add = function(num1, num2){
    return num1 + num2;
}

const subtract = function(num1, num2){
    return num1 - num2;
}

const multiply = function(num1, num2){
    return num1*num2;
}

const divide = function(num1, num2){
    return num1/num2;
}

function operate(num1, num2, op){
    if(op=="+") return add(num1, num2);
    if(op=="-") return subtract(num1, num2);
    if(op=="*") return multiply(num1, num2);
    if(op=="/") return divide(num1, num2);
}

