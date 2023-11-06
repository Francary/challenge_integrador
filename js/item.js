const add = document.querySelectorAll("#add");
const subtract = document.querySelectorAll("#subtract");
const quantity = document.querySelectorAll("#quantity");

add.forEach((add, index) => {
    add.addEventListener('click', () => {
        quantity[index].value = Number(quantity[index].value) + 1;
    });
});
console.log(add)
subtract.forEach((subtract, index) => {
    subtract.addEventListener('click', () => {
        if (Number(quantity[index].value) > 1) {
            quantity[index].value = Number(quantity[index].value) - 1;
        }
    });
});

quantity.forEach((quantity, index) => {
    quantity.addEventListener("change", ()=> {
        const verificarValue = quantity.value.replace(/\D/g, '');
        if (quantity.value !== verificarValue) {
            quantity.value = 1;
            alert("SOLO PERMITE NUMEROS POSITIVOS")
          }  
    });
});