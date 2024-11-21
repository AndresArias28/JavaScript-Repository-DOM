let textoDiv = document.getElementById("info").innerText; 
console.log(textoDiv);

let textParrafo = document.querySelector(".detalle").innerText;
textParrafo = "Este es un detalle modificado";
console.log(textParrafo);

let parrafos = document.querySelectorAll("p");
parrafos.forEach(parrafo => {
    parrafo.style.backgroundColor = "lightblue";
  });
