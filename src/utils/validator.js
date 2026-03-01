export const validate = (data, rules) => {
  const errors = {};

  for (const field in rules) {
    const value = data[field];
    const fieldRules = rules[field];

    // 1. Regla: Requerido
    if (fieldRules.required && (!value || value.toString().trim() === "")) {
      errors[field] = "Este campo es obligatorio";
      continue; // Si está vacío y es requerido, no seguimos validando otras reglas de este campo
    }

    // 2. Regla: Precio mínimo
    if (fieldRules.minPrice && parseFloat(value) <= 0) {
      errors[field] = `El precio debe ser mayor a 0`;
    }

    // 3. Regla: Formato de URL (para la imagen)
    if (fieldRules.isUrl && value) {
      const urlPattern = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/i;
      if (!urlPattern.test(value)) {
        errors[field] = "Ingresa una URL de imagen válida (jpg, png, webp)";
      }
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};