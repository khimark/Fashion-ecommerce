const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

// User Class
class User {
    constructor(id, username, password, email) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
    }
}

// Product Class
class Product {
    constructor(id, name, price, description, imageUrl) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.imageUrl = imageUrl;
    }
}

// Cart Class
class Cart {
    constructor() {
        this.items = [];
    }

    addItem(product) {
        let item = this.items.find(item => item.product.id === product.id);

        if (item) {
            item.quantity++;
        } else {
            this.items.push({ product, quantity: 1 });
        }
    }

    removeItem(product) {
        let item = this.items.find(item => item.product.id === product.id);

        if (item) {
            item.quantity--;

            if (item.quantity === 0) {
                this.items = this.items.filter(item => item.product.id !== product.id);
            }
        }
    }

    getTotal() {
        return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }
}

// Utility Functions
const renderCart = () => {
    let total = cart.getTotal();

    document.getElementById('cart').innerHTML = `
        <h3>Cart</h3>
        <ul>
            ${cart.items.map(item => `
                <li>
                    ${item.product.name} x ${item.quantity}
                    <button onclick="removeFromCart(${item.product.id})">Remove</button>
                </li>
            `).join('')}
        </ul>
        <p>Total: $${total.toFixed(2)}</p>
    `;
};

const removeFromCart = (productId) => {
    let product = products.find(product => product.id === productId);
    cart.removeItem(product);
    renderCart();
};

// Product Data
let products = [
    new Product(1, 'Product 1', 10, 'Description 1', 'image-url-1'),
    new Product(2, 'Product 2', 20, 'Description 2', 'image-url-2'),
    new Product(3, 'Product 3', 30, 'Description 3', 'image-url-3'),
];

// Cart Initialization
let cart = new Cart();

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Render cart when the page loads
    renderCart();
});

// Shop Page
document.getElementById('add-to-cart').addEventListener('click', (e) => {
    let product = products.find(product => product.id === 1);
    cart.addItem(product);
    renderCart();
});