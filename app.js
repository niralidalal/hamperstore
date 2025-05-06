const products = [
  {
    name: "Anniversary Hamper",
    price: 2000,
    image: "images/hamper2.jpg",
    description: "Celebrate love with our anniversary hamper.",
  },
  {
    name: "Corporate Hamper",
    price: 2000,
    image: "images/hamper3.jpg",
    description: "Ideal for gifting in corporate settings.",
  },
  {
    name: "Bridesmaid Hamper",
    price: 2000,
    image: "images/hamper4.jpg",
    description: "Specially curated hampers for bridesmaids.",
  },
  {
    name: "Fruit Hamper",
    price: 2000,
    image: "images/hamper5.jpg",
    description: "Fresh fruit selections in an elegant box.",
  },
  {
    name: "Baby Shower Hamper",
    price: 2000,
    image: "images/hamper6.jpg",
    description: "Sweet essentials for baby celebrations.",
  },
  {
    name: "Chocolate Hamper",
    price: 2000,
    image: "images/hamper7.jpg",
    description: "Loaded with gourmet chocolates.",
  }
];

let cart = [];

function loadProducts() {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";
  products.forEach((product, index) => {
    productList.innerHTML += `
      <div class="product">
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p><strong>₹${product.price}</strong></p>
        <button class="btn" onclick="addToCart(${index})">Add to Cart</button>
      </div>
    `;
  });
}

function addToCart(index) {
  cart.push(products[index]);
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cartItems");
  const totalPrice = document.getElementById("totalPrice");
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, i) => {
    total += item.price;
    cartItems.innerHTML += `
      <div>
        ${item.name} - ₹${item.price}
        <button onclick="removeFromCart(${i})">Remove</button>
      </div>
    `;
  });

  totalPrice.textContent = total;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function showCheckout() {
  document.getElementById("checkoutSection").style.display = "block";
}

function filterProducts() {
  const input = document.getElementById("searchBar").value.toLowerCase();
  const productCards = document.querySelectorAll(".product");
  productCards.forEach((card) => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    card.style.display = title.includes(input) ? "block" : "none";
  });
}

document.getElementById("checkoutForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Order placed! (This is a simulated checkout.)");
  cart = [];
  updateCart();
  this.reset();
  document.getElementById("checkoutSection").style.display = "none";
});

// Initialize on load
window.onload = loadProducts;
