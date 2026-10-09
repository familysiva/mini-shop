let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  updateCartUI();
}

function updateCartUI() {
  document.getElementById('cart-count').innerText = cart.length;
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  document.getElementById('cart-total').innerText = total;
}