const add = document.getElementById ("add");
const subtract = document.getElementById ("subtract");
const quantity = document.getElementById ("quantity");

add.addEventListener('click', ()=> quantity.value = Number(quantity.value)+1);
subtract.addEventListener('click', ()=> {
    if (Number(quantity.value) <= 1) {
        quantity.value = 1;
    }
    else {
        quantity.value = Number(quantity.value)-1
    }
 })

quantity.addEventListener("change", ()=> {
    const verificarValue = quantity.value.replace(/\D/g, '');
    if (quantity.value !== verificarValue) {
        quantity.value = 1;
        alert("SOLO PERMITE NUMEROS POSITIVOS")
      }  
});

