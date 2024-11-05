// Main.js

let cartCount = 0; // Contador del carrito

function addToCart(productName, price) {
    cartCount++;
    document.getElementById('cart-icon').innerText = `🛒 (${cartCount})`;
    alert(`${productName} ha sido agregado al carrito. Precio: $${price}`);
}

// Función para alternar la visibilidad del menú lateral
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('show'); // Alternar la clase show
}

// Evento personalizado para el menú
document.querySelector('.menu-toggle').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    const event = new Event('menuToggled');
    sidebar.dispatchEvent(event); // Despacha el evento personalizado
});

// Escucha el evento personalizado
document.getElementById('sidebar').addEventListener('menuToggled', function() {
    console.log('El menú ha sido alternado'); // Acción adicional al alternar el menú
});
