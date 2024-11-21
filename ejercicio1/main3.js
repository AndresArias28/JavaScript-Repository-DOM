//o	Crea un nuevo <p> que contenga el texto "Este es un párrafo creado dinámicamente" usando document.createElement y agrégalo al final del <body>.
let parr = document.createElement("p");
parr.textContent = "Este es un párrafo creado dinámicamente";
document.body.appendChild(parr);


//que elimine el primer <p> que encuentres en el DOM.

let btn = document.querySelector("#eliminar");
btn.addEventListener("click", () => {
    let p = document.querySelector("p");
    p.remove();
});
