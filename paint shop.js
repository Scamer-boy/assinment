// // API URLs
// const BASE_URL = "http://localhost:3000/api";  // Change to your API endpoint

// // DOM Elements
// const productsList = document.getElementById("products-list");
// const cartLink = document.getElementById("cart-link");
// const cartCount = document.getElementById("cart-count");
// const cartSection = document.getElementById("cart-section");
// const cartItemsList = document.getElementById("cart-items");
// const checkoutBtn = document.getElementById("checkout-btn");

// let cart = [];

// // Fetch Products from API
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
//       <h3>${product.name}</h3>
//       <p>$${product.price}</p>
//       <button onclick="addToCart('${product._id}', '${product.name}', ${product.price})">Add to Cart</button>
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
//     const order = {
//       products: cart,
//       total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
//     };
    
//     const response = await fetch(`${BASE_URL}/orders`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(order),
//     });

//     const result = await response.json();
//     if (result.success) {
//       alert("Order placed successfully!");
//       cart = [];  // Clear cart
//       updateCart();
//       cartSection.style.display = "none";  // Hide cart
//     }
//   } catch (error) {
//     console.error("Error during checkout:", error);
//   }
// });

// // Initial fetch
// fetchProducts();


// API URLs


 BASE_URL = "http://localhost:3000/api";  // Check if this URL is correct

// DOM Elements
const productsList = document.getElementById("products-list");
const cartLink = document.getElementById("cart-link");
const cartCount = document.getElementById("cart-count");
const cartSection = document.getElementById("cart-section");
const cartItemsList = document.getElementById("cart-items");
const checkoutBtn = document.getElementById("checkout-btn");

let cart = [];

// Fetch Products from API
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
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button onclick="addToCart('${product._id}', '${product.name}', ${product.price})">Add to Cart</button>
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
}

// Toggle cart visibility
cartLink.addEventListener("click", () => {
  cartSection.style.display = cartSection.style.display === "none" ? "block" : "none";
});

// Checkout (create order)
checkoutBtn.addEventListener("click", async () => {
  try {
    const order = {
      products: cart,
      total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    };
    
    const response = await fetch(`${BASE_URL}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });

    const result = await response.json();
    if (result.success) {
      alert("Order placed successfully!");
      cart = [];  // Clear cart
      updateCart();
      cartSection.style.display = "none";  // Hide cart
    }
  } catch (error) {
    console.error("Error during checkout:", error);
  }
});

// Initial fetch
fetchProducts();
