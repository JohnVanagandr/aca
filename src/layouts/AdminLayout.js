/**
 * Estructura para el Panel de Control.
 * @param {string} viewContent - Contenido dinámico (Lista de productos, Usuarios, etc.)
 */
export const AdminLayout = (viewContent) => {
  return `
    <div class="admin-wrapper">
      <aside class="admin-sidebar">
        <div class="sidebar-header">
          <h2>SENA Admin</h2>
        </div>
        <nav class="sidebar-nav">
          <ul>
            <li><a href="#/admin">📊 Dashboard</a></li>
            <li><a href="#/admin/productos">📦 Productos</a></li>
            <li><a href="#/admin/ventas">💰 Ventas</a></li>
            <li><hr></li>
            <li><a href="#/" class="exit-link">🏠 Volver a la Tienda</a></li>
          </ul>
        </nav>
      </aside>
      
      <main class="admin-main">
        <header class="admin-topbar">
          <span>Bienvenido, Instructor</span>
          <button class="btn-logout-sidebar" id="btn-logout-admin">Cerrar Sesión</button>
        </header>
        <section class="admin-content">
          ${viewContent}
        </section>
      </main>
    </div>
  `;
};