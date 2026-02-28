import "./style.css";
import { getProducts } from "./services/api.js";
import { ProductList } from "./components/ProductList.js";
import { Filter } from "./components/Filter.js";
import { Header } from "./components/Header.js";
import { Footer } from "./components/Footer.js";
import { ScrollTop } from "./components/ScrollTop.js";

import { addToCart, getCartCount } from "./logic/cartLogic.js";
import { CartModal } from "./components/CartModal.js";
import { renderCartItems } from "./logic/cartLogic.js";
import { removeFromCart } from "./logic/cartLogic.js";

const app = document.querySelector("#app");
let allProducts = []; // Para guardar los datos de la API

const renderApp = async () => {
  // 1. Estado de carga inicial
  app.innerHTML = `<div id="loader">Cargando catálogo...</div>`;

  // 2. Traer datos
  allProducts = await getProducts();
  const cartCount = getCartCount();

  // 3. Pintar la estructura BASE (Header, Buscador, Contenedor Vacío, Footer)
  app.innerHTML = `
    ${Header(cartCount)}
    <main>
      ${Filter()} 
      <div id="product-container">
        ${ProductList(allProducts)}
      </div>
    </main>
    ${Footer()}
    ${ScrollTop()}
  `;

  app.innerHTML += CartModal();
  // 4. VINCULAR EVENTOS (Solo después de que el HTML existe)
  initEvents();
};

const initEvents = () => {
  const searchInput = document.querySelector("#product-search");
  const productContainer = document.querySelector("#product-container");
  const btnTop = document.querySelector("#btn-scroll-top");
  const cartBtn = document.querySelector(".cart-icon-container");
  const cartModal = document.querySelector("#cart-modal");
  const closeCartBtn = document.querySelector("#close-cart");
  const cartItemsContainer = document.querySelector("#cart-items-container");
  const cartOverlay = document.querySelector("#cart-overlay");

  const openCart = () => {
    cartModal.classList.add("open");
    cartOverlay.classList.add("show");
    document.body.style.overflow = "hidden"; // Evita el scroll del fondo
    renderCartItems();
  };

  // Función para cerrar
  const closeCart = () => {
    cartModal.classList.remove("open");
    cartOverlay.classList.remove("show");
    document.body.style.overflow = "auto"; // Devuelve el scroll al body
  };

  cartBtn?.addEventListener("click", openCart);
  closeCartBtn?.addEventListener("click", closeCart);
  cartOverlay?.addEventListener("click", closeCart);

  cartBtn?.addEventListener("click", () => {
    cartModal.classList.add("open");
    renderCartItems(); // Refrescamos la lista cada vez que se abre
  });

  // closeCartBtn?.addEventListener("click", () => {
  //   cartModal.classList.remove("open");
  // });

  cartItemsContainer?.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-remove")) {
      const index = e.target.dataset.index;
      removeFromCart(index);
    }
  });

  // Evento de Filtro
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const term = e.target.value.toLowerCase();
      const filtered = allProducts.filter((p) =>
        p.name.toLowerCase().includes(term),
      );

      // Actualizamos solo el pedazo de los productos
      productContainer.innerHTML = ProductList(filtered);
    });
  }

  productContainer.addEventListener("click", (e) => {
    // Verificamos si el clic fue en un botón de "Agregar"
    if (e.target.classList.contains("btn-add")) {
      const productId = e.target.closest(".product-card").dataset.id;
      const product = allProducts.find((p) => p.id == productId);

      if (product) {
        addToCart(product);
      }
    }
  });

  // Evento Scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btnTop?.classList.add("show");
    } else {
      btnTop?.classList.remove("show");
    }
  });

  btnTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
};

renderApp();
