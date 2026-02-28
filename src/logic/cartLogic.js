// Recuperar carrito de LocalStorage o iniciar vacío
// let cart = JSON.parse(localStorage.getItem("sena-cart")) || [];

export const addToCart = (product) => {
  // 1. Siempre obtenemos la versión más reciente del storage
  const cart = JSON.parse(localStorage.getItem("sena-cart")) || [];

  // 2. Agregamos el nuevo producto
  cart.push(product);

  // 3. Guardamos la nueva lista completa
  localStorage.setItem("sena-cart", JSON.stringify(cart));

  updateCartBadge();
};

export const updateCartBadge = () => {
  const badge = document.querySelector("#cart-count");
  if (badge) {
    const currentCount =
      JSON.parse(localStorage.getItem("sena-cart"))?.length || 0;
    badge.textContent = currentCount;

    // Opcional: Una pequeña animación de "pulso" al agregar
    badge.classList.add("pulse");
    setTimeout(() => badge.classList.remove("pulse"), 300);
  }
};

export const renderCartItems = () => {
  const container = document.querySelector("#cart-items-container");
  const totalElement = document.querySelector("#cart-total-amount");
  const cart = JSON.parse(localStorage.getItem("sena-cart")) || [];

  if (cart.length === 0) {
    container.innerHTML = '<p class="empty-msg">El carrito está vacío</p>';
    totalElement.textContent = "$0";
    return;
  }

  container.innerHTML = cart
    .map(
      (item, index) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <p>$${item.price}</p>
      </div>
      <button class="btn-remove" data-index="${index}">🗑️</button>
    </div>
  `,
    )
    .join("");

  const total = cart.reduce((acc, item) => acc + item.price, 0);
  totalElement.textContent = `$${total}`;
};

export const removeFromCart = (index) => {
  // 1. Obtenemos la versión actual
  const cart = JSON.parse(localStorage.getItem("sena-cart")) || [];

  // 2. Eliminamos por índice
  cart.splice(index, 1);

  // 3. Guardamos
  localStorage.setItem("sena-cart", JSON.stringify(cart));

  // 4. Actualizamos UI
  updateCartBadge();
  renderCartItems();
};

export const getCartCount = () => {
  const cart = JSON.parse(localStorage.getItem("sena-cart")) || [];
  return cart.length;
};
