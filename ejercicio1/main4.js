//Crea un nuevo <div> que contenga el texto "Soy un nuevo div" y reemplaza el primer <div> que encuentres en la página con este nuevo <div> usando parentNode.replaceChild.
let divViejo = document.getElementById("info");
let div1 =  document.createElement("div");
div1.textContent = "Soy un nuevo div";
divViejo.parentNode.replaceChild(div1, divViejo);
console.log("divViejo", divViejo.textContent);

//


