import { AdminProductTable } from '../components/AdminProductTable.js';
import { ProductService } from '../services/productService.js';
import { handleRouting } from '../router.js';

export const AdminProductController = {
  render: (allProducts) => {
    return AdminProductTable(allProducts);
  },

  init: (allProducts) => {
    const table = document.querySelector('.admin-table');
    if (!table) return;

    table.addEventListener('click', (e) => {
      const deleteBtn = e.target.closest('.btn-delete');

      if (deleteBtn) {
        const productId = parseInt(deleteBtn.dataset.id);
        const product = allProducts.find(p => p.id === productId);

        // 1. Confirmación de seguridad
        const confirmDelete = confirm(`¿Estás seguro de que deseas eliminar "${product.name}"?`);

        if (confirmDelete) {
          // 2. Lógica de borrado en el array local (en memoria)
          const index = allProducts.findIndex(p => p.id === productId);
          if (index !== -1) {
            allProducts.splice(index, 1);

            // 3. Persistencia: Guardamos el nuevo array en LocalStorage
            ProductService.saveAll(allProducts);

            // 4. Refrescar la vista: Llamamos al router para que re-dibuje la tabla
            handleRouting(allProducts);

            // Opcional: Feedback visual
            console.log(`Producto ${productId} eliminado correctamente.`);
          }
        }
      }
    });
  }
};