import { AdminFormView } from '../views/AdminFormView.js';

export const AdminFormController = {
  // params vendrá del router si estamos en la ruta de edición (ej: params.id)
  render: async (params) => {
    let product = null;

    // Si la URL trae un ID, buscamos el producto para editar
    if (params && params.id) {
      product = await ProductService.getById(Number(params.id));
    }

    return AdminFormView(product);
  },

  // 2. Reglas específicas para esta vista
  validationRules: {
    name: { required: true },
    price: { required: true, minPrice: true },
    image: { required: true, isUrl: true }
  },

  // 3. Lógica que se ejecuta tras pintar la vista
  init: (allProducts) => {
    const form = document.querySelector('#product-form');
    const imgInput = document.querySelector('#image-input');
    const imgPreview = document.querySelector('#img-preview');

    imgInput?.addEventListener('input', (e) => {
      const url = e.target.value;
      // Si el campo está vacío, ponemos el placeholder
      imgPreview.src = url || 'https://via.placeholder.com/300x200?text=Esperando+URL...';

      // Manejo de error si la URL no es una imagen válida
      imgPreview.onerror = () => {
        imgPreview.src = 'https://via.placeholder.com/300x200?text=URL+No+Válida';
      };
    });

    if (!form) return;

    form?.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const data = {
        name: formData.get('name'),
        price: Number(formData.get('price')),
        image: formData.get('image'),
        category: formData.get('category')
      };

      const id = formData.get('id');

      if (id) {
        // Modo Edición
        await ProductService.update(Number(id), data);
        alert('Producto actualizado con éxito');
      } else {
        // Modo Creación
        await ProductService.create(data);
        alert('Producto creado con éxito');
      }

      // Redirigimos al inventario
      window.location.hash = '#/admin/productos';
    });
  },

  showErrors: (errors) => {
    // Limpiar errores previos
    document.querySelectorAll('.error-message').forEach(el => el.remove());

    for (const field in errors) {
      const input = document.querySelector(`[name="${field}"]`);
      const errorSpan = document.createElement('span');
      errorSpan.className = 'error-message';
      errorSpan.innerText = errors[field];
      input.after(errorSpan);
      input.parentElement.classList.add('has-error');
    }
  }
}