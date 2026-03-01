const STORAGE_KEY = 'sena_store_inventory';

export const ProductService = {
  /**
   * Obtiene los productos. Si existen en LocalStorage los devuelve, 
   * de lo contrario, consume la API para sembrar la base de datos.
   */
  getAll: async () => {
    const localData = localStorage.getItem(STORAGE_KEY);

    if (localData) {
      return JSON.parse(localData);
    }

    // --- Lógica original de tu api.js (Semilla inicial) ---
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=20");
      const data = await response.json();

      const initialProducts = data.map((post) => ({
        id: post.id,
        name: post.title.slice(0, 20),
        price: Math.floor(Math.random() * 100) + 10,
        image: `https://picsum.photos/seed/${post.id}/300/200`,
        category: 'perifericos' // Categoría por defecto para la semilla
      }));

      // Guardamos en LocalStorage para que la próxima vez no pida a la API
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialProducts));
      return initialProducts;

    } catch (error) {
      console.error("Error cargando productos iniciales:", error);
      return [];
    }
  },

  /**
   * Guarda el estado actual del inventario en el almacenamiento local.
   * Úsalo después de crear, editar o eliminar un producto.
   */
  saveAll: (products) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  },

  /**
     * Busca un producto específico por su ID
     */
  getById: async (id) => {
    // 1. Traemos todo el catálogo
    const products = await ProductService.getAll();

    // 2. Buscamos la coincidencia exacta asegurando el tipo de dato
    const foundProduct = products.find(product => product.id === Number(id));

    // 3. Retornamos el producto, o null si alguien inventó un ID en la URL
    return foundProduct || null;
  },

  /**
   * Limpia el almacenamiento para forzar una nueva carga desde la API.
   */
  reset: () => {
    localStorage.removeItem(STORAGE_KEY);
    window.location.reload();
  }
};