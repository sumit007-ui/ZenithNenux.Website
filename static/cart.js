// Assuming the cart data is stored in local storage
const cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to display the cart items
function displayCartItems() {
    const cartContainer = document.getElementById('cart-container');

    // Clear existing items
    cartContainer.innerHTML = '';

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    // Iterate over cart items and display them
    cart.forEach((item, index) => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');

        cartItemDiv.innerHTML = `
            <h3>${item.title}</h3>
            <p>Price: $${item.price}</p>
            <button class="remove-btn" data-index="${index}">Remove</button>
        `;

        cartContainer.appendChild(cartItemDiv);
    });

    // Display total price
    const totalPrice = cart.reduce((total, item) => total + parseFloat(item.price), 0);
    document.getElementById('total-price').innerHTML = `Total Price: $${totalPrice.toFixed(2)}`;

    // Add event listeners for remove buttons
    const removeButtons = document.querySelectorAll('.remove-btn');
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            removeFromCart(index);
        });
    });
}

// Function to remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1); // Remove item from cart
    localStorage.setItem('cart', JSON.stringify(cart)); // Update local storage
    displayCartItems(); // Refresh cart display
}

// Call the function to display items when the page loads
displayCartItems();


function addToCart(title, price) {
    const item = { title, price };
    cart.push(item); // Add item to cart array
    localStorage.setItem('cart', JSON.stringify(cart)); // Save cart to local storage
    alert(`${title} has been added to your cart!`);
    console.log(cart); // Display cart items in the console for debugging
}
