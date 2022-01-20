let displayText = "null";
let oA = null;
let oB = null;
let bufferNum = null;

function operate(a,b,o){
    switch(o){
        case '+' : return a+b;
        case '-' : return a-b;
        case '*' : return a*b;
        case '/' : return a/b;
    }
}
const display = document.querySelector('.display');
const btnNums = document.querySelectorAll('.num');
btnNums.forEach(btnNum => {
    btnNum.addEventListener('click', ()=>{
        if(displayText === 'null'){
            displayText = btnNum.textContent;
        }
        else{
            displayText += btnNum.textContent;
        }
        display.textContent = displayText;
    });
});

