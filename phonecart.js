document.getElementById('phone-001').addEventListener('click', function () {
    const colorSelect = document.getElementById('color-select');
    const qtyInput = document.getElementById('qty-input');

    const product = {
        id: this.dataset.id,
        name: this.dataset.name,
        price: parseFloat(this.dataset.price),
        img: this.dataset.img,
        
        color: colorSelect.value,
        quantity: parseInt(qtyInput.value)
    };

    let cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];

   
    const existingIndex = cart.findIndex(item =>
        item.id === product.id && item.color === product.color
    );

    if (existingIndex > -1) {
        cart[existingIndex].quantity += product.quantity;
    } else {
        cart.push(product);
    }

    localStorage.setItem('shoppingCart', JSON.stringify(cart));
    alert(`Added ${product.quantity} ${product.color} ${product.name} to cart!`);
});