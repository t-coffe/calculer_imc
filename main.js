let kg = document.querySelector("#kg");
let m = document.querySelector("#m");
let valider = document.querySelector("#valider");
let imc = document.querySelector("#imc");
let result = 0 ;
let doublem = 0 ;

imc.textContent = "IMC"

function calculer() {
    doublem = m.value*m.value ;
    result = kg.value / doublem; 
    imc.textContent = result;
};

valider.addEventListener("click", calculer);

/* kg diviser par le double de la taille  */