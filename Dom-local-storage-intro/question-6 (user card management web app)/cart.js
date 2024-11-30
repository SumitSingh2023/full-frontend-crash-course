function displayCartItems() {
    let cartContainer = document.getElementById('container');

    // Local storage se cart data lo
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        cartContainer.innerHTML = "<h2>Cart is empty!</h2>";
        return;
    }

    // Har cart item ke liye DOM element create karo
    cart.forEach((item) => {
        let cartItem = document.createElement('div');
        cartItem.className = 'cart-item';

        let userName = document.createElement('h2');
        userName.textContent = `Name: ${item.username}`;

        let userEmail = document.createElement('p');
        userEmail.textContent = `Email: ${item.email}`;

        let button = document.createElement('button')
        button.className = 'button'
        button.innerText = 'Delete'

        button.addEventListener('click', () => {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart = cart.filter((ele) => item.id !== ele.id)
            localStorage.setItem('cart', JSON.stringify(cart))
            location.reload()
            alert(`${item.username} deleted from cart`)
        })

        cartItem.append(userName, userEmail, button);

        cartContainer.append(cartItem);
    });
}

displayCartItems();
