import { ProductList } from '../components/ProductList.js';
import { Filter } from '../components/Filter.js';
import { render } from '../ui/renderer.js';

export const HomeController = {
  render: (allProducts) => {
    return `
      ${Filter()}
      <div id="product-container" class="fade-in">
        ${ProductList(allProducts)}
      </div>
    `;
  },

  init: (allProducts) => {
    const searchInput = document.querySelector('#product-search');
    const categorySelect = document.querySelector('#category-filter');
    const containerSelector = '#product-container';

    const applyFilters = () => {
      const searchTerm = searchInput?.value.toLowerCase() || "";
      const selectedCategory = categorySelect?.value || "all";

      const filtered = allProducts.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(searchTerm);
        const matchesCategory = selectedCategory === "all" || p.category === selectedCategory;
        return matchesSearch && matchesCategory;
      });

      // Actualizamos la interfaz usando el renderer
      render(containerSelector, ProductList(filtered));
    };

    // Escuchamos ambos eventos
    searchInput?.addEventListener('input', applyFilters);
    categorySelect?.addEventListener('change', applyFilters);
  }
};