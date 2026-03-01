export const AdminProductTable = (products) => {
  return `
    <div class="admin-table-container fade-in">
      <div class="admin-table-header">
        <h2>Gestión de Inventario</h2>
        <a href="#/admin/productos/nuevo" class="btn-create"><span>+</span> Nuevo Producto</a>
      </div>
      <table class="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Imagen</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          ${products.map(p => `
            <tr>
              <td>#${p.id}</td>
              <td><img src="${p.image}" class="table-img" alt="${p.name}"></td>
              <td class="table-name">${p.name}</td>
              <td><strong>$${p.price.toLocaleString()}</strong></td>
              <td class="table-actions">
                <a href="#/admin/productos/editar/${p.id}" class="btn-edit" title="Editar">✏️</a>
                <button class="btn-delete" data-id="${p.id}" title="Eliminar">🗑️</button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
};