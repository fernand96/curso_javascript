//CAMBIAR EL CSS CON JS
const encabezado = document.querySelector("h1");

encabezado.style.backgroundColor = "red";
encabezado.style.fontFamily = "Arial";
encabezado.style.textTransform = "uppercase";

//OTRA FORMA DE HACERLO
let card = document.querySelector(".card");
//AGREGANDO SOLO UNA CLASE
card.classList.add = ("Nueva-clase");

//AGREGANDO DOS CLASES O PODRIAN SER MAS
card.classList.add = ("Nueva-clase","Segunda-clase");

// console.log(card.classList);

//COMO REMOVER UNA CLASE
card.classList.remove = "Segunda-clase";
console.log(card.classList);