$(document).ready(function() {
    $('#productsTable').DataTable();
});

function editProduct(id) {
    alert(`Editando producto con ID: ${id}`);
    // Aquí puedes agregar la lógica para editar el producto
}

function deleteProduct(id) {
    if (confirm(`¿Estás seguro de que deseas eliminar el producto con ID: ${id}?`)) {
        // Aquí puedes agregar la lógica para eliminar el producto
        alert(`Producto con ID: ${id} eliminado.`);
        // Después de eliminar, puedes recargar la tabla o hacer una llamada AJAX para actualizarla
    }
}
