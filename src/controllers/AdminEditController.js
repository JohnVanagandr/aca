import { AdminFormView } from '../views/AdminFormView.js';
import { ProductService } from '../services/productService.js';

export const AdminEditController = {
  render: async (allProducts, params) => {
    const productId = Number(params.id);
    const product = await ProductService.getById(productId);

    if (!product) {
      alert('Producto no encontrado');
      window.location.hash = '#/admin/productos';
      return '';
    }

    return AdminFormView(product);
  },

  // Mantenemos la firma por si el router pasa allProducts, 
  // pero ya no lo manipularemos directamente
  init: (allProducts, params) => {
    const form = document.querySelector('#product-form');

    // Agregamos 'async' aquí porque el ProductService usa promesas
    form?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(form);

      // 1. Extraemos y formateamos los datos limpios
      const updatedData = {
        name: formData.get('name'),
        price: parseFloat(formData.get('price')),
        image: formData.get('image'),
        category: formData.get('category')
      };

      // 2. LA SOLUCIÓN: Llamamos al servicio para que él haga el guardado real en LocalStorage
      await ProductService.update(Number(params.id), updatedData);

      // 3. Feedback visual y redirección
      alert('✅ Producto actualizado correctamente');
      window.location.hash = '#/admin/productos';
    });
  }
};