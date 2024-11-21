// Selecciona los botones por su ID
const botonAlerta = document.getElementById('clickMe');
const botonRemover = document.getElementById('removeEvent');

// Define la función que se ejecutará al hacer clic en el botón "clickMe"
function showAlert() {
    alert('¡Botón clickeado!');
}

// Agrega el evento de clic al botón "clickMe"
botonAlerta.addEventListener('click', showAlert);

// Agrega el evento de clic al botón "removeEvent"
botonRemover.addEventListener('click', () => {
    // Elimina el evento de clic del botón "clickMe"
    botonAlerta.removeEventListener('click', showAlert);
    alert('El evento del botón "Click Me" ha sido eliminado.');
});

