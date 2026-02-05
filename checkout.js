function toggleSidebar() {
    var sidebar = document.getElementById("sideget");
    if (sidebar.style.display === "block") {
        sidebar.style.display = "none";
    } else {
        sidebar.style.display = "block";
    }

    document.getElementById("close").style.display = "none";
}
function conform() {
    alert("Thank You...! Your Order Succsessfuly Submit");
    let fname = document.getElementById("firstname").value;
    let lname = document.getElementById("lastname").value;
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;
    let code = document.getElementById("code").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;

    let cardholder = document.getElementById("cdname").value;
    let bank = document.getElementById("bankname").value;
    let cardnumber = document.getElementById("cardnumber").value;
    let validdate = document.getElementById("vdate").value;
    let cvv = document.getElementById("snumber").value;

    localStorage.setItem("firstName", fname);


    console.log(fname, lname, address, city, code, phone, email, cardholder, bank, cardnumber, validdate, cvv);


}
function resetform() {
    location.reload();
}
window.onload = function () {
    renderCart();
};
function renderCart() {
    const cartList = document.getElementById('cart-items-list');
    const grandTotalDisplay = document.getElementById('grand-total');

    // 1. Load data from localStorage
    const cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];

    // 2. Clear current display
    cartList.innerHTML = '';

    if (cart.length === 0) {
        cartList.innerHTML = '<div class="empty-msg">Your cart is empty. <br><br> <a href="index.html">Go back to shop</a></div>';
        grandTotalDisplay.innerText = "0.00";
        return;
    }

    let totalSum = 0;

    // 3. Loop through items and build the HTML
    cart.forEach((item, index) => {
        const lineTotal = item.price * item.quantity;
        totalSum += lineTotal;

        const itemHTML = `
                <div class="cart-item">
                    <img src="${item.img}" alt="${item.name}" width="80" height="80">
                    <div class="item-details">
                        <h4>${item.name}</h4>
                        <p>Color: <strong>${item.color}</strong></p>
                        <p>Price: ${"Rs." + item.price}</p>
                        <p>Quantity: ${item.quantity}</p>
                    </div>
                    <div style="text-align: right; margin-right: 20px;">
                        <strong>${"Rs." + lineTotal.toFixed(2)}</strong>
                    </div>
                </div>
            `;
        cartList.innerHTML += itemHTML;
    });

    // 4. Update Final Price
    grandTotalDisplay.innerText = totalSum.toFixed(2);
}

// Function to remove one specific item row
function removeProduct(index) {
    let cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    cart.splice(index, 1); // Remove the item at the specific index
    localStorage.setItem('shoppingCart', JSON.stringify(cart)); // Save back to storage
    renderCart(); // Refresh the page view
}

// Function to wipe the whole cart
function clearFullCart() {
    if (confirm("Are you sure you want to clear your cart?")) {
        localStorage.removeItem('shoppingCart');
        renderCart();
    }
}

// Initial call to display items when page opens
renderCart();
