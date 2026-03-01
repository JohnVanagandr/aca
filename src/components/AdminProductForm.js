/**
 * Genera el formulario de administración.
 * @param {Object|null} product - Si se pasa un producto, el formulario entra en modo edición.
 */
export const AdminProductForm = (product = null) => {
  // Determinamos si es creación o edición para el título
  const title = product ? 'Editar Producto' : 'Añadir Nuevo Producto';
  const buttonText = product ? 'Guardar Cambios' : 'Crear Producto';

  return `
    <div class="admin-form-container fade-in">
      <div class="form-header">
        <a href="#/admin/productos" class="back-link">← Volver a la lista</a>
        <h1>${title}</h1>
      </div>

      <form id="product-form" class="admin-form">
        <div class="form-grid">
          
          <div class="form-inputs">
            <div class="form-group">
              <label for="name">Nombre del Producto</label>
              <input type="text" id="name" name="name" 
                     value="${product?.name || ''}" 
                     placeholder="Ej. Monitor Gamer 144hz" required>
            </div>

            <div class="form-group">
              <label for="price">Precio ($)</label>
              <input type="number" id="price" name="price" 
                     value="${product?.price || ''}" 
                     placeholder="Ej. 1200000" required>
            </div>

            <div class="form-group">
              <label for="image">URL de la Imagen</label>
              <input type="url" id="image-input" name="image" 
                     value="${product?.image || ''}" 
                     placeholder="https://images.unsplash.com/..." required>
            </div>

            <div class="form-group">
              <label for="category">Categoría</label>
              <select id="category" name="category">
                <option value="hardware" ${product?.category === 'hardware' ? 'selected' : ''}>Hardware</option>
                <option value="software" ${product?.category === 'software' ? 'selected' : ''}>Software</option>
                <option value="perifericos" ${product?.category === 'perifericos' ? 'selected' : ''}>Periféricos</option>
              </select>
            </div>
          </div>

          <div class="form-preview">
            <p class="preview-label">Vista previa de imagen:</p>
            <div class="image-preview-box">
              <img id="img-preview" 
                   src="${product?.image || 'https://via.placeholder.com/300x200?text=Sin+Imagen'}" 
                   alt="Preview">
            </div>
            <small class="preview-help">Asegúrate de que la URL termine en .jpg, .png o .webp</small>
          </div>

        </div>

        <button type="submit" class="btn-save">${buttonText}</button>
      </form>
    </div>
  `;
};