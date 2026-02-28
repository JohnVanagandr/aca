import { ProductCard } from "./ProductCard.js";

export const ProductList = (products) => {
  if (products.length === 0) return `<p>Cargando productos...</p>`;

  return `
    <section class="product-grid">
      ${products.map((product) => ProductCard(product)).join("")}
    </section>
  `;
};
