function calcularTotal() {
    let pizzaSelect = document.getElementById("pizzaSelect");
    let precioPizza = pizzaSelect.value;
    let cantidad = parseInt(document.getElementById("cantidad").value);
    let total = precioPizza * cantidad;
    document.getElementById("total").value = total;
}