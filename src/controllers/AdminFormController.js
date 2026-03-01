import { AdminProductForm } from '../components/AdminProductForm.js';
import { validate } from '../utils/validator.js';

export const AdminFormController = {
  // 1. Qué se muestra
  render: () => AdminProductForm(),

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

    form.onsubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      const result = validate(data, AdminFormController.validationRules);

      if (!result.isValid) {
        alert("Errores:\n" + Object.values(result.errors).join("\n"));
        return;
      }

      // Lógica de guardado
      const newProduct = {
        ...data,
        id: allProducts.length + 1,
        price: parseFloat(data.price)
      };
      allProducts.push(newProduct);
      window.location.hash = '#/admin/productos';
    };
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