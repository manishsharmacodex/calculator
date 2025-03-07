const addBtn = document.getElementById("btn1");
const subBtn = document.getElementById("btn2");
const mulBtn = document.getElementById("btn3");
const divBtn = document.getElementById("btn4");

const number1 = document.getElementById("num1");
const number2 = document.getElementById("num2");


// code for additions
addBtn.addEventListener("click",()=>{
    
    const result = document.getElementById("results");

    const newAddBtn = parseInt(number1.value);
    const newAddBtn2 = parseInt(number2.value);

    const total = newAddBtn + newAddBtn2;
    result.innerHTML = `The Addition of ${newAddBtn} + ${newAddBtn2} is ${total}`;
    
})


// code for subtractions
subBtn.addEventListener("click",()=>{
    
    const result = document.getElementById("results");

    const newAddBtn = parseInt(number1.value);
    const newAddBtn2 = parseInt(number2.value);

    const total = newAddBtn - newAddBtn2;
    result.innerHTML = `The Subtraction of ${newAddBtn} - ${newAddBtn2} is ${total}`;
    
})


// code for multiplications
mulBtn.addEventListener("click",()=>{
    
    const result = document.getElementById("results");

    const newAddBtn = parseInt(number1.value);
    const newAddBtn2 = parseInt(number2.value);

    const total = newAddBtn * newAddBtn2;
    result.innerHTML = `The Multiplication of ${newAddBtn} * ${newAddBtn2} is ${total}`;
    
})


// code for divisions
divBtn.addEventListener("click",()=>{
    
    const result = document.getElementById("results");

    const newAddBtn = parseInt(number1.value);
    const newAddBtn2 = parseInt(number2.value);

    const total = newAddBtn / newAddBtn2;
    result.innerHTML = `The Division of ${newAddBtn} / ${newAddBtn2} is ${total}`;
    
})