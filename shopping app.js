// // Define the base URL for the API
// const BASE_URL = "https://fakestoreapi.com";

// // DOM elements
// const productsList = document.getElementById("products-list");
// const cartLink = document.getElementById("cart-link");
// const cartCount = document.getElementById("cart-count");
// const cartSection = document.getElementById("cart-section");
// const cartItemsList = document.getElementById("cart-items");
// const checkoutBtn = document.getElementById("checkout-btn");

// let cart = [];

// // Fetch Products from the API
// async function fetchProducts() {
//   try {
//     const response = await fetch(`${BASE_URL}/products`);
//     const products = await response.json();
//     displayProducts(products);
//   } catch (error) {
//     console.error("Error fetching products:", error);
//   }
// }

// // Display Products
// function displayProducts(products) {
//   productsList.innerHTML = "";
//   products.forEach(product => {
//     const productCard = document.createElement("div");
//     productCard.classList.add("product-card");

//     productCard.innerHTML = `
//       <div class="product-image-container">
//         <img src="${product.image}" alt="${product.title}" class="product-image"/>
//       </div>
//       <h3>${product.title}</h3>
//       <p>$${product.price}</p>
//       <button onclick="addToCart('${product.id}', '${product.title}', ${product.price})">Add to Cart</button>
//     `;
    
//     productsList.appendChild(productCard);
//   });
// }

// // Add product to cart
// function addToCart(productId, name, price) {
//   const existingProduct = cart.find(item => item.id === productId);

//   if (existingProduct) {
//     existingProduct.quantity += 1;
//   } else {
//     cart.push({ id: productId, name, price, quantity: 1 });
//   }

//   updateCart();
// }

// // Update cart display
// function updateCart() {
//   const cartCountValue = cart.reduce((total, item) => total + item.quantity, 0);
//   cartCount.innerText = cartCountValue;

//   // Update cart items list
//   cartItemsList.innerHTML = "";
//   cart.forEach(item => {
//     const cartItem = document.createElement("li");
//     cartItem.innerHTML = `${item.name} - $${item.price} x ${item.quantity}`;
//     cartItemsList.appendChild(cartItem);
//   });
// }

// // Toggle cart visibility
// cartLink.addEventListener("click", () => {
//   cartSection.style.display = cartSection.style.display === "none" ? "block" : "none";
// });

// // Checkout (create order)
// checkoutBtn.addEventListener("click", async () => {
//   try {
//     // Create order with a mock userId (you can replace it with a dynamic user ID later)
//     const order = {
//       userId: 1, // Assume a mock user for now
//       items: cart.map(item => ({ productId: item.id, quantity: item.quantity })),
//       total: cart.reduce((sum, it

// Define the base URL for the API
const BASE_URL = "https://fakestoreapi.com";

// DOM elements
const productsList = document.getElementById("products-list");
const cartLink = document.getElementById("cart-link");
const cartCount = document.getElementById("cart-count");
const cartSection = document.getElementById("cart-section");
const cartItemsList = document.getElementById("cart-items");
const checkoutBtn = document.getElementById("checkout-btn");

let cart = [];

// Fetch Products from the API
async function fetchProducts() {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

// Display Products
function displayProducts(products) {
  productsList.innerHTML = "";
  products.forEach(product => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.title}" />
      <h3>${product.title}</h3>
      <p>$${product.price}</p>
      <button onclick="addToCart('${product.id}', '${product.title}', ${product.price})">Add to Cart</button>
    `;
    
    productsList.appendChild(productCard);
  });
}

// Add product to cart
function addToCart(productId, name, price) {
  const existingProduct = cart.find(item => item.id === productId);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ id: productId, name, price, quantity: 1 });
  }

  updateCart();
}

// Update cart display
function updateCart() {
  const cartCountValue = cart.reduce((total, item) => total + item.quantity, 0);
  cartCount.innerText = cartCountValue;

  // Update cart items list
  cartItemsList.innerHTML = "";
  cart.forEach(item => {
    const cartItem = document.createElement("li");
    cartItem.innerHTML = `${item.name} - $${item.price} x ${item.quantity}`;
    cartItemsList.appendChild(cartItem);
  });

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  document.getElementById("cart-total").innerText = total.toFixed(2);
}

// Toggle cart visibility
cartLink.addEventListener("click", () => {
  cartSection.style.display = cartSection.style.display === "none" ? "block" : "none";
});

// Checkout (create order)
checkoutBtn.addEventListener("click", async () => {
  try {
    // Create order with a mock userId (you can replace it with a dynamic user ID later)
    const order = {
      userId: 1, // Assume a mock user for now
      items: cart.map(item => ({ productId: item.id, quantity: item.quantity })),
      total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    };

    alert("Order placed successfully!");
    cart = [];  // Clear cart
    updateCart();
    cartSection.style.display = "none";  // Hide cart
  } catch (error) {
    console.error("Error during checkout:", error);
  }
});

// Initial fetch
fetchProducts();
