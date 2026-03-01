// 1. Iniciamos el carrito recuperando datos de LocalStorage
let cart = JSON.parse(localStorage.getItem("sena-cart")) || [];

// --- FUNCIONES DE PERSISTENCIA (Privadas) ---
const saveCart = () => {
  localStorage.setItem("sena-cart", JSON.stringify(cart));
  updateCartBadge(); // Siempre que guardamos, actualizamos el numerito
};

// --- FUNCIONES PÚBLICAS ---

export const addToCart = (product) => {
  const existingProduct = cart.find(item => item.id === product.id);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart(); // Guardar cambios
};

export const updateQuantity = (productId, change) => {
  const product = cart.find(item => item.id === productId);

  if (product) {
    product.quantity += change;

    // Si llega a cero, lo sacamos del array
    if (product.quantity <= 0) {
      cart = cart.filter(item => item.id !== productId);
    }
  }

  saveCart();
  renderCartItems(); // Re-dibujamos para que el usuario vea el cambio en el modal
};

export const updateCartBadge = () => {
  const badge = document.querySelector("#cart-count");
  if (badge) {
    // Usamos getCartCount para sumar cantidades (1+1+2 = 4 items)
    const totalItems = getCartCount();
    badge.textContent = totalItems;

    badge.classList.add("pulse");
    setTimeout(() => badge.classList.remove("pulse"), 300);
  }
};

// LA FUNCIÓN QUE FALTABA
export const updateTotalPrice = () => {
  const totalElement = document.querySelector('#cart-total');
  if (!totalElement) return;

  const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  totalElement.textContent = `$${total.toLocaleString()}`;
};

export const renderCartItems = () => {
  const container = document.querySelector('#cart-items-container');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = '<p class="empty-msg">Tu carrito está vacío</p>';
    updateTotalPrice(); // Actualizar a $0
    return;
  }

  container.innerHTML = cart.map(item => `
    <div class="cart-item fade-in">
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <p>$${(item.price * item.quantity).toLocaleString()}</p>
        
        <div class="qty-controls">
          <button class="btn-qty" data-id="${item.id}" data-change="-1">-</button>
          <span class="qty-number">${item.quantity}</span>
          <button class="btn-qty" data-id="${item.id}" data-change="1">+</button>
        </div>
      </div>
      <button class="btn-remove-all" data-id="${item.id}">🗑️</button>
    </div>
  `).join('');

  updateTotalPrice(); // Ahora sí está definida aquí arriba
};

export const removeFromCart = (productId) => {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  renderCartItems();
};

export const getCartCount = () => {
  return cart.reduce((acc, item) => acc + item.quantity, 0);
};

export const getCart = () => cart;

export const getTotalPrice = () => {
  return cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
};

export const clearCart = () => {
  cart = [];
  localStorage.setItem("sena-cart", JSON.stringify(cart));
  updateCartBadge();
};