const menu = [
  {
    name: "Chicken Momos",
    price: 80,
    image: "images/chicken-momos.jpg",
    description: "Steamed dumplings filled with veggies and served with spicy chutney."
  },
  {
    name: "Chowmein",
    price: 90,
    image: "images/chowmein.jpg",
    description: "Classic Indo-Chinese stir-fried noodles loaded with flavor."
  },
  {
    name: "Chilli Potato",
    price: 70,
    image: "images/chilli-potato.jpg",
    description: "Crispy potato tossed in tangy, spicy Chinese-style sauce."
  },
  {
    name: "Manchurian",
    price: 100,
    image: "images/manchurian.jpg",
    description: "Juicy veggie balls simmered in savory Indo-Chinese gravy."
  },
  {
    name: "Soya Chaap",
    price: 110,
    image: "images/soya-chaap.jpg",
    description: "Tender soy chunks in aromatic tandoori-style flavors."
  }
];

let cart = [];
let totalBill = 0;

function loadMenu() {
  const container = document.getElementById("menu-items");
  if (container) {
    menu.forEach(item => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name} - ₹${item.price}</h3>
        <p>${item.description}</p>
        <button onclick="addToCart('${item.name}', ${item.price})">Add to Cart</button>
      `;
      container.appendChild(div);
    });
  }
}

function addToCart(name, price) {
  cart.push({ name, price });
  totalBill += price;
  updateCart();
}

function updateCart() {
  const cartDetails = document.getElementById("cart-details");
  const totalBillElement = document.getElementById("total-bill");

  cartDetails.innerHTML = cart.map(item => `<p>${item.name} - ₹${item.price}</p>`).join('');
  totalBillElement.innerText = totalBill;
}

window.onload = loadMenu;
