const products = [
  {
    name: "Birthday Hamper",
    price: 2000,
    image: "images/hamper1.jpg",
    description: "Make birthdays special with our vibrant gift hamper.",
  },
  {
    name: "Anniversary Hamper",
    price: 999,
    image: "images/hamper2.jpg",
    description: "Celebrate love with our anniversary hamper.",
  },
  {
    name: "Corporate Hamper",
    price: 1999,
    image: "images/hamper3.jpg",
    description: "Ideal for gifting in corporate settings.",
  },
  {
    name: "Bridesmaid Hamper",
    price: 1499,
    image: "images/hamper4.jpg",
    description: "Specially curated hampers for bridesmaids.",
  },
  {
    name: "Chocolate Hamper",
    price: 1699,
    image: "images/hamper5.jpg",
    description: "Loaded with gourmet chocolates.",
  },
  {
    name: "Baby Shower Hamper",
    price: 999,
    image: "images/hamper6.jpg",
    description: "Sweet essentials for baby celebrations.",
  },
  {
    name: "Flower Bouquet",
    price: 2499,
    image: "images/hamper7.jpg",
    description: "Loaded with flowers.",
  }
];

let cart = [];

function displayProducts(displayList = products) {
  const list = document.getElementById("product-list");
  list.innerHTML = "";
  displayList.forEach((product, index) => {
    const item = document.createElement("div");
    item.className = "product-card";
    item.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <strong>₹${product.price}</strong><br/>
      <button onclick="addToCart(${index})">Add to Cart</button>
    `;
    list.appendChild(item);
  });
}

function addToCart(index) {
  const product = products[index];
  const existing = cart.find(item => item.name === product.name);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  updateCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const total = document.getElementById("total-price");
  cartItems.innerHTML = "";
  let sum = 0;

  cart.forEach((item, idx) => {
    const subtotal = item.price * item.quantity;
    sum += subtotal;

    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - ₹${item.price} × ${item.quantity} = ₹${subtotal}
      <button onclick="removeFromCart(${idx})">Remove</button>
    `;
    cartItems.appendChild(li);
  });

  total.textContent = sum;
}

document.getElementById("searchInput").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(query));
  displayProducts(filtered);
});

displayProducts();
