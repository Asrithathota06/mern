const cartCount = document.getElementById("cartCount");
const { page } = document.body.dataset;

let items = JSON.parse(localStorage.getItem("cart")) || [];

const saveCart = () =>
    localStorage.setItem("cart", JSON.stringify(items));

const validEmail = email =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Protect catalog and cart pages
if (
    (page === "catalog" || page === "cart") &&
    !localStorage.getItem("loggedIn")
) {
    window.location.href = "login.html";
}

function renderCart() {
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");

    if (!cartItems || !cartTotal) return;

    let total = 0;
    cartItems.innerHTML = "";

    if (!items.length) {
        cartItems.innerHTML = "<li>No items added</li>";
    }

    items.forEach(item => {
        total += item.price;

        cartItems.innerHTML += `
        <li class="list-group-item d-flex justify-content-between">
            <span>${item.name}</span>
            <span>₹${item.price}</span>
        </li>`;
    });

    cartTotal.textContent = `₹${total}`;
    cartCount.textContent = items.length;

    saveCart();
}

function handleRegister() {
    document.getElementById("registerForm")
    ?.addEventListener("submit", e => {
        e.preventDefault();

        const name = registerName.value.trim();
        const email = registerEmail.value;
        const pass = registerPassword.value;
        const msg = registerMessage;

        if (name && validEmail(email) && pass.length >= 6) {
            localStorage.setItem("user", email);
            msg.textContent = "Registration Successful";
            e.target.reset();
        } else {
            msg.textContent = "Invalid Details";
        }
    });
}

function handleLogin() {
    document.getElementById("loginForm")
    ?.addEventListener("submit", e => {
        e.preventDefault();

        if (
            validEmail(loginEmail.value) &&
            loginPassword.value.length >= 6
        ) {
            localStorage.setItem("loggedIn", true);
            loginMessage.textContent = "Login Successful";
            window.location.href = "catalog.html";
        } else {
            loginMessage.textContent = "Invalid Details";
        }
    });
}

function handleCatalog() {
    document.querySelectorAll(".add-to-cart")
    .forEach(btn => {
        btn.onclick = () => {
            items.push({
                name: btn.dataset.name,
                price: +btn.dataset.price
            });

            cartCount.textContent = items.length;
            saveCart();
        };
    });
}

function handleCart() {
    clearCart?.addEventListener("click", () => {
        items = [];
        renderCart();
    });
}

// Logout functionality
const logoutBtn = document.getElementById("logoutBtn");
logoutBtn?.addEventListener("click", () => {
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
});

cartCount.textContent = items.length;

if (page === "register") handleRegister();
if (page === "login") handleLogin();
if (page === "catalog") handleCatalog();

if (page === "cart") {
    handleCart();
    renderCart();
}
