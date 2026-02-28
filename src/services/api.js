export const getProducts = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=20",
    );
    const data = await response.json();

    // Mapeamos los datos para que parezcan productos reales
    return data.map((post) => ({
      id: post.id,
      name: post.title.slice(0, 20), // Cortamos el título
      price: Math.floor(Math.random() * 100) + 10, // Precio aleatorio
      image: `https://picsum.photos/seed/${post.id}/300/200`, // Imagen aleatoria profesional
    }));
  } catch (error) {
    console.error("Error cargando productos:", error);
    return [];
  }
};
