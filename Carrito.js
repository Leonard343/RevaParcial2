let cartCount = 0; // Contador del carrito
let cartItems = {}; // Objeto para almacenar los artículos en el carrito

function addToCart(productName, price) {
    cartCount++;
    document.getElementById('cart-icon').innerText = `🛒 (${cartCount})`;

    // Añadir el producto al carrito
    if (!cartItems[productName]) {
        cartItems[productName] = { quantity: 1, price: price };
    } else {
        cartItems[productName].quantity++;
    }

    // Mostrar mensaje de éxito
    alert(`${productName} ha sido agregado al carrito. Precio: $${price}`);
    updateCartDisplay();
}

function removeItem(productName) {
    if (productName in cartItems) {
        delete cartItems[productName];
        cartCount--;
        document.getElementById('cart-icon').innerText = `🛒 (${cartCount})`;
        alert(`${productName} ha sido eliminado del carrito.`);
        updateCartDisplay();
    }
}

function updateQuantity(productName, change) {
    if (productName in cartItems) {
        cartItems[productName].quantity += change;

        // Evitar que la cantidad sea menor a 1
        if (cartItems[productName].quantity < 1) {
            removeItem(productName); // Elimina el artículo si la cantidad es menor que 1
        } else {
            updateCartDisplay(); // Actualiza el carrito sin alertas
        }
    }
}

function updateCartDisplay() {
    const carritoItemsContainer = document.querySelector('.carrito-items');
    carritoItemsContainer.innerHTML = ''; // Limpiar la lista actual

    let subtotal = 0;
    for (const productName in cartItems) {
        const item = cartItems[productName];
        subtotal += item.price * item.quantity;

        // Crear un nuevo elemento para cada artículo
        const itemDiv = document.createElement('div');
        itemDiv.className = 'carrito-item';
        itemDiv.innerHTML = `
            <img src="img_ropa/Camisa_casual.png" alt="${productName}">
            <div class="carrito-item-info">
                <h3>${productName}</h3>
                <div class="item-controls">
                    <button onclick="updateQuantity('${productName}', -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity('${productName}', 1)">+</button>
                    <select id="${productName}-color">
                        <option value="rojo">Rojo</option>
                        <option value="azul">Azul</option>
                        <option value="verde">Verde</option>
                    </select>
                    <button class="remove-button" onclick="removeItem('${productName}')">Eliminar</button>
                </div>
                <p>Precio: $${item.price.toFixed(2)}</p>
                <p>Total: $${(item.price * item.quantity).toFixed(2)}</p>
            </div>
        `;
        carritoItemsContainer.appendChild(itemDiv);
    }

    const shipping = 5.00; // Envío fijo
    const total = subtotal + shipping; // Calcular el total

    // Actualizar el resumen del pedido
    document.querySelector('.carrito-resumen p:nth-child(1)').innerText = `Subtotal: $${subtotal.toFixed(2)}`;
    document.querySelector('.carrito-resumen p:nth-child(3)').innerText = `Envío: $${shipping.toFixed(2)}`;
    document.querySelector('.carrito-resumen strong').innerText = `Total: $${total.toFixed(2)}`;
}

function checkout() {
    alert("Procesando pago...");
    // Lógica adicional para completar la compra
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

// Agregar productos de ejemplo
addToCart('Camisa Casual', 29.99);
addToCart('Pantalones', 49.99);
