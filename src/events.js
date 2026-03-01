import { addToCart, removeFromCart, renderCartItems, updateQuantity } from './logic/cartLogic.js';
import { ProductList } from './components/ProductList.js';
import { render } from './ui/renderer.js';
import { AuthService } from './services/authService.js';
export const initAppEvents = (allProducts) => {
  const app = document.querySelector('#app');

  // Limpiamos cualquier listener previo para no duplicar acciones
  app.onclick = null;
  // Eventos de delegación para el Carrito (Globales)
  app.onclick = (e) => {
    // --- ACCIÓN: AGREGAR AL CARRITO ---
    const addBtn = e.target.closest('.btn-add'); // Funciona en Home y Detalle
    if (addBtn) {
      const id = addBtn.dataset.id;
      const product = allProducts.find(p => p.id == id);
      if (product) {
        addToCart(product);
        // Opcional: Feedback visual rápido
        addBtn.innerText = "¡Añadido! ✅";
        setTimeout(() => addBtn.innerText = addBtn.classList.contains('btn-add-large') ? "🛒 Agregar al Carrito" : "Agregar", 1000);
      }
      return;
    }

    // ACCIÓN: Ajustar cantidad (+ o -)
    const qtyBtn = e.target.closest('.btn-qty');
    if (qtyBtn) {
      const id = parseInt(qtyBtn.dataset.id);
      const change = parseInt(qtyBtn.dataset.change);
      updateQuantity(id, change);
      return;
    }

    // ACCIÓN: Eliminar producto completo
    const removeAllBtn = e.target.closest('.btn-remove-all');
    if (removeAllBtn) {
      const id = parseInt(removeAllBtn.dataset.id);
      updateQuantity(id, -Infinity); // Forzamos la eliminación
      return;
    }

    // --- ACCIÓN: ABRIR MODAL CARRITO ---
    if (e.target.closest('.cart-icon-container')) {
      const modal = document.querySelector('#cart-modal');
      const overlay = document.querySelector('#cart-overlay');
      modal.classList.add('open');
      overlay.classList.add('show');
      renderCartItems();
      return;
    }

    // --- ACCIÓN: CERRAR MODAL ---
    if (e.target.id === 'close-cart' || e.target.id === 'cart-overlay') {
      document.querySelector('#cart-modal').classList.remove('open');
      document.querySelector('#cart-overlay').classList.remove('show');
      return;
    }

    // --- ACCIÓN: ELIMINAR DEL CARRITO ---
    const removeBtn = e.target.closest('.btn-remove');
    if (removeBtn) {
      removeFromCart(removeBtn.dataset.index);
      return;
    }

    // ACCIÓN: Cerrar Sesión (Tanto desde el Header como desde el Sidebar Admin)
    const logoutBtn = e.target.closest('#btn-logout') || e.target.closest('#btn-logout-admin');

    if (logoutBtn) {
      // Pedimos confirmación para evitar cierres accidentales
      const confirmLogout = confirm('¿Estás seguro de que deseas salir del panel administrativo?');

      if (confirmLogout) {
        AuthService.logout();
        // Redirigir a la tienda y recargar para limpiar el estado
        window.location.hash = '#/';
        window.location.reload();
      }
      return;
    }

    // 4. Scroll Top
    if (e.target.id === 'btn-scroll-top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };


  app.addEventListener('input', (e) => {
    if (e.target.id === 'product-search') {
      const term = e.target.value.toLowerCase();
      const filtered = allProducts.filter(p => p.name.toLowerCase().includes(term));

      // Usamos nuestra nueva herramienta
      render('#product-container', ProductList(filtered));
    }
  });

  app.onsubmit = (e) => {
    if (e.target.id === 'product-form') {
      e.preventDefault();

      // 1. Capturar los datos de forma profesional
      const formData = new FormData(e.target);
      const newProduct = {
        id: allProducts.length + 1, // Simulación de ID autoincremental
        name: formData.get('name'),
        price: parseFloat(formData.get('price')),
        image: formData.get('image'),
        category: formData.get('category')
      };

      // 2. Actualizar el "Estado" de la aplicación
      allProducts.push(newProduct);

      // 3. Feedback visual y redirección
      alert('¡Producto creado con éxito!');
      window.location.hash = '#/admin/productos'; // Regresamos a la tabla
    }
  };

  window.addEventListener('scroll', () => {
    const btnTop = document.querySelector('#btn-scroll-top');
    if (btnTop) {
      window.scrollY > 300 ? btnTop.classList.add('show') : btnTop.classList.remove('show');
    }
  });
};