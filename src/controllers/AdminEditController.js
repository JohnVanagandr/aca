// src/controllers/AdminEditController.js
import { AdminProductForm } from '../components/AdminProductForm.js';
import { validate } from '../utils/validator.js';

export const AdminEditController = {
  render: (allProducts, params) => {
    const product = allProducts.find(p => p.id == params.id);
    // Pasamos el producto al formulario para que se auto-llene
    return AdminProductForm(product);
  },

  init: (allProducts, params) => {
    const form = document.querySelector('#product-form');

    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const updatedData = Object.fromEntries(formData.entries());

      // 1. Validar (reutilizando el helper)
      // ... (lógica de validación igual al de creación)

      // 2. Actualizar el producto en el array global
      const index = allProducts.findIndex(p => p.id == params.id);
      allProducts[index] = {
        ...allProducts[index],
        ...updatedData,
        price: parseFloat(updatedData.price)
      };

      window.location.hash = '#/admin/productos';
    });
  }
};